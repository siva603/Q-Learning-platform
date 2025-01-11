// Audio Context for sound generation
let audioContext = null;

// Initialize audio context on user interaction
function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

// Sound generation functions
function generateCorrectSound() {
    if (!audioContext) return;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(880, audioContext.currentTime); // A5 note
    
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.05);
    gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.5);
    
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.5);
}

function generateWrongSound() {
    if (!audioContext) return;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(220, audioContext.currentTime); // A3 note
    
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.05);
    gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.3);
    
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.3);
}


function generateClickSound() {
    if (!audioContext) return;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(1200, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + 0.02);
    gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.1);
    
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.1);
}

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 30;
let currentLevel = 'level1';

// Store the initial quiz container HTML
const initialQuizHTML = `
    <div class="quiz-header">
        <div id="timer" class="glow">Time Left: 30s</div>
        <div id="question-counter">Question 1/10</div>
    </div>
    <div class="question-area">
        <h2 id="question">Question goes here</h2>
        <div id="options" class="options-grid"></div>
    </div>
    <button onclick="exitQuiz()" class="exit-btn">
        <span class="btn-text">Exit Quiz</span>
        <span class="btn-icon">↩</span>
    </button>
`;

function showLoadingScreen() {
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading-screen';
    loadingScreen.innerHTML = `
        <div class="loading-box">
            <div class="loading-ring">
                <div class="ring-side"></div>
                <div class="ring-side"></div>
                <div class="ring-side"></div>
            </div>
        </div>
        <div class="loading-text">Preparing Your Quiz</div>
        <div class="loading-dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
        <div class="progress-container">
            <div class="progress-bar"></div>
        </div>
    `;
    document.body.appendChild(loadingScreen);

    return new Promise(resolve => {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(loadingScreen);
                resolve();
            }, 500);
        }, 2000); // Set to exactly 2 seconds
    });
}

async function startQuiz(category) {
    if (category === 'english') {
        // Open English learning page in a new tab
        window.open('english.html', '_blank');
        return;
    }

    if (category === 'r20') {
        showR20Selection();
        return;
    }

    if (category === 'r23') {
        showR23Selection();
        return;
    }
    
    // Show loading screen first
    await showLoadingScreen();
    
    // Reset all states
    currentQuestion = 0;
    score = 0;
    currentLevel = 'level1';
    timeLeft = 30;
    clearInterval(timer);
    
    // Reset quiz container to initial state
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = initialQuizHTML;
    
    // Show quiz container and hide welcome screen
    document.getElementById('welcomeScreen').style.display = 'none';
    quizContainer.style.display = 'block';
    
    // Load first question
    loadQuestion(category);
}

function loadQuestion(category) {
    clearInterval(timer);
    timeLeft = 30;
    updateTimer();
    
    timer = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleNextQuestion(category);
        }
    }, 1000);

    const categoryQuestions = questions[category][currentLevel];
    
    // Shuffle questions if not already shuffled
    if (!categoryQuestions.shuffled) {
        shuffleArray(categoryQuestions);
        categoryQuestions.shuffled = true;
    }
    
    // Store the shuffled question data for later use
    const currentQuestionData = categoryQuestions[currentQuestion];
    currentQuestionData.shuffledData = shuffleOptions(currentQuestionData);
    
    if (!currentQuestionData) {
        showResult(category);
        return;
    }

    document.getElementById('question').textContent = currentQuestionData.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    const optionLetters = ['A', 'B', 'C', 'D'];
    currentQuestionData.shuffledData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.innerHTML = `
            <span class="option-label">${optionLetters[index]}</span>
            <span class="option-text">${option}</span>
        `;
        button.onclick = () => checkAnswer(index, category);
        optionsContainer.appendChild(button);
    });

    document.getElementById('question-counter').textContent = `Question ${currentQuestion + 1}/${categoryQuestions.length}`;
}

function updateTimer() {
    document.getElementById('timer').textContent = `Time Left: ${timeLeft}s`;
}

function checkAnswer(selectedIndex, category) {
    const currentQuestionData = questions[category][currentLevel][currentQuestion];
    const correct = currentQuestionData.shuffledData.correct;
    
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(button => button.disabled = true);
    
    if (selectedIndex === correct) {
        score++;
        generateCorrectSound();
        buttons[selectedIndex].classList.add('correct');
        showPopAnimation('Correct!', '#4CAF50');
    } else {
        generateWrongSound();
        buttons[selectedIndex].classList.add('wrong');
        buttons[correct].classList.add('correct');
        showPopAnimation('Wrong!', '#f44336');
    }
    
    setTimeout(() => handleNextQuestion(category), 1500);
}

function getImprovementTips(score, totalQuestions) {
    const accuracy = (score / totalQuestions) * 100;
    let tips = [];
    
    if (accuracy < 50) {
        tips = [
            "Review the basic concepts thoroughly",
            "Take more time to read each question carefully",
            "Practice with easier questions first",
            "Consider making study notes"
        ];
    } else if (accuracy < 75) {
        tips = [
            "Focus on your weak areas",
            "Try to understand why you got certain questions wrong",
            "Practice time management",
            "Review explanations for incorrect answers"
        ];
    } else {
        tips = [
            "Challenge yourself with harder questions",
            "Try to improve your speed",
            "Help others learn the concepts",
            "Move on to advanced topics"
        ];
    }
    return tips;
}

