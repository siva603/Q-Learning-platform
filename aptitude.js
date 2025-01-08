// Global variables for quiz state
let currentQuestions = [];
let currentQuestionIndex = 0;
score = 0;
let currentType = '';
let currentMethodId = '';

function toggleAccordion(header) {
    // Get the content element
    const content = header.nextElementSibling;
    
    // Close all other accordion items
    const allContents = document.querySelectorAll('.accordion-content');
    allContents.forEach(item => {
        if (item !== content && item.classList.contains('active')) {
            item.classList.remove('active');
        }
    });
    
    // Toggle the clicked accordion item
    content.classList.toggle('active');
}

{/* <button onclick="exitR20()" class="exit-btn">
<span class="btn-text">Back to Main Menu</span>
<span class="btn-icon">↩</span>
</button> */}

//! 1st step show aptitude categories

function startAptitudeCategories(){        
        const welcomeScreen = document.getElementById('welcomeScreen');
        welcomeScreen.innerHTML = `
        <div class="aptitude-container" id="aptitudeContainer"">
            <h1 class="title">Aptitude Training</h1>
            
            <div class="accordion">
                <!-- Addition Section -->

                <div class="accordion-item">

                    <div class="accordion-header" onclick="toggleAccordion(this)">
                        <span class="topic-icon">➕</span>
                        Addition
                    </div>

                    <div class="accordion-content">
                        <div class="method-section">
                            <div class="digit-quiz-grid" >
                                <div class="digit-quiz-card" onclick="startDigitQuiz('addition', 1)">
                                    <span class="digit-icon">1️⃣</span>
                                    <h5>Single Digit</h5>
                                    <p>Practice adding one-digit numbers</p>
                                </div>
                                <div class="digit-quiz-card" onclick="startDigitQuiz('addition', 2)">
                                    <span class="digit-icon">2️⃣</span>
                                    <h5>Two Digits</h5>
                                    <p>Practice adding two-digit numbers</p>
                                </div>
                                <div class="digit-quiz-card" onclick="startDigitQuiz('addition', 3)">
                                    <span class="digit-icon">3️⃣</span>
                                    <h5>Three Digits</h5>
                                    <p>Practice adding three-digit numbers</p>
                                </div>
                                <div class="digit-quiz-card" onclick="startDigitQuiz('addition', 4)">
                                    <span class="digit-icon">4️⃣</span>
                                    <h5>Four Digits</h5>
                                    <p>Practice adding four-digit numbers</p>
                                </div>
                                <div class="digit-quiz-card" onclick="startDigitQuiz('addition', 5)">
                                    <span class="digit-icon">5️⃣</span>
                                    <h5>Five Digits</h5>
                                    <p>Practice adding five-digit numbers</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>
                
                <!-- Subtraction Section -->

                <div class="accordion-item">

                    <div class="accordion-header" onclick="toggleAccordion(this)">
                        <span class="topic-icon">➖</span>
                        Subtraction
                    </div>

                    <div class="accordion-content">
                        <div class="method-section">
                            <div class="digit-quiz-grid" >
                                <div class="digit-quiz-card" onclick="startDigitQuiz('subtraction', 1)">
                                    <span class="digit-icon">1️⃣</span>
                                    <h5>Single Digit</h5>
                                    <p>Practice subtracting one-digit numbers</p>
                                </div>
                                <div class="digit-quiz-card" onclick="startDigitQuiz('subtraction', 2)">
                                    <span class="digit-icon">2️⃣</span>
                                    <h5>Two Digits</h5>
                                    <p>Practice subtracting two-digit numbers</p>
                                </div>
                                <div class="digit-quiz-card" onclick="startDigitQuiz('subtraction', 3)">
                                    <span class="digit-icon">3️⃣</span>
                                    <h5>Three Digits</h5>
                                    <p>Practice subtracting three-digit numbers</p>
                                </div>
                                <div class="digit-quiz-card" onclick="startDigitQuiz('subtraction', 4)">
                                    <span class="digit-icon">4️⃣</span>
                                    <h5>Four Digits</h5>
                                    <p>Practice subtracting four-digit numbers</p>
                                </div>
                                <div class="digit-quiz-card" onclick="startDigitQuiz('subtraction', 5)">
                                    <span class="digit-icon">5️⃣</span>
                                    <h5>Five Digits</h5>
                                    <p>Practice subtracting five-digit numbers</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>


                <!-- Multiplication Section -->
                <div class="accordion-item">
                    <div class="accordion-header" onclick="toggleAccordion(this)">
                        <span class="topic-icon">✖️</span>
                        Multiplication
                    </div>
                    <div class="accordion-content">
                       <div class="method-section">
                            <div class="digit-quiz-grid" >
                                <div class="digit-quiz-card" onclick="normalMultiplication()">
                                    <span class="digit-icon">1️⃣</span>
                                    <h5>Normal Multiplication</h5>
                                    
                                </div>
                                <div class="digit-quiz-card" onclick="startDigitQuiz('addition', 2)">
                                    <span class="digit-icon">2️⃣</span>
                                    <h5>Table 20 X 20</h5>
                                    
                                </div>
                                <div class="digit-quiz-card" onclick="startDigitQuiz('addition', 3)">
                                    <span class="digit-icon">3️⃣</span>
                                    <h5>Special Multiplication</h5>
                                  
                                </div>
                                <div class="digit-quiz-card" onclick="startDigitQuiz('addition', 4)">
                                    <span class="digit-icon">4️⃣</span>
                                    <h5>Numbers close to 100</h5>
                                    
                                </div>
                                <div class="digit-quiz-card" onclick="startDigitQuiz('addition', 5)">
                                    <span class="digit-icon">5️⃣</span>
                                    <h5>Numbers close to multiples of 100</h5>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Division Section -->
                <div class="accordion-item">
                    <div class="accordion-header" onclick="toggleAccordion(this)">
                        <span class="topic-icon">➗</span>
                        Division
                    </div>
                    <div class="accordion-content">
                        <div class="method-section">
                            <h3 class="method-title">Long Division Method</h3>
                            <p class="method-description">Master the technique of long division</p>
                            
                            <div class="steps-container">
                                <div class="step-card">Set up the division bracket</div>
                                <div class="step-card">Divide, Multiply, Subtract, Bring down</div>
                                <div class="step-card">Repeat until complete</div>
                            </div>
                            
                            <div class="button-group">
                                <button class="learn-button" onclick="learnMethod('division')">Learn This Method</button>
                                <button class="practice-button" onclick="practiceMethod('division')">Practice Questions</button>
                                <button class="solutions-button" onclick="showSolutions('division')">Quiz Solutions</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Percentage Section -->
                <div class="accordion-item">
                    <div class="accordion-header" onclick="toggleAccordion(this)">
                        <span class="topic-icon">💯</span>
                        Percentage
                    </div>
                    <div class="accordion-content">
                        <div class="method-section">
                            <h3 class="method-title">Percentage Calculations</h3>
                            <p class="method-description">Learn to solve percentage problems efficiently</p>
                            
                            <div class="steps-container">
                                <div class="step-card">Convert percentage to decimal</div>
                                <div class="step-card">Apply percentage formula</div>
                                <div class="step-card">Calculate final answer</div>
                            </div>
                            
                            <div class="button-group">
                                <button class="learn-button" onclick="learnMethod('percentage')">Learn This Method</button>
                                <button class="practice-button" onclick="practiceMethod('percentage')">Practice Questions</button>
                                <button class="solutions-button" onclick="showSolutions('percentage')">Quiz Solutions</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Time and Distance Section -->
                <div class="accordion-item">
                    <div class="accordion-header" onclick="toggleAccordion(this)">
                        <span class="topic-icon">⏱️</span>
                        Time and Distance
                    </div>
                    <div class="accordion-content">
                        <div class="method-section">
                            <h3 class="method-title">Speed, Time & Distance</h3>
                            <p class="method-description">Master the concepts of time and distance problems</p>
                            
                            <div class="steps-container">
                                <div class="step-card">Identify given values</div>
                                <div class="step-card">Apply relevant formula</div>
                                <div class="step-card">Solve for required variable</div>
                            </div>
                            
                            <div class="button-group">
                                <button class="learn-button" onclick="learnMethod('timeAndDistance')">Learn This Method</button>
                                <button class="practice-button" onclick="practiceMethod('timeAndDistance')">Practice Questions</button>
                                <button class="solutions-button" onclick="showSolutions('timeAndDistance')">Quiz Solutions</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <button onclick="exitR20()" class="exit-btn">
            <span class="btn-text">Back to Main Menu</span>
            <span class="btn-icon">↩</span>
        </button>
        </div>
        `;
}


