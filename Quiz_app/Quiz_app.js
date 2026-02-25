const questions = [
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "string", "define"],
    answer: 0
  },
  {
    question: "Which method converts JSON to object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"],
    answer: 0
  },
  {
    question: "Which function runs after a delay?",
    options: ["setInterval()", "setTimeout()", "delay()", "wait()"],
    answer: 1
  }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let timeRemaining = 300;
let timerInterval;

/* DOM */
const startScreen = document.getElementById("startScreen");
const quizWrapper = document.getElementById("quizWrapper");
const resultScreen = document.getElementById("resultScreen");
const quizBody = document.getElementById("quizBody");
const questionCounter = document.getElementById("questionCounter");
const timer = document.getElementById("timer");
const nextBtn = document.getElementById("nextBtn");

/* START QUIZ */
document.getElementById("startBtn").addEventListener("click", () => {
  startScreen.classList.add("hidden");
  quizWrapper.classList.remove("hidden");
  startTimer();
  loadQuestion();
});

/* TIMER */
function startTimer() {
  timerInterval = setInterval(() => {
    timeRemaining--;
    const min = Math.floor(timeRemaining / 60);
    const sec = timeRemaining % 60;
    timer.textContent = `${min}:${sec.toString().padStart(2, "0")}`;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      showResult();
    }
  }, 1000);
}

/* LOAD QUESTION */
function loadQuestion() {
  selectedAnswer = null;
  nextBtn.disabled = true;

  const q = questions[currentQuestion];
  questionCounter.textContent = `Question ${currentQuestion + 1}/${questions.length}`;

  let html = `<h3>${q.question}</h3>`;
  q.options.forEach((opt, index) => {
    html += `
      <div class="answer-option" data-index="${index}">
        ${opt}
      </div>
    `;
  });

  quizBody.innerHTML = html;

  document.querySelectorAll(".answer-option").forEach(option => {
    option.addEventListener("click", selectAnswer);
  });
}

/* SELECT ANSWER */
function selectAnswer(e) {
  document.querySelectorAll(".answer-option").forEach(o => o.classList.remove("selected"));
  e.target.classList.add("selected");
  selectedAnswer = parseInt(e.target.dataset.index);
  nextBtn.disabled = false;
}

/* NEXT */
nextBtn.addEventListener("click", () => {
  if (selectedAnswer === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

/* RESULT */
function showResult() {
  clearInterval(timerInterval);
  quizWrapper.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  document.getElementById("finalScore").textContent =
    `Score: ${score}/${questions.length}`;

  document.getElementById("resultMessage").textContent =
    score >= 2 ? "Great Job " : "Keep Practicing ";
}

/* RESTART */
document.getElementById("restartBtn").addEventListener("click", () => {
  location.reload();
});