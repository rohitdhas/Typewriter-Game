import { updateTimer, resetTimer } from "../Redux/timerSlice";

let isStarted = false;
let timerInterval;

export function startTimer(dispatcher) {
    if (!isStarted) {
        timerInterval = setInterval(() => {
            dispatcher(updateTimer());
        }, 1000);
        isStarted = true;
    }
}

export function stopTimer(dispatcher) {
    const timerElement = document.getElementById("timer");
    if (isStarted) {
        clearInterval(timerInterval);
        dispatcher(resetTimer());
        isStarted = false;
        timerElement.classList.remove('blink')
    }
}