function showResult(category) {
    clearInterval(timer);
    const totalQuestions = questions[category][currentLevel].length;
    const accuracy = Math.round((score / totalQuestions) * 100);
    const tips = getImprovementTips(score, totalQuestions);
    
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = `
        <div class="result-screen">
            <h2>Quiz Completed! 🎉</h2>
            
            <div class="accuracy-meter">
                <div class="accuracy-value">${accuracy}%</div>
            </div>
            
            <div class="score-summary">
                <h3>Score Summary</h3>
                <p>Correct Answers: ${score} out of ${totalQuestions}</p>
                <p>Time Taken: ${30 - timeLeft} seconds</p>
            </div>
            
            <div class="improvement-tips">
                <h3>Improvement Tips</h3>
                ${tips.map(tip => `<div class="tip-item">${tip}</div>`).join('')}
            </div>
            
            <div class="result-actions">
                <button onclick="startQuiz('${category}')" class="retry-btn">
                    <span class="btn-text">Retry Quiz</span>
                    <span class="btn-icon">🔄</span>
                </button>
                <button onclick="exitQuiz()" class="exit-btn">
                    <span class="btn-text">Back to Categories</span>
                    <span class="btn-icon">↩</span>
                </button>
            </div>
        </div>
    `;
}

function exitQuiz() {
    clearInterval(timer);
    
    // Reset all states
    currentQuestion = 0;
    score = 0;
    currentLevel = 'level1';
    timeLeft = 30;
    
    // Reset quiz container to initial state
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = initialQuizHTML;
    
    // Hide quiz container and show welcome screen
    quizContainer.style.display = 'none';
    document.getElementById('welcomeScreen').style.display = 'block';
}

function handleNextQuestion(category) {
    currentQuestion++;
    const categoryQuestions = questions[category][currentLevel];
    
    if (currentQuestion < categoryQuestions.length) {
        loadQuestion(category);
    } else {
        if (score >= (categoryQuestions.length * 0.7) && questions[category]['level' + (parseInt(currentLevel.slice(-1)) + 1)]) {
            currentLevel = 'level' + (parseInt(currentLevel.slice(-1)) + 1);
            currentQuestion = 0;
            loadQuestion(category);
        } else {
            showResult(category);
        }
    }
}

function showPopAnimation(text, color) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.textContent = text;
    popup.style.color = color;
    document.body.appendChild(popup);
    
    setTimeout(() => popup.remove(), 1000);
}

// this is for r20 regulation staring function 

function showR20Selection() {
    const welcomeScreen = document.getElementById('welcomeScreen');
    welcomeScreen.innerHTML = `
        <div class="entrance-animation">
            <h1 class="title">R20 Regulation</h1>
            <div class="floating-shapes">
                <div class="shape"></div>
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
        </div>
        <div class="category-grid">
            <button onclick="selectBranch('cse','R20')" class="category-btn">
                <div class="btn-content">
                    <span class="icon">💻</span>
                    <span class="title">CSE</span>
                    <span class="description">Computer Science Engineering</span>
                    <div class="btn-background"></div>
                </div>
            </button>
            
            <button onclick="selectBranch('ece','R20')" class="category-btn">
                <div class="btn-content">
                    <span class="icon">📡</span>
                    <span class="title">ECE</span>
                    <span class="description">Electronics & Communication</span>
                    <div class="btn-background"></div>
                </div>
            </button>
            
            <button onclick="selectBranch('eee','R20')" class="category-btn">
                <div class="btn-content">
                    <span class="icon">⚡</span>
                    <span class="title">EEE</span>
                    <span class="description">Electrical & Electronics</span>
                    <div class="btn-background"></div>
                </div>
            </button>
            
            <button onclick="selectBranch('civil','R20')" class="category-btn">
                <div class="btn-content">
                    <span class="icon">🏗️</span>
                    <span class="title">CIVIL</span>
                    <span class="description">Civil Engineering</span>
                    <div class="btn-background"></div>
                </div>
            </button>
        </div>
        <button onclick="exitR20()" class="exit-btn">
            <span class="btn-text">Back to Main Menu</span>
            <span class="btn-icon">↩</span>
        </button>
    `;
}

// this is for r23 regulation  staring function

function showR23Selection() {
    const welcomeScreen = document.getElementById('welcomeScreen');
    welcomeScreen.innerHTML = `
        <div class="entrance-animation">
            <h1 class="title">R23 Regulation</h1>
            <div class="floating-shapes">
                <div class="shape"></div>
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
        </div>
        <div class="category-grid">
            <button onclick="selectBranchR23('cse','R23')" class="category-btn">
                <div class="btn-content">
                    <span class="icon">💻</span>
                    <span class="title">CSE</span>
                    <span class="description">Computer Science Engineering</span>
                    <div class="btn-background"></div>
                </div>
            </button>
            
            <button onclick="selectBranchR23('ece','R23')" class="category-btn">
                <div class="btn-content">
                    <span class="icon">📡</span>
                    <span class="title">ECE</span>
                    <span class="description">Electronics & Communication</span>
                    <div class="btn-background"></div>
                </div>
            </button>
            
            <button onclick="selectBranchR23('eee','R23')" class="category-btn">
                <div class="btn-content">
                    <span class="icon">⚡</span>
                    <span class="title">EEE</span>
                    <span class="description">Electrical & Electronics</span>
                    <div class="btn-background"></div>
                </div>
            </button>
            
            <button onclick="selectBranchR23('civil','R23')" class="category-btn">
                <div class="btn-content">
                    <span class="icon">🏗️</span>
                    <span class="title">CIVIL</span>
                    <span class="description">Civil Engineering</span>
                    <div class="btn-background"></div>
                </div>
            </button>
        </div>
        <button onclick="exitR20()" class="exit-btn">
            <span class="btn-text">Back to Main Menu</span>
            <span class="btn-icon">↩</span>
        </button>
    `;
}

