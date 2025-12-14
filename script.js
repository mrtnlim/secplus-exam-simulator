let index = 0;
let score = 0;
let time = 90 * 60;
let timer;

const quiz = document.getElementById("quiz");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");

questions.sort(() => Math.random() - 0.5);

function startTimer() {
    timer = setInterval(() => {
        time--;
        let min = Math.floor(time / 60);
        let sec = time % 60;
        timerDisplay.textContent = `${min}:${sec.toString().padStart(2, "0")}`;
        if (time <= 0) submitExam();
    }, 1000);
}

function loadQuestion() {
    const q = questions[index];
    quiz.innerHTML = `
        <div class="question">
            <h3>Question ${index + 1} of ${questions.length}</h3>
            <p>${q.question}</p>
            <div class="answers">
                ${q.answers.map((a,i) =>
                    `<button onclick="selectAnswer(${i})">${a.text}</button>`
                ).join("")}
            </div>
            <div class="explanation" id="exp"></div>
        </div>
    `;
}

function selectAnswer(i) {
    const q = questions[index];
    const buttons = document.querySelectorAll(".answers button");
    buttons.forEach((b, idx) => {
        b.disabled = true;
        if (q.answers[idx].correct) b.classList.add("correct");
        if (idx === i && !q.answers[idx].correct) b.classList.add("wrong");
    });

    if (q.answers[i].correct) score++;

    document.getElementById("exp").innerHTML =
        q.answers.map(a =>
            `${a.correct ? "✅" : "❌"} ${a.text}: ${a.why}<br>`
        ).join("");

    scoreDisplay.textContent = `Score: ${score}`;
}

function nextQuestion() {
    if (index < questions.length - 1) {
        index++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (index > 0) {
        index--;
        loadQuestion();
    }
}

function submitExam() {
    clearInterval(timer);
    quiz.innerHTML = "";
    document.getElementById("result").innerHTML =
        `<h2>Final Score: ${score} / ${questions.length}</h2>`;
}

startTimer();
loadQuestion();
