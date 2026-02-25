/* DOM ELEMENTS */
const startScreen = document.getElementById("startScreen");
const startBtn = document.getElementById("startBtn");
const quizContainer = document.getElementById("quizContainer");
const quizBody = document.getElementById("quizBody");
const nextBtn = document.getElementById("nextBtn");
const questionCounter = document.getElementById("questionCounter");
const timerEl = document.getElementById("timer");
const progressBar = document.getElementById("progressBar");

const resultsContainer = document.getElementById("resultsContainer");
const finalScore = document.getElementById("finalScore");
const correctCountEl = document.getElementById("correctCount");
const incorrectCountEl = document.getElementById("incorrectCount");
const totalQuestionsEl = document.getElementById("totalQuestions");
const timeTakenEl = document.getElementById("timeTaken");
const restartBtn = document.getElementById("restartBtn");

/* QUESTIONS  */
const questions = [
  {
    q: "What is JavaScript?",
    options: ["Programming Language", "Browser", "Database", "Server"],
    answer: 0
  },
  {
    q: "Which keyword is used to declare a variable?",
    options: ["var", "int", "string", "float"],
    answer: 0
  },
  {
    q: "Which function runs after a delay?",
    options: ["setInterval()", "setTimeout()", "wait()", "delay()"],
    answer: 1
  },
  {
    q: "Which array method adds item to the end?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: 0
  }
];

/* VARIABLES */
let currentIndex = 0;
let score = 0;
let selected = null;
let timer = 300;
let interval;
let startTime;

/* START QUIZ  */
startBtn.addEventListener("click", () => {
  startScreen.classList.add("content-hide");
  quizContainer.classList.remove("content-hide");

  startTime = Date.now();
  startTimer();
  loadQuestion();
});

/* LOAD QUESTION */
function loadQuestion() {
  nextBtn.disabled = true;
  selected = null;

  const q = questions[currentIndex];
  questionCounter.textContent = `Question ${currentIndex + 1} / ${questions.length}`;
  progressBar.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;

  quizBody.innerHTML = `<h3>${q.q}</h3>`;

  q.options.forEach((opt, i) => {
    const div = document.createElement("div");
    div.className = "answer-option";
    div.textContent = opt;

    div.addEventListener("click", () => selectAnswer(div, i));
    quizBody.appendChild(div);
  });
}

/* SELECT ANSWER */
function selectAnswer(el, index) {
  document.querySelectorAll(".answer-option")
    .forEach(o => o.classList.remove("selected"));

  el.classList.add("selected");
  selected = index;
  nextBtn.disabled = false;
}

/* NEXT BUTTON */
nextBtn.addEventListener("click", () => {
  if (selected === questions[currentIndex].answer) {
    score++;
  }

  currentIndex++;

  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

/* TIMER */
function startTimer() {
  interval = setInterval(() => {
    timer--;

    const m = Math.floor(timer / 60);
    const s = timer % 60;
    timerEl.textContent = `${m}:${s.toString().padStart(2, "0")}`;

    if (timer <= 0) {
      showResult();
    }
  }, 1000);
}

/* RESULT SCREEN */
function showResult() {
  clearInterval(interval);

  quizContainer.classList.add("content-hide");
  resultsContainer.classList.remove("content-hide");

  const timeSpent = Math.floor((Date.now() - startTime) / 1000);
  const minutes = Math.floor(timeSpent / 60);
  const seconds = timeSpent % 60;

  const incorrect = questions.length - score;
  const percentage = Math.round((score / questions.length) * 100);

  finalScore.textContent = `${percentage}%`;
  correctCountEl.textContent = score;
  incorrectCountEl.textContent = incorrect;
  totalQuestionsEl.textContent = questions.length;
  timeTakenEl.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

/* RESTART */
restartBtn.addEventListener("click", () => {
  location.reload();
});