// this is for r20 and r23 branch function

function selectBranch(branch,regulation) {
    const welcomeScreen = document.getElementById('welcomeScreen');
    welcomeScreen.innerHTML = `
        <div class="entrance-animation">
            <h1 class="title">${regulation,branch.toUpperCase()}</h1>
            <div class="floating-shapes">
                <div class="shape"></div>
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
        </div>
        <div class="category-grid">
            ${[1, 2, 3, 4].map(year => `
                <button onclick="selectYear('${branch}', ${year})" class="category-btn">
                    <div class="btn-content">
                        <span class="icon">📚</span>
                        <span class="title">${year}${getYearSuffix(year)} Year</span>
                        <span class="description">Academic Year ${year}</span>
                        <div class="btn-background"></div>
                    </div>
                </button>
            `).join('')}
        </div>
        <button onclick="showR23Selection()" class="exit-btn">
            <span class="btn-text">Back to Branches</span>
            <span class="btn-icon">↩</span>
        </button>
    `;
}

function selectBranchR23(branch,regulation) {
    const welcomeScreen = document.getElementById('welcomeScreen');
    welcomeScreen.innerHTML = `
        <div class="entrance-animation">
            <h1 class="title">${regulation,branch.toUpperCase()}</h1>
            <div class="floating-shapes">
                <div class="shape"></div>
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
        </div>
        <div class="category-grid">
            ${[1, 2, 3, 4].map(year => `
                <button onclick="selectYearR23('${branch}', ${year})" class="category-btn">
                    <div class="btn-content">
                        <span class="icon">📚</span>
                        <span class="title">${year}${getYearSuffix(year)} Year</span>
                        <span class="description">R23 Academic Year ${year}</span>
                        <div class="btn-background"></div>
                    </div>
                </button>
            `).join('')}
        </div>
        <button onclick="showR23Selection()" class="exit-btn">
            <span class="btn-text">Back to Branches</span>
            <span class="btn-icon">↩</span>
        </button>
    `;
}

function getYearSuffix(year) {
    if (year === 1) return 'st';
    if (year === 2) return 'nd';
    if (year === 3) return 'rd';
    return 'th';
}

// this is for r20 year  and path also different

function selectYear(branch, year) {
    const welcomeScreen = document.getElementById('welcomeScreen');
    const syllabusPath = `materials/syllabus/${branch}/year${year}_syllabus.pdf`;
    welcomeScreen.innerHTML = `
        <div class="entrance-animation">
            <h1 class="title">${year}${getYearSuffix(year)} Year</h1>
            <div class="floating-shapes">
                <div class="shape"></div>
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
        </div>
        <div class="syllabus-container">
            <div class="pdf-item" id="syllabus-container">
                <span class="pdf-icon">📚</span>
                <span class="pdf-title">Year ${year} Syllabus</span>
                <a href="${syllabusPath}" 
                   class="pdf-download-btn disabled" 
                   id="syllabus-download-btn"
                   target="_blank" 
                   download>
                    Download Syllabus
                </a>
            </div>
            <div id="syllabus-status-message" class="pdf-status-message"></div>
        </div>
        <div class="category-grid">
            ${[1, 2].map(sem => `
                <button onclick="selectSemester('${branch}', ${year}, ${sem})" class="category-btn">
                    <div class="btn-content">
                        <span class="icon">📚</span>
                        <span class="title">Semester ${sem}</span>
                        <div class="btn-background"></div>
                    </div>
                </button>
            `).join('')}
        </div>
        <button onclick="selectBranch('${branch}')" class="exit-btn">
            <span class="btn-text">Back</span>
            <span class="btn-icon">↩</span>
        </button>
    `;

    // Check if syllabus exists and update the button state
    checkFileExists(syllabusPath).then(exists => {
        const downloadBtn = document.getElementById('syllabus-download-btn');
        const statusMessage = document.getElementById('syllabus-status-message');
        
        if (exists) {
            downloadBtn.classList.remove('disabled');
            statusMessage.textContent = '';
        } else {
            downloadBtn.classList.add('disabled');
            downloadBtn.removeAttribute('href');
            downloadBtn.removeAttribute('download');
            statusMessage.textContent = 'Syllabus PDF is not available yet.';
        }
    });
}

// this is for r23 year  and path also different

