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
                                <div class="digit-quiz-card" onclick="table20()">
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


function generateOptions(correctAnswer) {
    const options = new Set();
    const numDigits = correctAnswer.toString().length;
    const firstDigit = correctAnswer.toString()[0];
    const lastDigit = correctAnswer.toString()[numDigits - 1];

    // Add the correct answer to the set of options
    options.add(correctAnswer);

    console.log( "generate OPtions fun question digits ");

    // Function to generate a random number with specific first and last digits
    function generateRandomOption() {
        let option;
        do {
            // Generate a random number within the range
            const randomMiddle = Math.floor(Math.random() * Math.pow(10, numDigits - 2));
            option = parseInt(`${firstDigit}${randomMiddle}${lastDigit}`, 10);
        } while (options.has(option) || option === correctAnswer || option <= 0);
        return option;
    }

    // Generate 3 additional random options
    while (options.size < 4) {
        options.add(generateRandomOption());
    }

    // Convert the set to an array and shuffle the options
    const optionsArray = Array.from(options);
    for (let i = optionsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
    }
    return optionsArray;
}

function generateProblem(operation,digits) {
    const num1 = generateNumber(digits);
    const num2 = generateNumber(digits);
    let answerIndex = -1;
    let correctAnswer=0;
    
    console.log( "generate problem fun question digits ",digits );
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
    const wrongOptions = generateOptions(correctAnswer);
    // while (wrongOptions.length < 3) {
    //     const wrong = correctAnswer + Math.floor(Math.random() * 10) - 5;
    //     if (wrong !== correctAnswer && !wrongOptions.includes(wrong)) {
    //         wrongOptions.push(wrong);
    //     }
    // }
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
    const options = wrongOptions;
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

     showLoadingScreen();
  // Reset quiz state
  currentQuestion = 0;
  aptitudeTotalQuestions = 20;
  score = 0;
  timeLeft = 30;
  clearInterval(timer);
    console.log( "before generate question digits ",digits );
    
    // generate problem 
    questionData = generateProblem(operation,digits)

    console.log( " after generate question digits ",digits );

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

            <h2>Basic Details</h2>
            <div class="multi-calculation-container">

                <h3>Understand this concepts before going multiplication</h3><br>
                <div class="multi-calculation-steps">
                    <p> | (1)  --> vertical multiplication </p>
                    <p> X (2) --> cross multiplication </p>
                    <p> X + | (3)  -->  cross multiplication and middle vertical multiplication </p>
                    <p> X + X (4) -->  cross multiplication and cross multiplication </p>
                    
                    <p> Example :  1 2 3 x 6 7 8</p><br>
                    1  &nbsp; &nbsp; 2 &nbsp; &nbsp; 3 &nbsp; &nbsp; <br>
                    6 &nbsp;&nbsp; 7 &nbsp; &nbsp; 8 &nbsp; &nbsp; <br>
                    ------------------------- <br>
                        answer : ?

                    <p>now calculate from left to right.</p>

                    <p>1 (vertical) -> 3 x 8 = 24</p>
                    <p>2 (cross) -> (2 x 8) + (3 x 7) = 37</p>
                    <p>3 (cross + vertical) -> (1 x 8) + (3 x 6) + (2 x 6) = 38</p>
    
                
                </div>
            </div>
            <div class="horizontal" ></div>
   
            <h2>2 Digit Multiplication</h2>
            <div class="multi-calculation-container">
                <h3>How to Calculate</h3>
                <div class="multi-calculation-steps">
                    <p>34 X 24 numbers multiplication</p>
                    <p>how to calculate</p>
                    <pre>formula : &nbsp; 1    2   1</pre>
                    <pre>       or</pre>
                    <pre>formula : &nbsp; |    X   |</pre><br>
                    <div class="multi-example"><br>
                    <p>1<sup>st</sup> step 4 x 4 = 16 </sup></p>
                        3  &nbsp; 4  &nbsp;  <br>
                        2  &nbsp; 4  &nbsp;  <br>
                        --------<br>
                        <pre>     6 ( carry = 1 )</pre> <br>
                    <p>2<sup>nd</sup> step ( 3 x 4 ) + ( 2 x 4 ) = 20 + carry(1) = 21 </sup></p><br>
                        3  &nbsp; 4  &nbsp;  <br>
                        2  &nbsp; 4  &nbsp;  <br>
                        --------<br>
                        <pre>   1 6 ( carry = 2 )</pre><br>
                    <p>3<sup>rd</sup> step  3 x 2  = 6 + carry(2) = 8</sup> </p><br>
                        3  &nbsp; 4  &nbsp;  <br>
                        2  &nbsp; 4  &nbsp;  <br>
                        --------<br>
                        <pre>8 1 6</pre><br>
                    <p>Answer : 8 1 6</p>

                    </div>
                </div>
            </div>
            <div class="horizontal" ></div>

<h2>3 Digit Multiplication</h2>
            <div class="multi-calculation-container">
                <h3>How to Calculate</h3>
                <div class="multi-calculation-steps">
                    <p>234 X 324 numbers multiplication</p>
                    <p>how to calculate</p>
                    <pre>formula : &nbsp; 1    2   3   2   1</pre>
                    <pre>       or</pre>
                    <pre>formula : &nbsp; |    X   ( X + | )   X   |</pre>

                    <div class="multi-example"><br>
                    <p>1<sup>st</sup> step 4 x 4 = 16 </p><br>
                        2  &nbsp; 3  &nbsp; 4  &nbsp;  <br>
                        3  &nbsp; 2  &nbsp; 4  &nbsp;  <br>
                        --------<br>
                        <pre>     6 ( carry = 1 )</pre> <br>

                    <p>2<sup>nd</sup> step ( 3 x 4 ) + ( 2 x 4 ) = 20 + carry(1) = 21 </p><br>
                        2  &nbsp; 3  &nbsp; 4  &nbsp;  <br>
                        3  &nbsp; 2  &nbsp; 4  &nbsp;  <br>
                        --------<br>                        
                        <pre>   1 6 ( carry = 2 )</pre><br>

                    <p>3<sup>rd</sup> step ( 2 x 4 ) + ( 3 x 4 ) + ( 3 x 2 ) = 26 + carry(2) = 28 </p><br>
                        2  &nbsp; 3  &nbsp; 4  &nbsp;  <br>
                        3  &nbsp; 2  &nbsp; 4  &nbsp;  <br>
                        --------<br> 
                        <pre>8 1 6 ( carry = 2 )</pre><br>

                    <p>4<sup>th</sup> step ( 2 x 2 ) + ( 3 x 3 ) = 13 + carry(2) = 15  </p><br>
                        2  &nbsp; 3  &nbsp; 4  &nbsp;  <br>
                        3  &nbsp; 2  &nbsp; 4  &nbsp;  <br>
                        --------<br> 
                        <pre>5 8 1 6 ( carry = 1 )</pre><br>

                    <p>5<sup>th</sup> step ( 2 x 3 ) = 6 + carry(1) = 7  </p><br>
                        2  &nbsp; 3  &nbsp; 4  &nbsp;  <br>
                        3  &nbsp; 2  &nbsp; 4  &nbsp;  <br>
                        --------<br> 
                        <pre>7 5 8 1 6 </pre><br>

                    <p>Answer : 7 5 8 1 6</p>

                    </div>
                </div>
            </div>
            <div class="horizontal" ></div>
<h2>4 Digit Multiplication</h2>

            <div class="multi-calculation-container">
                <h3>How to Calculate</h3>
                <div class="multi-calculation-steps">
                    <p>3234 X 2324 numbers multiplication</p>
                    <p>how to calculate</p>
                    <pre>formula : &nbsp; 1    2   3   4   3   2   1</pre>
                    <pre>       or</pre>
                    <pre>formula : &nbsp; |    X   ( X + | )   ( X + X )  ( X + | )   X   |</pre>

                    <div class="multi-example"><br>

                    <p>1<sup>st</sup> step 4 x 4 = 16 </p><br>
                        3  &nbsp; 2  &nbsp; 3  &nbsp; 4  &nbsp;  <br>
                        2  &nbsp; 3  &nbsp; 2  &nbsp; 4  &nbsp;  <br>
                        -----------<br>
                        <pre>     6 ( carry = 1 )</pre> <br>

                    <p>2<sup>nd</sup> step ( 3 x 4 ) + ( 2 x 4 ) = 20 + carry(1) = 21 </p><br>
                        3  &nbsp; 2  &nbsp; 3  &nbsp; 4  &nbsp;  <br>
                        2  &nbsp; 3  &nbsp; 2  &nbsp; 4  &nbsp;  <br>
                        -----------<br>                        
                        <pre>   1 6 ( carry = 2 )</pre><br>

                    <p>3<sup>rd</sup> step ( 2 x 4 ) + ( 3 x 4 ) + ( 3 x 2 ) = 26 + carry(2) = 28 </p><br>
                        3  &nbsp; 2  &nbsp; 3  &nbsp; 4  &nbsp;  <br>
                        2  &nbsp; 3  &nbsp; 2  &nbsp; 4  &nbsp;  <br>
                        -----------<br>
                        <pre>8 1 6 ( carry = 2 )</pre><br>

                    <p>4<sup>th</sup> step ( 3 x 4 ) + ( 2 x 2 ) + ( 3 x 3 ) + ( 4 x 2 )= 33 + carry(2) = 35  </p><br>
                        3  &nbsp; 2  &nbsp; 3  &nbsp; 4  &nbsp;  <br>
                        2  &nbsp; 3  &nbsp; 2  &nbsp; 4  &nbsp;  <br>
                        -----------<br> 
                        <pre>5 8 1 6 ( carry = 3 )</pre><br>

                    <p>5<sup>th</sup> step ( 3 x 2 ) + ( 2 x 3 ) + ( 3 x 2 ) = 18 + carry(3) = 21  </p><br>
                        3  &nbsp; 2  &nbsp; 3  &nbsp; 4  &nbsp;  <br>
                        2  &nbsp; 3  &nbsp; 2  &nbsp; 4  &nbsp;  <br>
                        -----------<br> 
                        <pre>1 5 8 1 6 ( carry = 2 )</pre><br>

                    <p>6<sup>th</sup> step ( 3 x 3 ) + ( 2 x 2 ) = 13 + carry(2) = 15  </p><br>
                        3  &nbsp; 2  &nbsp; 3  &nbsp; 4  &nbsp;  <br>
                        2  &nbsp; 3  &nbsp; 2  &nbsp; 4  &nbsp;  <br>
                        -----------<br> 
                        <pre>5 1 5 8 1 6 ( carry = 1 )</pre><br>

                    <p>7<sup>th</sup> step ( 3 x 2 )  = 6 + carry(1) = 7  </p><br>
                        3  &nbsp; 2  &nbsp; 3  &nbsp; 4  &nbsp;  <br>
                        2  &nbsp; 3  &nbsp; 2  &nbsp; 4  &nbsp;  <br>
                        -----------<br> 
                        <pre>7 5 1 5 8 1 6 </pre><br>


                    <p>Answer : 7 5 1 5 8 1 6</p>

                    </div>
                </div>
            </div>
            <div class="horizontal" ></div>
<h2>5 Digit Multiplication</h2>

            <div class="multi-calculation-container">
                <h3>How to Calculate</h3>
                <div class="multi-calculation-steps">
                    <p>23234 X 32324 numbers multiplication</p>
                    <p>how to calculate</p>
                    <pre>formula : &nbsp; 1    2   3   4    5   4   3   2   1</pre>
                    <pre>       or</pre>
                    <pre>formula : &nbsp; |    X   ( X + | )   ( X + X )    ( X + X + | )   ( X + X )  ( X + | )   X   |</pre>

                    <div class="multi-example"><br>

                    <p>1<sup>st</sup> step 4 x 4 = 16 </p><br>
                        2  &nbsp; 3  &nbsp; 2  &nbsp; 3  &nbsp; 4  &nbsp;  <br>
                        3  &nbsp; 2  &nbsp; 3  &nbsp; 2  &nbsp; 4  &nbsp;  <br>
                        --------------<br>
                        <pre>     6 ( carry = 1 )</pre> <br>

                    <p>2<sup>nd</sup> step ( 3 x 4 ) + ( 2 x 4 ) = 20 + carry(1) = 21 </p><br>
                        2  &nbsp; 3  &nbsp; 2  &nbsp; 3  &nbsp; 4  &nbsp;  <br>
                        3  &nbsp; 2  &nbsp; 3  &nbsp; 2  &nbsp; 4  &nbsp;  <br>
                        --------------<br>                       
                        <pre>   1 6 ( carry = 2 )</pre><br>

                    <p>3<sup>rd</sup> step ( 2 x 4 ) + ( 3 x 4 ) + ( 3 x 2 ) = 26 + carry(2) = 28 </p><br>
                        2  &nbsp; 3  &nbsp; 2  &nbsp; 3  &nbsp; 4  &nbsp;  <br>
                        3  &nbsp; 2  &nbsp; 3  &nbsp; 2  &nbsp; 4  &nbsp;  <br>
                        --------------<br>
                        <pre>8 1 6 ( carry = 2 )</pre><br>

                    <p>4<sup>th</sup> step ( 3 x 4 ) + ( 2 x 2 ) + ( 3 x 3 ) + ( 4 x 2 )= 33 + carry(2) = 35  </p><br>
                        2  &nbsp; 3  &nbsp; 2  &nbsp; 3  &nbsp; 4  &nbsp;  <br>
                        3  &nbsp; 2  &nbsp; 3  &nbsp; 2  &nbsp; 4  &nbsp;  <br>
                        --------------<br> 
                        <pre>5 8 1 6 ( carry = 3 )</pre><br>

                    <p>5<sup>th</sup> step (2 x 4) + ( 3 x 2 ) + ( 2 x 3 ) + ( 3 x 2 ) + ( 4 x 3 ) = 38 + carry(3) = 41  </p><br>
                        2  &nbsp; 3  &nbsp; 2  &nbsp; 3  &nbsp; 4  &nbsp;  <br>
                        3  &nbsp; 2  &nbsp; 3  &nbsp; 2  &nbsp; 4  &nbsp;  <br>
                        --------------<br> 
                        <pre>1 5 8 1 6 ( carry = 4 )</pre><br>

                    <p>6<sup>th</sup> step (2 x 2) + ( 3 x 3 ) + ( 2 x 2 ) + ( 3 x 3 ) = 26 + carry(4) = 30  </p><br>
                        2  &nbsp; 3  &nbsp; 2  &nbsp; 3  &nbsp; 4  &nbsp;  <br>
                        3  &nbsp; 2  &nbsp; 3  &nbsp; 2  &nbsp; 4  &nbsp;  <br>
                        --------------<br> 
                        <pre>0 1 5 8 1 6 ( carry = 3 )</pre><br>

                    <p>7<sup>th</sup> step (2 x 3) + ( 3 x 2 ) + ( 2 x 3 ) = 18 + carry(3) = 21  </p><br>
                        2  &nbsp; 3  &nbsp; 2  &nbsp; 3  &nbsp; 4  &nbsp;  <br>
                        3  &nbsp; 2  &nbsp; 3  &nbsp; 2  &nbsp; 4  &nbsp;  <br>
                        --------------<br> 
                        <pre>1 0 1 5 8 1 6 ( carry = 2 )</pre><br>

                    <p>8<sup>th</sup> step (2 x 2) + ( 3 x 3 ) = 13 + carry(2) = 15  </p><br>
                        2  &nbsp; 3  &nbsp; 2  &nbsp; 3  &nbsp; 4  &nbsp;  <br>
                        3  &nbsp; 2  &nbsp; 3  &nbsp; 2  &nbsp; 4  &nbsp;  <br>
                        --------------<br> 
                        <pre>5 1 0 1 5 8 1 6 ( carry = 1 )</pre><br>

                    <p>9<sup>th</sup> step (2 x 3) = 6 + carry(1) = 7  </p><br>
                        2  &nbsp; 3  &nbsp; 2  &nbsp; 3  &nbsp; 4  &nbsp;  <br>
                        3  &nbsp; 2  &nbsp; 3  &nbsp; 2  &nbsp; 4  &nbsp;  <br>
                        --------------<br> 
                        <pre>7 5 1 0 1 5 8 1 6 </pre><br>

                    <p>Answer : 7 5 1 0 1 5 8 1 6 </p>

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

                            </div>
                        </div>
        </div>

    </div>
        `
        showSection("learn");
}

function table20(){
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

        <h2>Close to above 100 { +  X  +  = + }</h2>
        <div class="multi-calculation-container">
            <h3>How to Calculate</h3>
            <div class="multi-calculation-steps">
                <p>Example 1 : 102 X 107 numbers multiplication</p>
                <p>how to calculate</p>
                <div class="multi-example">
                <pre>1<sup>st</sup> step ( +2 )  x ( +7 )  = +14 </sup></pre><br>
                    1  &nbsp; 0  &nbsp; 2  &nbsp;  ---> 1 0 0 + 2 (or) +2<br>
                    1  &nbsp; 0  &nbsp; 7  &nbsp;  ---> 1 0 0 + 7 (or) +7<br>
                    --------<br>
                    <pre>   1 4</pre> <br>

                <pre>2<sup>nd</sup> step ( 102 + 7 )  or ( 107 + 2 )  = +109 </sup></pre><br>
                    1  &nbsp; 0  &nbsp; 2  &nbsp;  ---> 1 0 0 + 2 (or) +2<br>
                    1  &nbsp; 0  &nbsp; 7  &nbsp;  ---> 1 0 0 + 7 (or) +7<br>
                    --------<br>
                    <pre>1 0 9 1 4</pre> <br>

                <p>Answer : 1 0 9 1 4</p><br><hr><br>

                <p>Example 2 : 112 X 107 numbers multiplication</p>

                <p>how to calculate</p>
                <div class="multi-example">
                <pre>1<sup>st</sup> step ( +12 )  x ( +7 )  = +84 </sup></pre><br>
                    1  &nbsp; 1  &nbsp; 2  &nbsp;  --->  +12<br>
                    1  &nbsp; 0  &nbsp; 7  &nbsp;  --->  +7<br>
                    --------<br>
                    <pre>   8 4</pre> <br>

                <pre>2<sup>nd</sup> step ( 112 + 7 )  or ( 107 + 12 )  = +119 </sup></pre><br>
                    1  &nbsp; 1  &nbsp; 2  &nbsp;  ---> +12<br>
                    1  &nbsp; 0  &nbsp; 7  &nbsp;  ---> +7<br>
                    --------<br>
                    <pre>1 1 9 1 4</pre> <br>

                <p>Answer : 1 1 9 8 4</p>

                </div>
            </div>
        </div>
        </div>
            <div class="horizontal" ></div>

<h2>Close to below 100 { -  X  -  = + }</h2>

        <div class="multi-calculation-container">
            <h3>How to Calculate</h3>
            <div class="multi-calculation-steps">
                <p>Example 1 : 97 X 99 numbers multiplication</p>
                <p>how to calculate</p>
                <div class="multi-example">
                
                    9  &nbsp; 7  &nbsp;  ---> &nbsp; -3<br>
                    9  &nbsp; 9  &nbsp;  ---> &nbsp; -1<br>
                    --------<br>
                    <pre>   0 3    {  1<sup>st</sup> step ( -3 )  x ( -1 )  = +3 }</pre><br><br>

                
                    9  &nbsp; 7  &nbsp;  ---> &nbsp;  -3<br>
                    9  &nbsp; 9  &nbsp;  ---> &nbsp; -1<br>
                    --------<br>
                    <pre>9 6 0 3    {  2<sup>nd</sup> step ( 97 - 1 )  or ( 99 - 3 )  = +96 } </pre><br>

                    <p>Answer : 9 6 0 3</p><br><hr><br>
                </div>

                <p>Example 2 : 89 X 93 numbers multiplication</p>
                <p>how to calculate</p>
                <div class="multi-example">
                
                    8  &nbsp; 9  &nbsp;  ---> &nbsp; -11<br>
                    9  &nbsp; 3  &nbsp;  ---> &nbsp; -7<br>
                    --------<br>
                    <pre>   7 7    {  1<sup>st</sup> step ( -11 )  x ( -7 )  = +77 }</pre><br><br>

                
                    9  &nbsp; 7  &nbsp;  ---> &nbsp;  -11<br>
                    9  &nbsp; 9  &nbsp;  ---> &nbsp; -7<br>
                    --------<br>
                    <pre>8 2 7 7    {  2<sup>nd</sup> step ( 89 - 7 )  or ( 93 - 11 )  = +82 } </pre><br>

                    <p>Answer : 8 2 7 7</p><br>
                </div>
            </div>
        </div>
            <div class="horizontal" ></div>

<h2>Close to below or above 100 { -  X  +  = -  &nbsp; &nbsp; or &nbsp; &nbsp; + X - = - }</h2>

        <div class="multi-calculation-container">
            <h3>How to Calculate</h3>
            <div class="multi-calculation-steps">
                <p>Example 1 : 97 X 102 numbers multiplication</p>
                <p>how to calculate</p>
                <div class="multi-example">
                
                    &nbsp; &nbsp; 9  &nbsp; 7  &nbsp;  ---> &nbsp; -3<br>
                    1  &nbsp; 0  &nbsp; 2  &nbsp;  ---> &nbsp; +2<br>
                    --------<br>
                    <pre>   9 4    {  1<sup>st</sup> step ( -3 )  x ( +2 )  = -6 ==> subtract from 100 - 6 = 94 (why because number close to 100)}</pre><br><br>

                
                    &nbsp; &nbsp; 9  &nbsp; 7  &nbsp;  ---> &nbsp; -3<br>
                    1  &nbsp; 0  &nbsp; 2  &nbsp;  ---> &nbsp; +2<br>
                    --------<br>
                    <pre>9 8 9 4    {  2<sup>nd</sup> step ( 97 + 2 )  or ( 102 - 3 )  = +99 - 1 = 9800 + 94 = 9894 (why because we subtract number from 100 ) } </pre><br>

                    <p>Answer : 9 8 9 4</p><br><hr><br>
                </div> 

                <p>Example 1 : 107 X 92 numbers multiplication</p>
                <p>how to calculate</p>
                <div class="multi-example">
                
                    1 &nbsp; 0  &nbsp; 7  &nbsp;  ---> &nbsp; +7<br>
                    &nbsp; &nbsp; 9  &nbsp; 2  &nbsp;  ---> &nbsp; -8<br>
                    --------<br>
                    <pre>   4 4    {  1<sup>st</sup> step ( +7 )  x ( -8 )  = -56 ==> subtract from 100 - 56 = 44 (why because number close to 100) }</pre><br><br>

                
                    1 &nbsp; 0  &nbsp; 7  &nbsp;  ---> &nbsp; +7<br>
                    &nbsp; &nbsp; 9  &nbsp; 2  &nbsp;  ---> &nbsp; -8<br>
                    --------<br>
                    <pre>9 8 4 4    {  2<sup>nd</sup> step ( 107 - 8 )  or ( 92 + 7 )  = +99 - 1 = 9800 + 44 = 9844 (why because we subtract number from 100 ) } </pre><br>

                    <p>Answer : 9 8 4 4</p><br>
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

                        </div>
                    </div>
    </div>

</div>
    `
    showSection("learn");
}

