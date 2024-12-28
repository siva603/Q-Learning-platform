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
        }, 5000); // Set to exactly 5 seconds
    });
}

async function startQuiz(category) {
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
    const questionData = categoryQuestions[currentQuestion];
    
    if (!questionData) {
        showResult(category);
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
        button.onclick = () => checkAnswer(index, category);
        optionsContainer.appendChild(button);
    });

    document.getElementById('question-counter').textContent = 
        `Question ${currentQuestion + 1}/${categoryQuestions.length}`;
}

function updateTimer() {
    document.getElementById('timer').textContent = `Time Left: ${timeLeft}s`;
}

function checkAnswer(selectedIndex, category) {
    clearInterval(timer);
    const questionData = questions[category][currentLevel][currentQuestion];
    const buttons = document.querySelectorAll('.option-btn');
    
    buttons.forEach((button, index) => {
        button.disabled = true;
        if (index === selectedIndex) {
            if (index === questionData.correct) {
                button.classList.add('correct');
            } else {
                button.classList.add('wrong');
            }
        } else if (index === questionData.correct) {
            button.classList.add('correct');
        }
    });
    
    if (selectedIndex === questionData.correct) {
        score++;
        showPopAnimation('Correct!', 'green');
    } else {
        showPopAnimation('Wrong!', 'red');
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

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcomeScreen');
    if (welcomeScreen) {
        welcomeScreen.classList.add('active');
    }
});