function selectYearR23(branch, year) {
    const welcomeScreen = document.getElementById('welcomeScreen');
    const syllabusPath = `r23_materials/syllabus/${branch}/year${year}_syllabus.pdf`;
    welcomeScreen.innerHTML = `
        <div class="entrance-animation">
            <h1 class="title">R23 ${year}${getYearSuffix(year)} Year</h1>
            <div class="floating-shapes">
                <div class="shape"></div>
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
        </div>
        <div class="syllabus-container">
            <div class="pdf-item" id="syllabus-container">
                <span class="pdf-icon">📚</span>
                <span class="pdf-title">Year ${year} Syllabus</span>
                <a href="${syllabusPath}" 
                   class="pdf-download-btn disabled" 
                   id="syllabus-download-btn"
                   target="_blank" 
                   download>
                    Download Syllabus
                </a>
            </div>
            <div id="syllabus-status-message" class="pdf-status-message"></div>
        </div>
        <div class="category-grid">
            ${[1, 2].map(sem => `
                <button onclick="selectSemesterR23('${branch}', ${year}, ${sem})" class="category-btn">
                    <div class="btn-content">
                        <span class="icon">📚</span>
                        <span class="title">Semester ${sem}</span>
                        <div class="btn-background"></div>
                    </div>
                </button>
            `).join('')}
        </div>
        <button onclick="selectBranchR23('${branch}')" class="exit-btn">
            <span class="btn-text">Back</span>
            <span class="btn-icon">↩</span>
        </button>
    `;

    // Check if syllabus exists and update the button state
    checkFileExists(syllabusPath).then(exists => {
        const downloadBtn = document.getElementById('syllabus-download-btn');
        const statusMessage = document.getElementById('syllabus-status-message');
        
        if (exists) {
            downloadBtn.classList.remove('disabled');
            statusMessage.textContent = '';
        } else {
            downloadBtn.classList.add('disabled');
            downloadBtn.removeAttribute('href');
            downloadBtn.removeAttribute('download');
            statusMessage.textContent = 'Syllabus PDF is not available yet.';
        }
    });
}

// these function for R20 and R23 to get semesters 

function selectSemester(branch, year, semester) {
    const welcomeScreen = document.getElementById('welcomeScreen');
    welcomeScreen.innerHTML = `
        <div class="entrance-animation">
            <h1 class="title">Semester ${semester}</h1>
            <div class="floating-shapes">
                <div class="shape"></div>
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
        </div>
        <div class="category-grid">
            ${[1, 2, 3, 4, 5].map(subject => `
                <button onclick="selectSubject('${branch}', ${year}, ${semester}, ${subject})" class="category-btn">
                    <div class="btn-content">
                        <span class="icon">📘</span>
                        <span class="title">Subject ${subject}</span>
                        <span class="description">${r20Materials[branch]?.[`year${year}`]?.[`sem${semester}`]?.[`subject${subject}`]?.name}</span>
                        <div class="btn-background"></div>
                    </div>
                </button>
            `).join('')}
        </div>
        <button onclick="selectYear('${branch}', ${year})" class="exit-btn">
            <span class="btn-text">Back to Semesters</span>
            <span class="btn-icon">↩</span>
        </button>
    `;
}

function selectSemesterR23(branch, year, semester) {
    
    const welcomeScreen = document.getElementById('welcomeScreen');

    welcomeScreen.innerHTML = `
        <div class="entrance-animation">
            <h1 class="title">R23 Semester ${semester}</h1>
            <div class="floating-shapes">
                <div class="shape"></div>
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
        </div> 
        <div class="category-grid">
            ${[1, 2, 3, 4, 5].map(subject => `
                <button onclick="selectSubjectR23('${branch}', ${year}, ${semester}, ${subject})" class="category-btn">
                    <div class="btn-content">
                        <span class="icon">📘</span>
                        <span class="title">Subject ${subject}</span>
                        <span class="description">${r23Materials[branch]?.[`year${year}`]?.[`sem${semester}`]?.[`subject${subject}`]?.name}</span>
                        <div class="btn-background"></div>
                    </div>
                </button>
            `).join('')}
        </div>
        <button onclick="selectYearR23('${branch}', ${year})" class="exit-btn">
            <span class="btn-text">Back to Semesters</span>
            <span class="btn-icon">↩</span>
        </button>
    `;
}

// these function for R20 and R23 to get subjects 


function selectSubject(branch, year, semester, subject, unit) {
    const welcomeScreen = document.getElementById('welcomeScreen');
    welcomeScreen.innerHTML = `
        <div class="entrance-animation">
            <h1 class="title">Subject ${subject}</h1>
            <div class="floating-shapes">
                <div class="shape"></div>
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
        </div>
        <div class="category-grid">
            ${[1, 2, 3, 4, 5].map(unit => `
                <button onclick="showUnitOptions('${branch}', ${year}, ${semester}, ${subject}, ${unit})" class="category-btn">
                    <div class="btn-content">
                        <span class="icon">📚</span>
                        <span class="title">Unit ${unit}</span>
                        <span class="description">${r20Materials[branch]?.[`year${year}`]?.[`sem${semester}`]?.[`subject${subject}`]?.[`unit${unit}`]?.title || `Unit ${unit}`}</span>
                        <div class="btn-background"></div>
                    </div>
                </button>
            `).join('')}
        </div>
        <button onclick="selectSemester('${branch}', ${year}, ${semester})" class="exit-btn">
            <span class="btn-text">Back to Subjects</span>
            <span class="btn-icon">↩</span>
        </button>
    `;
}

function selectSubjectR23(branch, year, semester, subject, unit) {
    const welcomeScreen = document.getElementById('welcomeScreen');
    welcomeScreen.innerHTML = `
        <div class="entrance-animation">
            <h1 class="title">Subject ${subject}</h1>
            <div class="floating-shapes">
                <div class="shape"></div>
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
        </div>
        <div class="category-grid">
            ${[1, 2, 3, 4, 5].map(unit => `
                <button onclick="showUnitOptionsR23('${branch}', ${year}, ${semester}, ${subject}, ${unit})" class="category-btn">
                    <div class="btn-content">
                        <span class="icon">📚</span>
                        <span class="title">Unit ${unit}</span>
                        <span class="description">${r23Materials[branch]?.[`year${year}`]?.[`sem${semester}`]?.[`subject${subject}`]?.[`unit${unit}`]?.title || `Unit ${unit}`}</span>
                        <div class="btn-background"></div>
                    </div>
                </button>
            `).join('')}
        </div>
        <button onclick="selectSemester('${branch}', ${year}, ${semester})" class="exit-btn">
            <span class="btn-text">Back to Subjects</span>
            <span class="btn-icon">↩</span>
        </button>
    `;
}