function generateNumber(digits) {
    const min = Math.pow(10, digits - 1);
    const max = Math.pow(10, digits) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generateProblem(operation,digits) {
    const num1 = generateNumber(digits);
    const num2 = generateNumber(digits);
    let answerIndex = -1;
    let correctAnswer=0;
    if(operation == "addition"){
         correctAnswer = num1 + num2;
    }
    else if(operation == "subtraction"){
         correctAnswer = num1 - num2;
    }
    else if(operation == "multiplication"){
         correctAnswer = num1 * num2;
    }
    
    // Generate 3 wrong options
    const wrongOptions = [];
    while (wrongOptions.length < 3) {
        const wrong = correctAnswer + Math.floor(Math.random() * 10) - 5;
        if (wrong !== correctAnswer && !wrongOptions.includes(wrong)) {
            wrongOptions.push(wrong);
        }
    }
    var operator ;
    switch(operation){
        case "addition" : {
            operator = "+";
            break;
        }
        case "subtraction" : {
            operator = "-";
            break;
        }
        case "multiplication" : {
            operator = "*";
            break;
        }

        default : 
        operator = "+";
            
    }
    // Combine and shuffle options
    const options = [...wrongOptions, correctAnswer];
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }

    for(let i = 0 ;i < 4 ;i++){
        if(options[i] === correctAnswer)
            answerIndex = i;
    }

    const question = `What is ${num1} ${operator} ${num2} ?`;
    return {
        num1,
        num2,
        answer: correctAnswer,
        options,
        question : question,
        answerIndex : answerIndex
    };
}

