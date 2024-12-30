// Global variables for quiz state
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let currentType = '';
let currentMethodId = '';

// Aptitude categories and their subcategories
const aptitudeStructure = {
    basic: {
        addition: {
            title: "Addition",
            methods: [
                {
                    id: "single_digit",
                    title: "Single Digit Addition",
                    description: "Practice adding single-digit numbers quickly"
                },
                {
                    id: "double_digit",
                    title: "Double Digit Addition",
                    description: "Master adding two-digit numbers"
                }
            ]
        },
        subtraction: {
            title: "Subtraction",
            methods: [
                {
                    id: "basic",
                    title: "Basic Subtraction",
                    description: "Learn fundamental subtraction techniques"
                },
                {
                    id: "borrowing",
                    title: "Borrowing Method",
                    description: "Practice subtraction with borrowing"
                }
            ]
        },
        multiplication: {
            title: "Multiplication",
            methods: [
                {
                    id: "method1",
                    title: "Standard Multiplication",
                    description: "Practice traditional multiplication method"
                },
                {
                    id: "method2",
                    title: "Distributive Method",
                    description: "Learn to break down numbers for easier multiplication"
                }
            ]
        },
        division: {
            title: "Division",
            methods: [
                {
                    id: "method1",
                    title: "Long Division",
                    description: "Master the traditional long division method"
                },
                {
                    id: "method2",
                    title: "Short Division",
                    description: "Quick division method for simple problems"
                }
            ]
        }
    }
};

// Function to start aptitude quiz
function startAptitudeQuiz(type, methodId) {
    currentType = type;
    currentMethodId = methodId;
    
    fetch('aptitude_questions.json')
        .then(response => response.json())
        .then(data => {
            const method = data[type][methodId];
            currentQuestions = method.questions;
            currentQuestionIndex = 0;
            score = 0;
            showQuestion();
        });
}