// these function for R20 and R23 to get units 


function showUnitOptions(branch, year, semester, subject, unit) {
    const welcomeScreen = document.getElementById('welcomeScreen');
    welcomeScreen.innerHTML = `
        <div class="entrance-animation">
            <h1 class="title">Unit ${unit}</h1>
            <div class="floating-shapes">
                <div class="shape"></div>
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
        </div>
        <div class="category-grid">
            <button onclick="showLearningMaterial('${branch}', ${year}, ${semester}, ${subject}, ${unit})" class="category-btn">
                <div class="btn-content">
                    <span class="icon">📖</span>
                    <span class="title">Learn</span>
                    <span class="description">Study the material</span>
                    <div class="btn-background"></div>
                </div>
            </button>
            
            <button onclick="startR20Quiz('${branch}', ${year}, ${semester}, ${subject}, ${unit})" class="category-btn">
                <div class="btn-content">
                    <span class="icon">✍️</span>
                    <span class="title">Practice</span>
                    <span class="description">Take the quiz</span>
                    <div class="btn-background"></div>
                </div>
            </button>
        </div>
        <button onclick="selectSubject('${branch}', ${year}, ${semester}, ${subject})" class="exit-btn">
            <span class="btn-text">Back</span>
            <span class="btn-icon">↩</span>
        </button>
    `;
}

function showUnitOptionsR23(branch, year, semester, subject, unit) {
    const welcomeScreen = document.getElementById('welcomeScreen');
    welcomeScreen.innerHTML = `
        <div class="entrance-animation">
            <h1 class="title">Unit ${unit}</h1>
            <div class="floating-shapes">
                <div class="shape"></div>
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
        </div>
        <div class="category-grid">
            <button onclick="showLearningMaterialR23('${branch}', ${year}, ${semester}, ${subject}, ${unit})" class="category-btn">
                <div class="btn-content">
                    <span class="icon">📖</span>
                    <span class="title">Learn</span>
                    <span class="description">Study the material</span>
                    <div class="btn-background"></div>
                </div>
            </button>
            
            <button onclick="startR20Quiz('${branch}', ${year}, ${semester}, ${subject}, ${unit})" class="category-btn">
                <div class="btn-content">
                    <span class="icon">✍️</span>
                    <span class="title">Practice</span>
                    <span class="description">Take the quiz</span>
                    <div class="btn-background"></div>
                </div>
            </button>
        </div>
        <button onclick="selectSubject('${branch}', ${year}, ${semester}, ${subject})" class="exit-btn">
            <span class="btn-text">Back</span>
            <span class="btn-icon">↩</span>
        </button>
    `;
}

// these function for R20 and R23 to get units for materials

function showLearningMaterial(branch, year, semester, subject, unit) {
    const material = r20Materials[branch][`year${year}`][`sem${semester}`][`subject${subject}`][`unit${unit}`];
    const welcomeScreen = document.getElementById('welcomeScreen');
    const pdfPath = `materials/${branch}/year${year}/sem${semester}/subject${subject}/unit${unit}/notes.pdf`;

    welcomeScreen.innerHTML = `
        <div class="learning-container">
            <h1 class="unit-title">${material.title}</h1>
            <div class="material-tabs">
                <button class="tab-btn active" onclick="switchTab(this, 'interactive')">Interactive Content</button>
                <button class="tab-btn" onclick="switchTab(this, 'pdf')">PDF Materials</button>
            </div>
            <div class="material-content-wrapper">
                <div class="material-content tab-content active" id="interactive-content">
                    ${material.content.map(item => `
                        <div class="material-section ${item.type}">
                            <h2>${item.title}</h2>
                            ${renderMaterialContent(item)}
                        </div>
                    `).join('')}
                </div>
                <div class="material-content tab-content" id="pdf-content">
                    <div class="pdf-list">
                        <div class="pdf-item">
                            <span class="pdf-icon">📄</span>
                            <span class="pdf-title">Unit ${unit} Notes</span>
                            <a href="${pdfPath}"
                               class="pdf-download-btn disabled"
                               id="pdf-download-btn"
                               target="_blank"
                               download>
                                Download PDF
                            </a>
                        </div>
                        <div id="pdf-status-message" class="pdf-status-message"></div>
                    </div>
                </div>
            </div>
            <div class="material-navigation">
                <button onclick="startR20Quiz('${branch}', ${year}, ${semester}, ${subject}, ${unit})" class="start-quiz-btn">
                    <span>Start Quiz</span>
                    <span>✍️</span>
                </button>
                <button onclick="showUnitOptions('${branch}', ${year}, ${semester}, ${subject}, ${unit})" class="exit-btn">
                    <span class="btn-text">Back</span>
                    <span class="btn-icon">↩</span>
                </button>
            </div>
        </div>
    `;

    // Check if PDF exists and update the button state
    checkFileExists(pdfPath).then(exists => {
        const downloadBtn = document.getElementById('pdf-download-btn');
        const statusMessage = document.getElementById('pdf-status-message');
        
        if (exists) {
            downloadBtn.classList.remove('disabled');
            statusMessage.textContent = '';
        } else {
            downloadBtn.classList.add('disabled');
            downloadBtn.removeAttribute('href');
            downloadBtn.removeAttribute('download');
            statusMessage.textContent = 'PDF material is not available for this unit yet.';
        }
    });
}