//!  2nd step in aptitude for addition and subtraction


function startDigitQuiz(operation, digits) {

  // Reset quiz state
  currentQuestion = 0;
  aptitudeTotalQuestions = 20;
  score = 0;
  timeLeft = 30;
  clearInterval(timer);
    
    // generate problem 
    questionData = generateProblem(operation,digits)

    // Reset quiz container to initial state
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = initialQuizHTML;
    
    // Show quiz container and hide welcome screen
    document.getElementById('welcomeScreen').style.display = 'none';
    quizContainer.style.display = 'block';
        
        timer = setInterval(() => {
            timeLeft--;
            updateTimer();
            if (timeLeft <= 0) {
                clearInterval(timer);
                handleNextQuestionAptitude(operation,digits);
            }
        }, 1000);
    

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
            button.onclick = () => checkAnswerAptitude(index, questionData,operation,digits);
            optionsContainer.appendChild(button);
        });
    
        document.getElementById('question-counter').textContent = `Question ${currentQuestion + 1}/${aptitudeTotalQuestions}`;
}

// handle the option is correct or wrong

function checkAnswerAptitude(selectedIndex,questionData,operation,digits) {
    
    const correct = questionData.answerIndex;
    
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(button => button.disabled = true);
    
    if (selectedIndex === correct) {
        score++;
        buttons[selectedIndex].classList.add('correct');
        showPopAnimation('Correct!', '#4CAF50');
    } else {
        buttons[selectedIndex].classList.add('wrong');
        buttons[correct].classList.add('correct');
        showPopAnimation('Wrong!', '#f44336');
    }
    
    setTimeout(() => handleNextQuestionAptitude(operation,digits), 1000);
}

function handleNextQuestionAptitude(operation,digits) {
    currentQuestion++;    
    if (currentQuestion < aptitudeTotalQuestions) {
        loadQuestionAptitude(operation,digits);
    } else {
        showAptitudeResult(operation,digits);
    }
}

function loadQuestionAptitude(operation,digits) {
    clearInterval(timer);
    timeLeft = 30;
    updateTimer();
    
    timer = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleNextQuestionAptitude(operation,digits);
        }
    }, 1000);

    questionData = generateProblem(operation,digits)

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
        button.onclick = () => checkAnswerAptitude(index, questionData,operation,digits);
        optionsContainer.appendChild(button);
    });

    document.getElementById('question-counter').textContent = `Question ${currentQuestion + 1}/${aptitudeTotalQuestions}`;
    document.getElementById('question-score').textContent = `Score : ${score}`;
   
}

