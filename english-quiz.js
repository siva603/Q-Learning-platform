let currentQuiz = null;
currentQuestion = 0;
score = 0;
timer = null;
timeLeft = 30;
let questions = [];

function startVerbQuiz(type) {
    // Check if English words are loaded
    if (!window.englishWords || window.englishWords.length === 0) {
        alert('Please wait while the words are loading...');
        return;
    }

    currentQuiz = type;
    score = 0;
    currentQuestion = 0;
    questions = generateQuestions();
    
    // Hide quiz types and show quiz container
    document.querySelector('.english-quiz-types').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    
    // Reset and show appropriate containers
    document.getElementById('optionsContainer').innerHTML = '';
    document.getElementById('typingContainer').style.display = 'none';
    document.getElementById('voiceContainer').style.display = 'none';
    document.getElementById('resultContainer').style.display = 'none';
    
    loadQuestion();
    startTimer();
}

function generateQuestions() {
    const allQuestions = [];
    const verbForms = ['v1', 'v2', 'v3', 'v4', 'v5'];
    
    // Get all verbs from the loaded data
    const verbs = window.englishWords;
    
    // Generate 10 random questions
    for (let i = 0; i < 10; i++) {
        const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
        const randomForm = verbForms[Math.floor(Math.random() * verbForms.length)];
        
        const question = {
            verb: randomVerb.word,
            correctForm: randomVerb.forms[randomForm],
            telugu: randomVerb[`telugu_${randomForm}`],
            formType: randomForm,
            options: generateOptions(randomVerb.forms[randomForm], verbs)
        };
        
        allQuestions.push(question);
    }
    
    return allQuestions;
}

function generateOptions(correctAnswer, verbs) {
    const options = [correctAnswer];
    
    // Add 3 random incorrect options
    while (options.length < 4) {
        const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
        const randomForm = ['v1', 'v2', 'v3', 'v4', 'v5'][Math.floor(Math.random() * 5)];
        const option = randomVerb.forms[randomForm];
        
        if (!options.includes(option)) {
            options.push(option);
        }
    }
    
    // Shuffle options
    return options.sort(() => Math.random() - 0.5);
}

function loadQuestion() {
    const question = questions[currentQuestion];
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const typingContainer = document.getElementById('typingContainer');
    const voiceContainer = document.getElementById('voiceContainer');
    
    // Update progress
    document.getElementById('currentQuestion').textContent = currentQuestion + 1;
    document.getElementById('score').textContent = score;
    
    // Set question text
    questionText.textContent = `What is the ${question.formType.toUpperCase()} form of "${question.verb}"? (Telugu: ${question.telugu})`;
    
    // Clear previous content
    optionsContainer.innerHTML = '';
    
    // Show appropriate input based on quiz type
    if (currentQuiz === 'options') {
        optionsContainer.style.display = 'grid';
        typingContainer.style.display = 'none';
        voiceContainer.style.display = 'none';
        
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option';
            button.textContent = option;
            button.onclick = () => selectOption(index);
            optionsContainer.appendChild(button);
        });
    } else if (currentQuiz === 'typing') {
        optionsContainer.style.display = 'none';
        typingContainer.style.display = 'block';
        voiceContainer.style.display = 'none';
        
        document.getElementById('typingAnswer').value = '';
    } else if (currentQuiz === 'voice') {
        optionsContainer.style.display = 'none';
        typingContainer.style.display = 'none';
        voiceContainer.style.display = 'block';
    }
}

function selectOption(index) {
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    options[index].classList.add('selected');
}

function submitAnswer() {
    const question = questions[currentQuestion];
    let userAnswer = '';
    
    if (currentQuiz === 'options') {
        const selectedOption = document.querySelector('.option.selected');
        if (!selectedOption) {
            alert('Please select an answer!');
            return;
        }
        userAnswer = selectedOption.textContent;
    } else if (currentQuiz === 'typing') {
        userAnswer = document.getElementById('typingAnswer').value.trim().toLowerCase();
        if (!userAnswer) {
            alert('Please type your answer!');
            return;
        }
    } else if (currentQuiz === 'voice') {
        // Handle voice input
        return;
    }
    
    if (userAnswer.toLowerCase() === question.correctForm.toLowerCase()) {
        score++;
        document.getElementById('score').textContent = score;
    }
    
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
        resetTimer();
    } else {
        showResults();
    }
}

function showResults() {
    clearInterval(timer);
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('resultContainer').style.display = 'block';
    
    const finalScore = document.getElementById('finalScore');
    const feedback = document.getElementById('feedback');
    
    finalScore.textContent = score;
    
    // Generate feedback based on score
    if (score >= 8) {
        feedback.textContent = "Excellent! You have a great understanding of verb forms!";
    } else if (score >= 5) {
        feedback.textContent = "Good job! Keep practicing to improve further.";
    } else {
        feedback.textContent = "Keep practicing! Review the verb forms in the learning section.";
    }
}

function startTimer() {
    timeLeft = 30;
    updateTimer();
    
    if (timer) clearInterval(timer);
    
    timer = setInterval(() => {
        timeLeft--;
        updateTimer();
        
        if (timeLeft <= 0) {
            submitAnswer();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    startTimer();
}

function updateTimer() {
    document.getElementById('timer').textContent = `Time: ${timeLeft}s`;
}

function retryQuiz() {
    document.getElementById('resultContainer').style.display = 'none';
    startVerbQuiz(currentQuiz);
}

function exitQuiz() {
    if (timer) clearInterval(timer);
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('resultContainer').style.display = 'none';
    document.querySelector('.english-quiz-types').style.display = 'flex';
}

// Add event listener for the submit button
document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitAnswer');
    if (submitButton) {
        submitButton.addEventListener('click', submitAnswer);
    }
});