function showLearningMaterialR23(branch, year, semester, subject, unit) {
    const material = r20Materials[branch][`year${year}`][`sem${semester}`][`subject${subject}`][`unit${unit}`];
    const welcomeScreen = document.getElementById('welcomeScreen');
    const pdfPath = `r23_materials/${branch}/year${year}/sem${semester}/subject${subject}/unit${unit}/notes.pdf`;

    welcomeScreen.innerHTML = `
        <div class="learning-container">
            <h1 class="unit-title">${material.title}</h1>
            <div class="material-tabs">
                <button class="tab-btn active" onclick="switchTab(this, 'interactive')">Interactive Content</button>
                <button class="tab-btn" onclick="switchTab(this, 'pdf')">PDF Materials</button>
            </div>
            <div class="material-content-wrapper">
                <div class="material-content tab-content active" id="interactive-content">
                    ${material.content.map(item => `
                        <div class="material-section ${item.type}">
                            <h2>${item.title}</h2>
                            ${renderMaterialContent(item)}
                        </div>
                    `).join('')}
                </div>
                <div class="material-content tab-content" id="pdf-content">
                    <div class="pdf-list">
                        <div class="pdf-item">
                            <span class="pdf-icon">📄</span>
                            <span class="pdf-title">Unit ${unit} Notes</span>
                            <a href="${pdfPath}"
                               class="pdf-download-btn disabled"
                               id="pdf-download-btn"
                               target="_blank"
                               download>
                                Download PDF
                            </a>
                        </div>
                        <div id="pdf-status-message" class="pdf-status-message"></div>
                    </div>
                </div>
            </div>
            <div class="material-navigation">
                <button onclick="startR20Quiz('${branch}', ${year}, ${semester}, ${subject}, ${unit})" class="start-quiz-btn">
                    <span>Start Quiz</span>
                    <span>✍️</span>
                </button>
                <button onclick="showUnitOptions('${branch}', ${year}, ${semester}, ${subject}, ${unit})" class="exit-btn">
                    <span class="btn-text">Back</span>
                    <span class="btn-icon">↩</span>
                </button>
            </div>
        </div>
    `;

    // Check if PDF exists and update the button state
    checkFileExists(pdfPath).then(exists => {
        const downloadBtn = document.getElementById('pdf-download-btn');
        const statusMessage = document.getElementById('pdf-status-message');
        
        if (exists) {
            downloadBtn.classList.remove('disabled');
            statusMessage.textContent = '';
        } else {
            downloadBtn.classList.add('disabled');
            downloadBtn.removeAttribute('href');
            downloadBtn.removeAttribute('download');
            statusMessage.textContent = 'PDF material is not available for this unit yet.';
        }
    });
}


function switchTab(button, tabId) {
    // Remove active class from all tabs and contents
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding content
    button.classList.add('active');
    document.getElementById(`${tabId}-content`).classList.add('active');
}

function renderMaterialContent(item) {
    switch (item.type) {
        case 'introduction':
        case 'concept':
            return `<p class="material-text">${item.text}</p>`;
        case 'example':
            return `
                <div class="code-example">
                    <pre><code>${item.code}</code></pre>
                </div>`;
        case 'important':
            return `
                <ul class="key-points">
                    ${item.points.map(point => `<li>${point}</li>`).join('')}
                </ul>`;
        case 'practice':
            return `
                <div class="practice-problems">
                    <ol>
                        ${item.problems.map(problem => `<li>${problem}</li>`).join('')}
                    </ol>
                </div>`;
        default:
            return '';
    }
}

// loading the materials data and questions data from json files end

let r20Materials = {};

fetch('r20_materials.json')
    .then(response => response.json())
    .then(data => {
        r20Materials = data;
        console.log('R20 materials loaded successfully');
    })
    .catch(error => console.error('Error loading R20 materials:', error));

function startR20Quiz(branch, year, semester, subject, unit) {
    showLoadingScreen().then(() => {
        currentQuestion = 0;
        score = 0;
        timeLeft = 30;
        clearInterval(timer);
        
        const quizContainer = document.getElementById('quizContainer');
        quizContainer.innerHTML = initialQuizHTML;
        
        document.getElementById('welcomeScreen').style.display = 'none';
        quizContainer.style.display = 'block';
        
        loadR20Question(branch, year, semester, subject, unit);
    });
}

let r20Questions = {};

fetch('r20_questions.json')
    .then(response => response.json())
    .then(data => {
        r23Questions = data;
        console.log('R20 questions loaded successfully');
    })
    .catch(error => console.error('Error loading R20 questions:', error));

// loading r23 materials and questions data

let r23Materials = {};

fetch('r23_materials.json')
    .then(response => response.json())
    .then(data => {
        r23Materials = data;
        console.log('R23 materials loaded successfully');
    })
    .catch(error => console.error('Error loading R23 materials:', error));

function startR23Quiz(branch, year, semester, subject, unit) {
    showLoadingScreen().then(() => {
        currentQuestion = 0;
        score = 0;
        timeLeft = 30;
        clearInterval(timer);
        
        const quizContainer = document.getElementById('quizContainer');
        quizContainer.innerHTML = initialQuizHTML;
        
        document.getElementById('welcomeScreen').style.display = 'none';
        quizContainer.style.display = 'block';
        
        loadR20Question(branch, year, semester, subject, unit);
    });
}

