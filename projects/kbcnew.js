// Quiz questions and answers
const quizData = [
    {
        question: "1. Which of the following team won the T20 world cup 2021?",
        answers: ["Australia", "India", "England", "South Africa"],
        correct: 0
    },
    {
        question: "2. Which is first Indian cricket tournament?",
        answers: ["Bombay Series", "Bombay Triangular", "Pepsi Cup", "None of these"],
        correct: 1
    },
    {
        question: "3. Which of the following is first cricket club in India?",
        answers: ["East Indian Cricket Club", "Bombay Cricket Club", "Oriental Cricket Club", "Maharashtra Cricket Club"],
        correct: 2
    },
    {
        question: "4. Indian played first test match against ________.",
        answers: ["South Africa", "Pakistan", "Australia", "England"],
        correct: 3
    },
    {
        question: "5. Who was first test captain of Indian cricket team?",
        answers: ["CK Nayudu", "Ajit Wadekar", "Bapu Nadkarni", "Vijay Hazare"],
        correct: 0
    },
    {
        question: "6. Which of the following is first Indian bowler to take wicket?",
        answers: ["Bapu Nadkarni", "Mohammad Nissar", "Vyanktesh Prasad", "Imran Khan"],
        correct: 1
    },
    {
        question: "7. Which of the following is first Cricketer to score a double century in test cricket?",
        answers: ["Amar Singh", "Lala Amarnath", "Polly Umrigar", "Chetan Sharma"],
        correct: 1
    },
    {
        question: "8. Which of the following is first Cricketer to score a triple century in test cricket?",
        answers: ["Polly Umrigar", "Kapil Dev", "Lala Amarnath", "Virendra Sehwag"],
        correct: 3
    },
    {
        question: "9. Which of the following is first Indian to score double century in ODI?",
        answers: ["Sachin Tendulkar", "Mahendra Singh Dhoni", "Ravindra Jadeja", "Rohit Sharma"],
        correct: 0
    },
    {
        question: "10. Which of the following is first Indian bowler to record hat-trick in ODI Match?",
        answers: ["Chetan Sharma", "Kapil Dev", "Bapu Nadkarni", "Harbhajan Singh"],
        correct: 0
    },
    {
        question: "11. India Won first cricket world cup championship in year _________.",
        answers: ["2011", "1983", "1987", "1979"],
        correct: 1
    },
    {
        question: "12. Which of the following is first Indian Batsman to complete 10,000 runs in Test Cricket?",
        answers: ["Ravi Shastri", "Sunil Gavaskar", "Ajit Wadekar", "Sachin Tendulkar"],
        correct: 1
    },
    {
        question: "13. Who is first Indian Cricketer to score 100 centuries in Tests and ODIs combined?",
        answers: ["Sunil Gavaskar", "Ricky Ponting", "Sachin Tendulkar", "None of these"],
        correct: 2
    },
    {
        question: "14. Who is first Indian cricketer to score 4000 runs and take 400 wickets?",
        answers: ["Anil Kumble", "Chetan Sharma", "Kapil Dev", "Harbhajan Singh"],
        correct: 2
    },
    {
        question: "15. Who is first Indian to take 200+ catches in Test cricket?",
        answers: ["Ajit Agarkar", "Mahendra Singh Dhoni", "Yuvraj Singh", "Rahul Dravid"],
        correct: 3
    }
];

let currentQuestion = 0;
let score = 0;

// DOM elements
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');
const questionText = document.getElementById('question-text');
const answerButtons = document.querySelectorAll('.answer-btn');
const progressBar = document.getElementById('progress');
const resultText = document.getElementById('result-text');
const scoreText = document.getElementById('score-text');

// Audio elements
const questionSound = new Audio('images_videos/questionsound.mp3');
const correctSound = new Audio('images_videos/Mp3 Editor_sahi.mp3');
const incorrectSound = new Audio('images_videos/Mp3 Editor_galat.mp3');
const winSound = new Audio('images_videos/7crore.mp3');

// Start the game
document.getElementById('start-button').addEventListener('click', startGame);

// Handle answer selection
answerButtons.forEach(button => {
    button.addEventListener('click', () => selectAnswer(parseInt(button.dataset.index)));
});

// Play again
document.getElementById('play-again-button').addEventListener('click', startGame);

function startGame() {
    currentQuestion = 0;
    score = 0;
    showScreen(gameScreen);
    loadQuestion();
}

function loadQuestion() {
    const question = quizData[currentQuestion];
    questionText.textContent = question.question;
    
    question.answers.forEach((answer, index) => {
        answerButtons[index].textContent = answer;
    });

    updateProgressBar();
    questionSound.play();
}

function selectAnswer(answerIndex) {
    const question = quizData[currentQuestion];
    
    if (answerIndex === question.correct) {
        score++;
        correctSound.play();
        showFeedback(true);
    } else {
        incorrectSound.play();
        showFeedback(false);
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        setTimeout(() => {
            loadQuestion();
            resetButtonColors();
        }, 2000);
    } else {
        setTimeout(endGame, 2000);
    }
}

function showFeedback(isCorrect) {
    const feedbackColor = isCorrect ? "#004225" : "#FF0000";
    gameScreen.style.backgroundColor = feedbackColor;
    questionText.textContent = isCorrect ? "Bilkul sahi jawab" : "गलत जवाब।";
}

function resetButtonColors() {
    gameScreen.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
}

function updateProgressBar() {
    const progress = (currentQuestion / quizData.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function endGame() {
    showScreen(resultScreen);
    if (score === quizData.length) {
        resultText.textContent = "MUBARAKHO AAP JIT CHUKE HAI PURE 7 CRORE RUPEES...";
        winSound.play();
    } else {
        resultText.textContent = "Quiz Completed!";
    }
    scoreText.textContent = `Your score: ${score} out of ${quizData.length}`;
}

function showScreen(screen) {
    startScreen.classList.add('hidden');
    gameScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    screen.classList.remove('hidden');
}