function specialMultiplication(){
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

        <h2>Method for 200 { +  X  +  = + }</h2>
        <div class="multi-calculation-container">
            <h3>How to Calculate</h3>
            <div class="multi-calculation-steps">
                <p>Example 1 : 102 X 107 numbers multiplication</p>
                <p>how to calculate</p>
                <div class="multi-example">
                <pre>1<sup>st</sup> step ( +2 )  x ( +7 )  = +14 </sup></pre><br>
                    1  &nbsp; 0  &nbsp; 2  &nbsp;  ---> 1 0 0 + 2 (or) +2<br>
                    1  &nbsp; 0  &nbsp; 7  &nbsp;  ---> 1 0 0 + 7 (or) +7<br>
                    --------<br>
                    <pre>   1 4</pre> <br>

                <pre>2<sup>nd</sup> step ( 102 + 7 )  or ( 107 + 2 )  = +109 </sup></pre><br>
                    1  &nbsp; 0  &nbsp; 2  &nbsp;  ---> 1 0 0 + 2 (or) +2<br>
                    1  &nbsp; 0  &nbsp; 7  &nbsp;  ---> 1 0 0 + 7 (or) +7<br>
                    --------<br>
                    <pre>1 0 9 1 4</pre> <br>

                <p>Answer : 1 0 9 1 4</p><br><hr><br>

                <p>Example 2 : 112 X 107 numbers multiplication</p>

                <p>how to calculate</p>
                <div class="multi-example">
                <pre>1<sup>st</sup> step ( +12 )  x ( +7 )  = +84 </sup></pre><br>
                    1  &nbsp; 1  &nbsp; 2  &nbsp;  --->  +12<br>
                    1  &nbsp; 0  &nbsp; 7  &nbsp;  --->  +7<br>
                    --------<br>
                    <pre>   8 4</pre> <br>

                <pre>2<sup>nd</sup> step ( 112 + 7 )  or ( 107 + 12 )  = +119 </sup></pre><br>
                    1  &nbsp; 1  &nbsp; 2  &nbsp;  ---> +12<br>
                    1  &nbsp; 0  &nbsp; 7  &nbsp;  ---> +7<br>
                    --------<br>
                    <pre>1 1 9 1 4</pre> <br>

                <p>Answer : 1 1 9 8 4</p>

                </div>
            </div>
        </div>
        </div>
            <div class="horizontal" ></div>

<h2>Close to below 100 { -  X  -  = + }</h2>

        <div class="multi-calculation-container">
            <h3>How to Calculate</h3>
            <div class="multi-calculation-steps">
                <p>Example 1 : 97 X 99 numbers multiplication</p>
                <p>how to calculate</p>
                <div class="multi-example">
                
                    9  &nbsp; 7  &nbsp;  ---> &nbsp; -3<br>
                    9  &nbsp; 9  &nbsp;  ---> &nbsp; -1<br>
                    --------<br>
                    <pre>   0 3    {  1<sup>st</sup> step ( -3 )  x ( -1 )  = +3 }</pre><br><br>

                
                    9  &nbsp; 7  &nbsp;  ---> &nbsp;  -3<br>
                    9  &nbsp; 9  &nbsp;  ---> &nbsp; -1<br>
                    --------<br>
                    <pre>9 6 0 3    {  2<sup>nd</sup> step ( 97 - 1 )  or ( 99 - 3 )  = +96 } </pre><br>

                    <p>Answer : 9 6 0 3</p><br><hr><br>
                </div>

                <p>Example 2 : 89 X 93 numbers multiplication</p>
                <p>how to calculate</p>
                <div class="multi-example">
                
                    8  &nbsp; 9  &nbsp;  ---> &nbsp; -11<br>
                    9  &nbsp; 3  &nbsp;  ---> &nbsp; -7<br>
                    --------<br>
                    <pre>   7 7    {  1<sup>st</sup> step ( -11 )  x ( -7 )  = +77 }</pre><br><br>

                
                    9  &nbsp; 7  &nbsp;  ---> &nbsp;  -11<br>
                    9  &nbsp; 9  &nbsp;  ---> &nbsp; -7<br>
                    --------<br>
                    <pre>8 2 7 7    {  2<sup>nd</sup> step ( 89 - 7 )  or ( 93 - 11 )  = +82 } </pre><br>

                    <p>Answer : 8 2 7 7</p><br>
                </div>
            </div>
        </div>
            <div class="horizontal" ></div>

<h2>Close to below or above 100 { -  X  +  = -  &nbsp; &nbsp; or &nbsp; &nbsp; + X - = - }</h2>

        <div class="multi-calculation-container">
            <h3>How to Calculate</h3>
            <div class="multi-calculation-steps">
                <p>Example 1 : 97 X 102 numbers multiplication</p>
                <p>how to calculate</p>
                <div class="multi-example">
                
                    &nbsp; &nbsp; 9  &nbsp; 7  &nbsp;  ---> &nbsp; -3<br>
                    1  &nbsp; 0  &nbsp; 2  &nbsp;  ---> &nbsp; +2<br>
                    --------<br>
                    <pre>   9 4    {  1<sup>st</sup> step ( -3 )  x ( +2 )  = -6 ==> subtract from 100 - 6 = 94 (why because number close to 100)}</pre><br><br>

                
                    &nbsp; &nbsp; 9  &nbsp; 7  &nbsp;  ---> &nbsp; -3<br>
                    1  &nbsp; 0  &nbsp; 2  &nbsp;  ---> &nbsp; +2<br>
                    --------<br>
                    <pre>9 8 9 4    {  2<sup>nd</sup> step ( 97 + 2 )  or ( 102 - 3 )  = +99 - 1 = 9800 + 94 = 9894 (why because we subtract number from 100 ) } </pre><br>

                    <p>Answer : 9 8 9 4</p><br><hr><br>
                </div> 

                <p>Example 1 : 107 X 92 numbers multiplication</p>
                <p>how to calculate</p>
                <div class="multi-example">
                
                    1 &nbsp; 0  &nbsp; 7  &nbsp;  ---> &nbsp; +7<br>
                    &nbsp; &nbsp; 9  &nbsp; 2  &nbsp;  ---> &nbsp; -8<br>
                    --------<br>
                    <pre>   4 4    {  1<sup>st</sup> step ( +7 )  x ( -8 )  = -56 ==> subtract from 100 - 56 = 44 (why because number close to 100) }</pre><br><br>

                
                    1 &nbsp; 0  &nbsp; 7  &nbsp;  ---> &nbsp; +7<br>
                    &nbsp; &nbsp; 9  &nbsp; 2  &nbsp;  ---> &nbsp; -8<br>
                    --------<br>
                    <pre>9 8 4 4    {  2<sup>nd</sup> step ( 107 - 8 )  or ( 92 + 7 )  = +99 - 1 = 9800 + 44 = 9844 (why because we subtract number from 100 ) } </pre><br>

                    <p>Answer : 9 8 4 4</p><br>
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

                        </div>
                    </div>
    </div>

</div>
    `
    showSection("learn");
}

// function specialMultiplication(){

// }

// function closeTo100(){
    
// }

// function closeToMultipleOf100(){

// }

function showSection(section) {
    document.querySelector('.multi-learn-content').classList.remove('active');
    document.querySelector('.multi-practice-content').classList.remove('active');
    document.querySelector(`.multi-${section}-content`).classList.add('active');
}


//! multiplication code end 