let r23Questions = {};

fetch('r23_questions.json')
    .then(response => response.json())
    .then(data => {
        r20Questions = data;
        console.log('R20 questions loaded successfully');
    })
    .catch(error => console.error('Error loading R23 questions:', error));


// loading the materials data and questions data from json files end

function loadR20Question(branch, year, semester, subject, unit) {
    clearInterval(timer);
    timeLeft = 30;
    updateTimer();
    
    timer = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleNextR20Question(branch, year, semester, subject, unit);
        }
    }, 1000);

    const questions = r20Questions[branch][`year${year}`][`sem${semester}`][`subject${subject}`][`unit${unit}`];
    const questionData = questions[currentQuestion];
    
    if (!questionData) {
        showR20Result(branch, year, semester, subject, unit);
        return;
    }

    document.getElementById('question').textContent = questionData.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    const optionLetters = ['A', 'B', 'C', 'D'];
    questionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.innerHTML = `
            <span class="option-label">${optionLetters[index]}</span>
            <span class="option-text">${option}</span>
        `;
        button.onclick = () => checkR20Answer(index, branch, year, semester, subject, unit);
        optionsContainer.appendChild(button);
    });

    document.getElementById('question-counter').textContent = `Question ${currentQuestion + 1}/${questions.length}`;
}

function handleNextR20Question(branch, year, semester, subject, unit) {
    currentQuestion++;
    const questions = r20Questions[branch][`year${year}`][`sem${semester}`][`subject${subject}`][`unit${unit}`];
    
    if (currentQuestion < questions.length) {
        loadR20Question(branch, year, semester, subject, unit);
    } else {
        showR20Result(branch, year, semester, subject, unit);
    }
}

// Fix the R23 quiz functions similarly
function loadR23Question(branch, year, semester, subject, unit) {
    clearInterval(timer);
    timeLeft = 30;
    updateTimer();
    
    timer = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleNextR23Question(branch, year, semester, subject, unit);
        }
    }, 1000);

    const questions = r23Questions[branch][`year${year}`][`sem${semester}`][`subject${subject}`][`unit${unit}`];
    const questionData = questions[currentQuestion];
    
    if (!questionData) {
        showR23Result(branch, year, semester, subject, unit);
        return;
    }

    document.getElementById('question').textContent = questionData.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    const optionLetters = ['A', 'B', 'C', 'D'];
    questionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.innerHTML = `
            <span class="option-label">${optionLetters[index]}</span>
            <span class="option-text">${option}</span>
        `;
        button.onclick = () => checkR23Answer(index, branch, year, semester, subject, unit);
        optionsContainer.appendChild(button);
    });

    document.getElementById('question-counter').textContent = `Question ${currentQuestion + 1}/${questions.length}`;
}

function handleNextR23Question(branch, year, semester, subject, unit) {
    currentQuestion++;
    const questions = r23Questions[branch][`year${year}`][`sem${semester}`][`subject${subject}`][`unit${unit}`];
    
    if (currentQuestion < questions.length) {
        loadR23Question(branch, year, semester, subject, unit);
    } else {
        showR23Result(branch, year, semester, subject, unit);
    }
}

// Update the startR20Quiz and startR23Quiz functions
function startR20Quiz(branch, year, semester, subject, unit) {
    showLoadingScreen().then(() => {
        currentQuestion = 0;
        score = 0;
        timeLeft = 30;
        clearInterval(timer);
        
        const quizContainer = document.getElementById('quizContainer');
        quizContainer.innerHTML = initialQuizHTML;
        
        document.getElementById('welcomeScreen').style.display = 'none';
        quizContainer.style.display = 'block';
        
        loadR20Question(branch, year, semester, subject, unit);
    });
}

function startR23Quiz(branch, year, semester, subject, unit) {
    showLoadingScreen().then(() => {
        currentQuestion = 0;
        score = 0;
        timeLeft = 30;
        clearInterval(timer);
        
        const quizContainer = document.getElementById('quizContainer');
        quizContainer.innerHTML = initialQuizHTML;
        
        document.getElementById('welcomeScreen').style.display = 'none';
        quizContainer.style.display = 'block';
        
        loadR23Question(branch, year, semester, subject, unit);
    });
}

// Add retry functions
function retryR20Quiz(branch, year, semester, subject, unit) {
    currentQuestion = 0;
    score = 0;
    startR20Quiz(branch, year, semester, subject, unit);
}

function retryR23Quiz(branch, year, semester, subject, unit) {
    currentQuestion = 0;
    score = 0;
    startR23Quiz(branch, year, semester, subject, unit);
}

function checkR20Answer(selectedIndex, branch, year, semester, subject, unit) {
    const questions = r20Questions[branch][`year${year}`][`sem${semester}`][`subject${subject}`][`unit${unit}`];
    const questionData = questions[currentQuestion];
    const correct = questionData.correct;
    
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(button => button.disabled = true);
    
    if (selectedIndex === correct) {
        score++;
        generateCorrectSound();
        buttons[selectedIndex].classList.add('correct');
        showPopAnimation('Correct!', '#4CAF50');
    } else {
        generateWrongSound();
        buttons[selectedIndex].classList.add('wrong');
        buttons[correct].classList.add('correct');
        showPopAnimation('Wrong!', '#f44336');
    }
    
    setTimeout(() => handleNextR20Question(branch, year, semester, subject, unit), 1500);
}

