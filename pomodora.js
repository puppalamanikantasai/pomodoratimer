let timer;
let timeLeft = 0;
let isRunning = false;
let countUp = false;

const display = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const pomodoroButton = document.getElementById("pomodoromode");
const shortBreakButton = document.getElementById("shortbreak");
const longBreakButton = document.getElementById("longbreak");

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    display.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;

        if (timeLeft === 0) {
            countUp = true;
        }

        timer = setInterval(() => {
            if (countUp) {
                timeLeft++;
            } else {
                if (timeLeft > 0) {
                    timeLeft--;
                } else {
                    clearInterval(timer);
                    isRunning = false;
                    alert("Time's up!");
                }
            }
            updateDisplay();
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    stopTimer();
    timeLeft = 0;
    countUp = false;
    updateDisplay();
}

function setTimer(duration) {
    stopTimer();
    timeLeft = duration;
    countUp = false;
    updateDisplay();
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
pomodoroButton.addEventListener("click", () => setTimer(25 * 60));
shortBreakButton.addEventListener("click", () => setTimer(5 * 60));
longBreakButton.addEventListener("click", () => setTimer(15 * 60));

updateDisplay();
