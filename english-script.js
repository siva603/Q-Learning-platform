let englishWords = [];

// Function to speak text using Web Speech API
function speakWord(word) {
    const speech = new SpeechSynthesisUtterance(word);
    speech.lang = 'en-US';
    speech.rate = 0.8; // Slightly slower for better clarity
    window.speechSynthesis.speak(speech);
}

// Load words from JSON
async function loadEnglishWords() {
    try {
        const response = await fetch('english-words.json');
        const data = await response.json();
        englishWords = data.verbs;
        displayWords();
    } catch (error) {
        console.error('Error loading words:', error);
    }
}

function displayWords() {
    const tableBody = document.getElementById('englishWordsBody');
    tableBody.innerHTML = '';
    
    englishWords.forEach(word => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${word.word}</td>
            <td>
                <div class="english-verb-forms">
                    <div class="english-verb-form" onclick="speakWord('${word.forms.v1}')">${word.forms.v1} ( ${word.telugu_v1} )</div>
                    <div class="english-verb-form" onclick="speakWord('${word.forms.v2}')">${word.forms.v2} ( ${word.telugu_v2} )</div>
                    <div class="english-verb-form" onclick="speakWord('${word.forms.v3}')">${word.forms.v3} ( ${word.telugu_v3} )</div>
                    <div class="english-verb-form" onclick="speakWord('${word.forms.v4}')">${word.forms.v4} ( ${word.telugu_v4} )</div>
                    <div class="english-verb-form" onclick="speakWord('${word.forms.v5}')">${word.forms.v5} ( ${word.telugu_v5} )</div>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function switchEnglishMode(mode) {
    document.getElementById('englishLearnContent').style.display = 'none';
    document.getElementById('englishQuizContent').style.display = 'none';
    
    if (mode === 'learn') {
        document.getElementById('englishLearnContent').style.display = 'block';
    } else {
        document.getElementById('englishQuizContent').style.display = 'block';
    }
}

function startQuiz(type) {
    switch(type) {
        case 'options':
            alert('Options Quiz will start soon');
            break;
        case 'typing':
            alert('Typing Quiz will start soon');
            break;
        case 'voice':
            alert('Voice Quiz will start soon');
            break;
    }
}

// Load words when page loads
document.addEventListener('DOMContentLoaded', loadEnglishWords);