function checkR23Answer(selectedIndex, branch, year, semester, subject, unit) {
    const questions = r23Questions[branch][`year${year}`][`sem${semester}`][`subject${subject}`][`unit${unit}`];
    const questionData = questions[currentQuestion];
    const correct = questionData.correct;
    
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(button => button.disabled = true);
    
    if (selectedIndex === correct) {
        score++;
        generateCorrectSound();
        buttons[selectedIndex].classList.add('correct');
        showPopAnimation('Correct!', '#4CAF50');
    } else {
        generateWrongSound();
        buttons[selectedIndex].classList.add('wrong');
        buttons[correct].classList.add('correct');
        showPopAnimation('Wrong!', '#f44336');
    }
    
    setTimeout(() => handleNextR23Question(branch, year, semester, subject, unit), 1500);
}

function showR20Result(branch, year, semester, subject, unit) {
    const questions = r20Questions[branch][`year${year}`][`sem${semester}`][`subject${subject}`][`unit${unit}`];
    const totalQuestions = questions.length;
    const percentage = (score / totalQuestions) * 100;
    const tips = getImprovementTips(score, totalQuestions);
    
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = `
        <div class="result-container">
            <h2>Quiz Complete!</h2>
            <div class="score-display">
                <div class="score-circle">
                    <span class="score-text">${percentage.toFixed(1)}%</span>
                </div>
                <p>You got ${score} out of ${totalQuestions} questions correct</p>
            </div>
            <div class="improvement-tips">
                <h3>Performance Analysis</h3>
                <ul>
                    ${getPerformanceAnalysis(score, totalQuestions)}
                </ul>
                <h3>Tips for Improvement</h3>
                <ul>
                    ${tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
            <div class="result-buttons">
                <button onclick="retryR20Quiz('${branch}', ${year}, ${semester}, ${subject}, ${unit})" class="restart-btn">
                    <span>Try Again</span>
                    <span>🔄</span>
                </button>
                <button onclick="exitQuiz()" class="home-btn">
                    <span>Home</span>
                    <span>🏠</span>
                </button>
            </div>
        </div>
    `;
}

function showR23Result(branch, year, semester, subject, unit) {
    const questions = r23Questions[branch][`year${year}`][`sem${semester}`][`subject${subject}`][`unit${unit}`];
    const totalQuestions = questions.length;
    const percentage = (score / totalQuestions) * 100;
    const tips = getImprovementTips(score, totalQuestions);
    
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = `
        <div class="result-container">
            <h2>Quiz Complete!</h2>
            <div class="score-display">
                <div class="score-circle">
                    <span class="score-text">${percentage.toFixed(1)}%</span>
                </div>
                <p>You got ${score} out of ${totalQuestions} questions correct</p>
            </div>
            <div class="improvement-tips">
                <h3>Performance Analysis</h3>
                <ul>
                    ${getPerformanceAnalysis(score, totalQuestions)}
                </ul>
                <h3>Tips for Improvement</h3>
                <ul>
                    ${tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
            <div class="result-buttons">
                <button onclick="retryR23Quiz('${branch}', ${year}, ${semester}, ${subject}, ${unit})" class="restart-btn">
                    <span>Try Again</span>
                    <span>🔄</span>
                </button>
                <button onclick="exitQuiz()" class="home-btn">
                    <span>Home</span>
                    <span>🏠</span>
                </button>
            </div>
        </div>
    `;
}

function getPerformanceAnalysis(score, total) {
    const percentage = (score / total) * 100;
    let analysis = [];

    if (percentage === 100) {
        analysis.push("Perfect score! Outstanding performance! 🌟");
    } else if (percentage >= 80) {
        analysis.push("Excellent performance! Keep up the great work! 🎉");
    } else if (percentage >= 60) {
        analysis.push("Good effort! Room for improvement in some areas. 👍");
    } else if (percentage >= 40) {
        analysis.push("Fair attempt. Consider reviewing the material again. 📚");
    } else {
        analysis.push("More practice needed. Don't give up! 💪");
    }

    analysis.push(`Accuracy rate: ${percentage.toFixed(1)}%`);
    
    if (score < total) {
        analysis.push("Focus on understanding the concepts thoroughly");
        if (percentage < 60) {
            analysis.push("Consider taking notes while studying");
        }
    }

    return analysis.map(item => `<li>${item}</li>`).join('');
}

function exitR20() {
    location.reload();
}

// Utility function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to shuffle question options while maintaining the correct answer
function shuffleOptions(question) {
    // Create a copy of the question to avoid modifying the original
    const questionCopy = { ...question };
    
    // If options are already shuffled, return the question as is
    if (questionCopy.shuffledOptions) {
        return questionCopy;
    }
    
    // Get the correct answer text before shuffling
    const correctAnswer = questionCopy.options[questionCopy.correct];
    
    // Create a copy of options and shuffle them
    questionCopy.options = shuffleArray([...questionCopy.options]);
    
    // Find the new index of the correct answer
    questionCopy.correct = questionCopy.options.indexOf(correctAnswer);
    
    // Mark as shuffled to avoid reshuffling
    questionCopy.shuffledOptions = true;
    
    return questionCopy;
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcomeScreen');
    if (welcomeScreen) {
        welcomeScreen.style.display = 'block';
    }
});

function checkFileExists(url) {
    return fetch(url, { method: 'HEAD' })
        .then(response => response.ok)
        .catch(() => false);
}