// Function to show question
function showQuestion() {
    const welcomeScreen = document.getElementById('welcomeScreen');
    const currentQuestion = currentQuestions[currentQuestionIndex];
    
    welcomeScreen.innerHTML = `
        <div class="quiz-container">
            <div class="quiz-header">
                <h2>Question ${currentQuestionIndex + 1} of ${currentQuestions.length}</h2>
                <div class="score">Score: ${score}</div>
            </div>
            
            <div class="question-container">
                <div class="question">${currentQuestion.question}</div>
                <div class="options">
                    ${currentQuestion.options.map((option, index) => `
                        <button onclick="checkAnswer(${option})" class="option-btn">
                            ${option}
                        </button>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Function to check answer
function checkAnswer(selectedAnswer) {
    const currentQuestion = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correct;
    
    if (isCorrect) {
        score++;
    }

    // Show explanation
    const welcomeScreen = document.getElementById('welcomeScreen');
    welcomeScreen.innerHTML = `
        <div class="quiz-container">
            <div class="quiz-header">
                <h2>Question ${currentQuestionIndex + 1} of ${currentQuestions.length}</h2>
                <div class="score">Score: ${score}</div>
            </div>
            
            <div class="explanation-container">
                <div class="result ${isCorrect ? 'correct' : 'incorrect'}">
                    ${isCorrect ? 'Correct!' : 'Incorrect!'}
                </div>
                <div class="question">${currentQuestion.question}</div>
                <div class="answer">Correct Answer: ${currentQuestion.correct}</div>
                <div class="explanation">${currentQuestion.explanation}</div>
                
                <button onclick="${
                    currentQuestionIndex < currentQuestions.length - 1 
                    ? 'showNextQuestion()' 
                    : 'showQuizResult()'
                }" class="next-btn">
                    ${currentQuestionIndex < currentQuestions.length - 1 ? 'Next Question' : 'See Results'}
                </button>
            </div>
        </div>
    `;
}

// Function to show next question
function showNextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

// Function to show quiz result
function showQuizResult() {
    const welcomeScreen = document.getElementById('welcomeScreen');
    const percentage = (score / currentQuestions.length) * 100;
    
    welcomeScreen.innerHTML = `
        <div class="quiz-container">
            <div class="result-container">
                <h2>Quiz Complete!</h2>
                <div class="final-score">
                    <div class="score-text">Your Score: ${score}/${currentQuestions.length}</div>
                    <div class="percentage">${percentage}%</div>
                </div>
                <div class="result-message">
                    ${percentage >= 80 ? 'Excellent work!' : 
                      percentage >= 60 ? 'Good job!' : 
                      'Keep practicing!'}
                </div>
                <div class="action-buttons">
                    <button onclick="showAptitudeCategories()" class="back-btn">
                        Back to Categories
                    </button>
                    <button onclick="startAptitudeQuiz('${currentType}', '${currentMethodId}')" class="retry-btn">
                        Try Again
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Function to show aptitude categories
function showAptitudeCategories() {
    const welcomeScreen = document.getElementById('welcomeScreen');
    
    welcomeScreen.innerHTML = `
        <div class="aptitude-container">
            <h1>Choose a Category</h1>
            <div class="category-grid">
                <div class="category-card" onclick="showMethods('multiplication')">
                    <h2>Multiplication</h2>
                    <p>Learn different multiplication methods</p>
                </div>
                <div class="category-card" onclick="showMethods('division')">
                    <h2>Division</h2>
                    <p>Learn different division methods</p>
                </div>
            </div>
        </div>
    `;
}

// Function to show methods for a category
function showMethods(category) {
    const methods = aptitudeStructure.basic[category].methods;
    const welcomeScreen = document.getElementById('welcomeScreen');
    
    welcomeScreen.innerHTML = `
        <div class="aptitude-container">
            <h1>${category.charAt(0).toUpperCase() + category.slice(1)} Methods</h1>
            <div class="methods-list">
                ${methods.map(method => `
                    <div class="method-item">
                        <h3>${method.title}</h3>
                        <p>${method.description}</p>
                        <div class="method-buttons">
                            <button onclick="showLearningContent('${category}', '${method.id}')" class="learn-btn">
                                Learn This Method
                            </button>
                            <button onclick="startAptitudeQuiz('${category}', '${method.id}')" class="practice-btn">
                                Practice Questions
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
            <button onclick="showAptitudeCategories()" class="back-btn">
                Back to Categories
            </button>
        </div>
    `;
}

// Function to show learning content
function showLearningContent(type, methodId) {
    const method = aptitudeStructure.basic[type].methods.find(method => method.id === methodId);
    const content = method.learningContent;
    const welcomeScreen = document.getElementById('welcomeScreen');
    
    welcomeScreen.innerHTML = `
        <div class="aptitude-container learning-mode">
            <h1 class="title">${method.title}</h1>
            <div class="learning-content">
                <div class="introduction">
                    <p>${content.introduction}</p>
                </div>
                
                <div class="steps-section">
                    <h2>Steps to Follow:</h2>
                    <div class="steps-list">
                        ${content.steps.map((step, index) => `
                            <div class="step-item">
                                <span class="step-number">${index + 1}</span>
                                <span class="step-text">${step}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="examples-section">
                    <h2>Example:</h2>
                    ${content.examples.map(example => `
                        <div class="example-card">
                            <div class="example-question">
                                <h3>Question: ${example.question}</h3>
                            </div>
                            <div class="example-steps">
                                ${example.explanation.map((step, index) => `
                                    <div class="example-step">
                                        <span class="step-number">${index + 1}</span>
                                        <span class="step-text">${step}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div class="practice-preview">
                    <h2>Practice Questions Preview:</h2>
                    <div class="preview-list">
                        ${method.questions.map((q, index) => `
                            <div class="preview-item">
                                <span class="question-number">${index + 1}</span>
                                <span class="question-text">${q.question}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="action-buttons">
                    <button onclick="startAptitudeQuiz('${type}', '${methodId}')" class="practice-btn">
                        Start Practice Questions
                    </button>
                    <button onclick="showMethods('${type}')" class="back-btn">
                        Back to Methods
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Function to show aptitude category selection
function showAptitudeCategories() {
    const welcomeScreen = document.getElementById('welcomeScreen');
    welcomeScreen.innerHTML = `
        <div class="aptitude-container">
            <h1 class="title">Aptitude Practice</h1>
            <div class="aptitude-categories">
                ${Object.entries(aptitudeStructure.basic).map(([key, category]) => `
                    <div class="category-card">
                        <h2>${category.title}</h2>
                        <div class="methods-grid">
                            ${category.methods.map(method => `
                                <div class="method-card" onclick="showLearningContent('${key}', '${method.id}')">
                                    <h3>${method.title}</h3>
                                    <p>${method.description}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
            <button onclick="location.reload()" class="back-btn">Back to Main Menu</button>
        </div>
    `;
}

// Function to generate random numbers based on digits
function generateNumber(digits) {
    const min = Math.pow(10, digits - 1);
    const max = Math.pow(10, digits) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate addition questions
function generateAdditionQuestion(digits) {
    const num1 = generateNumber(digits);
    const num2 = generateNumber(digits);
    const correct = num1 + num2;
    
    // Generate wrong options
    const options = [correct];
    while (options.length < 4) {
        const wrongAnswer = correct + Math.floor(Math.random() * 10) - 5;
        if (!options.includes(wrongAnswer)) {
            options.push(wrongAnswer);
        }
    }
    
    return {
        question: `${num1} + ${num2} = ?`,
        options: shuffleArray(options),
        correct: options.indexOf(correct),
        explanation: `${num1} + ${num2} = ${correct}`
    };
}

// Function to generate subtraction questions
function generateSubtractionQuestion(digits) {
    let num1 = generateNumber(digits);
    let num2 = generateNumber(digits);
    
    // Ensure num1 is greater than num2
    if (num2 > num1) {
        [num1, num2] = [num2, num1];
    }
    
    const correct = num1 - num2;
    
    // Generate wrong options
    const options = [correct];
    while (options.length < 4) {
        const wrongAnswer = correct + Math.floor(Math.random() * 10) - 5;
        if (!options.includes(wrongAnswer)) {
            options.push(wrongAnswer);
        }
    }
    
    return {
        question: `${num1} - ${num2} = ?`,
        options: shuffleArray(options),
        correct: options.indexOf(correct),
        explanation: `${num1} - ${num2} = ${correct}`
    };
}

// Function to generate multiplication questions
function generateMultiplicationQuestion(method) {
    let num1, num2, correct;
    
    switch (method) {
        case 'method1':
            num1 = generateNumber(2);
            num2 = generateNumber(2);
            break;
        case 'method2':
            num1 = generateNumber(2);
            num2 = generateNumber(1);
            break;
        case 'method3':
            num1 = generateNumber(2);
            num2 = generateNumber(2);
            break;
    }
    
    correct = num1 * num2;
    
    // Generate wrong options
    const options = [correct];
    while (options.length < 4) {
        const wrongAnswer = correct + Math.floor(Math.random() * 20) - 10;
        if (!options.includes(wrongAnswer)) {
            options.push(wrongAnswer);
        }
    }
    
    return {
        question: `${num1} × ${num2} = ?`,
        options: shuffleArray(options),
        correct: options.indexOf(correct),
        explanation: `${num1} × ${num2} = ${correct}`
    };
}

// Function to generate division questions
function generateDivisionQuestion(method) {
    let divisor, dividend, quotient;
    
    if (method === 'method1') {
        divisor = Math.floor(Math.random() * 9) + 2; // 2-10
        quotient = Math.floor(Math.random() * 90) + 10; // 10-99
        dividend = divisor * quotient;
    } else {
        divisor = Math.floor(Math.random() * 9) + 2; // 2-10
        quotient = Math.floor(Math.random() * 9) + 1; // 1-9
        dividend = divisor * quotient;
    }
    
    const correct = quotient;
    
    // Generate wrong options
    const options = [correct];
    while (options.length < 4) {
        const wrongAnswer = correct + Math.floor(Math.random() * 6) - 3;
        if (!options.includes(wrongAnswer) && wrongAnswer > 0) {
            options.push(wrongAnswer);
        }
    }
    
    return {
        question: `${dividend} ÷ ${divisor} = ?`,
        options: shuffleArray(options),
        correct: options.indexOf(correct),
        explanation: `${dividend} ÷ ${divisor} = ${correct}`
    };
}

// Function to generate a set of questions
function generateQuestionSet(type, subtype, level = null) {
    const questions = [];
    for (let i = 0; i < 25; i++) {
        let question;
        switch (type) {
            case 'addition':
                question = generateAdditionQuestion(parseInt(level));
                break;
            case 'subtraction':
                question = generateSubtractionQuestion(parseInt(level));
                break;
            case 'multiplication':
                question = generateMultiplicationQuestion(subtype);
                break;
            case 'division':
                question = generateDivisionQuestion(subtype);
                break;
        }
        questions.push(question);
    }
    return questions;
}

// Utility function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to shuffle question options while maintaining the correct answer
function shuffleOptions(question) {
    if (!question || !question.options) {
        return question;
    }

    // Create a copy of the original question
    const shuffledQuestion = {
        ...question,
        options: [...question.options],
        correct: question.correct
    };

    // Store original options and correct answer
    const correctAnswer = shuffledQuestion.options[shuffledQuestion.correct];

    // Shuffle the options array
    for (let i = shuffledQuestion.options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledQuestion.options[i], shuffledQuestion.options[j]] = 
        [shuffledQuestion.options[j], shuffledQuestion.options[i]];
    }

    // Update the correct answer index
    shuffledQuestion.correct = shuffledQuestion.options.indexOf(correctAnswer);

    return shuffledQuestion;
}

// Function to toggle accordion
function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.accordion-icon');
    const allContents = document.querySelectorAll('.accordion-content');
    const allIcons = document.querySelectorAll('.accordion-icon');
    
    // Close all other accordions
    allContents.forEach(item => {
        if (item !== content) {
            item.style.maxHeight = null;
        }
    });
    
    allIcons.forEach(item => {
        if (item !== icon) {
            item.textContent = '+';
        }
    });
    
    // Toggle current accordion
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        icon.textContent = '+';
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.textContent = '-';
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    showAptitudeCategories();
});