function showAptitudeResult(operation,digits) {
    clearInterval(timer);
    
    const accuracy = Math.round((score / aptitudeTotalQuestions) * 100);
    const tips = getImprovementTips(score, aptitudeTotalQuestions);
    
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = `
        <div class="result-screen">
            <h2>Quiz Completed! 🎉</h2>
            
            <div class="accuracy-meter">
                <div class="accuracy-value">${accuracy}%</div>
            </div>
            
            <div class="score-summary">
                <h3>Score Summary</h3>
                <p>Correct Answers: ${score} out of ${aptitudeTotalQuestions}</p>
                <p>Time Taken: ${30 - timeLeft} seconds</p>
            </div>
            
            <div class="improvement-tips">
                <h3>Improvement Tips</h3>
                ${tips.map(tip => `<div class="tip-item">${tip}</div>`).join('')}
            </div>
            
            <div class="result-actions">
                <button onclick="startDigitQuiz('${operation}',${digits})" class="retry-btn">
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


//! end of the quiz for addition and subtraction




// function showAptitudeCategories() {
//     document.getElementById('welcomeScreen').style.display = 'none';
//     document.getElementById('quizContainer').style.display = 'none';
//     document.getElementById('aptitudeContainer').style.display = 'block';
// }



function practiceMethod(method) {
    // Handle the practice button click for different methods
    switch(method) {
        case 'addition':
            console.log('Practice addition');
            break;
        case 'subtraction':
            console.log('Practice subtraction');
            break;
        case 'multiplication':
            console.log('Practice multiplication');
            break;
        case 'division':
            console.log('Practice division');
            break;
        case 'percentage':
            console.log('Practice percentage problems');
            break;
        case 'timeAndDistance':
            console.log('Practice time and distance problems');
            break;
    }
}

//! multiplication code start 

function normalMultiplication(){

        const normalMultiplicationDisplay = document.getElementById('welcomeScreen');
       
        normalMultiplicationDisplay.innerHTML = `

    <div class="multi-top-buttons">
        <button class="multi-top-button" onclick="startAptitudeCategories()">Back</button>
        <!-- <button class="top-button back-button" onclick="window.history.back()">Start quiz</button> -->
    </div>

    <div class="multi-method-container">
        <div class="multi-tab-buttons">
            <button class=" multi-learn-button" onclick="showSection('learn')">Learn method</button>
            <button class=" multi-practice-button" onclick="showSection('practice')">Practice</button>
        </div>

        <div class="multi-learn-content">
        
            <h2>Method 1: 3 Digit Multiplication</h2>
            <div class="multi-calculation-container">
                <h3>How to Calculate</h3>
                <div class="multi-calculation-steps">
                    <p>Method 1 is 3 digit multiplication</p>
                    <p>how to calculate</p>
                    <p>img or diagram for technique</p>
                    <div class="multi-example">
                        3 4<br>
                        2 4<br>
                        ---------------<br>
                        answer:
                    </div>
                </div>
            </div>

            <h2>Method 1: 3 Digit Multiplication</h2>
            <div class="multi-calculation-container">
                <h3>How to Calculate</h3>
                <div class="multi-calculation-steps">
                    <p>Method 1 is 3 digit multiplication</p>
                    <p>how to calculate</p>
                    <p>img or diagram for technique</p>
                    <div class="multi-example">
                        3 4<br>
                        2 4<br>
                        ---------------<br>
                        answer:
                    </div>
                </div>
            </div>
        </div>

        <div class="multi-practice-content">
<div class="method-section">
                            <div class="digit-quiz-grid" >
                                <div class="digit-quiz-card" style="background-color:rgba(255, 255, 255, 0.144)" onclick="startDigitQuiz('multiplication', 1)">
                                    <span class="digit-icon">1️⃣</span>
                                    <h5>Single Digit</h5>
                                    <p>Practice multiplication with one-digit numbers</p>
                                </div>
                                <div class="digit-quiz-card" style="background-color:rgba(255, 255, 255, 0.144)"  onclick="startDigitQuiz('multiplication', 2)">
                                    <span class="digit-icon">2️⃣</span>
                                    <h5>Two Digits</h5>
                                    <p>Practice multiplication with two-digit numbers</p>
                                </div>
                                <div class="digit-quiz-card" style="background-color:rgba(255, 255, 255, 0.144)"  onclick="startDigitQuiz('multiplication', 3)">
                                    <span class="digit-icon">3️⃣</span>
                                    <h5>Three Digits</h5>
                                    <p>Practice multiplication with three-digit numbers</p>
                                </div>
                                <div class="digit-quiz-card" style="background-color:rgba(255, 255, 255, 0.144)"  onclick="startDigitQuiz('multiplication', 4)">
                                    <span class="digit-icon">4️⃣</span>
                                    <h5>Four Digits</h5>
                                    <p>Practice multiplication with four-digit numbers</p>
                                </div>
                                <div class="digit-quiz-card" style="background-color:rgba(255, 255, 255, 0.144)"  onclick="startDigitQuiz('multiplication', 5)">
                                    <span class="digit-icon">5️⃣</span>
                                    <h5>Five Digits</h5>
                                    <p>Practice multiplication with five-digit numbers</p>
                                </div>
                                <div class="digit-quiz-card" style="background-color:rgba(255, 255, 255, 0.144)"  onclick="startDigitQuiz('multiplication', 6)">
                                    <span class="digit-icon">6️⃣</span>
                                    <h5>six Digits</h5>
                                    <p>Practice multiplication with six-digit numbers</p>
                                </div>
                                <div class="digit-quiz-card" style="background-color:rgba(255, 255, 255, 0.144)"  onclick="startDigitQuiz('multiplication', 7)">
                                    <span class="digit-icon">7️⃣</span>
                                    <h5>seven Digits</h5>
                                    <p>Practice multiplication with seven-digit numbers</p>
                                </div>

                            </div>
                        </div>
        </div>

    </div>
        `
        showSection("learn");
}

function showSection(section) {
    document.querySelector('.multi-learn-content').classList.remove('active');
    document.querySelector('.multi-practice-content').classList.remove('active');
    document.querySelector(`.multi-${section}-content`).classList.add('active');
}
showSection("learn")
// Show learn section by default


//! multiplication code end 

