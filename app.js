const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2 // Index of the correct answer
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: 1
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
    correct: 0
  },
  {
    question: "Which language is primarily used for web development?",
    options: ["Python", "C++", "JavaScript", "Java"],
    correct: 2
  }
];

let currentQuestionIndex = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
  loadQuestion();
});

// Load the current question
function loadQuestion() {
  if (currentQuestionIndex >= quizData.length) {
    displayResults();
    return;
  }

  const questionData = quizData[currentQuestionIndex];
  const quizElement = document.getElementById('quiz');
  
  quizElement.innerHTML = `
    <div class="question">${questionData.question}</div>
    <ul class="options">
      ${questionData.options.map((option, index) => `
        <li>
          <input type="radio" name="question${currentQuestionIndex}" id="option${index}" value="${index}">
          <label for="option${index}">${option}</label>
        </li>
      `).join('')}
    </ul>
  `;
}

// Handle quiz submission
function submitQuiz() {
  const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
  
  if (selectedOption) {
    const selectedAnswer = parseInt(selectedOption.value);

    if (selectedAnswer === quizData[currentQuestionIndex].correct) {
      score++;
    }

    currentQuestionIndex++;
    loadQuestion();
  } else {
    alert("Please select an answer before moving on!");
  }
}

// Display the final results
function displayResults() {
  const quizElement = document.getElementById('quiz');
  const resultElement = document.getElementById('result');
  
  quizElement.style.display = "none";
  resultElement.style.display = "block";
  resultElement.innerHTML = `
    <p>Your score: ${score} / ${quizData.length}</p>
    <button onclick="resetQuiz()">Try Again</button>
  `;
}

// Reset the quiz to start over
function resetQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  document.getElementById('quiz').style.display = "block";
  document.getElementById('result').style.display = "none";
  loadQuestion();
}
