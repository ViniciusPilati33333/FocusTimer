import { Sound } from "./sounds.js";
const sound = Sound;

export function Timer({
    newMinutes,
    resetValue,
    updateTimer,
    minutesDisplay,
    secondsDisplay,
    countdownTimeOut,
    playTimer,
    pauseTimer,
    buttonAddFiveMinutes,
    buttonRemoveFiveMinutes
}) 

  {
    function updateTimer(resetValue = 25) {
    newMinutes = resetValue;
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0');
    secondsDisplay.textContent = String(0).padStart(2, "0");
    clearTimeout(countdownTimeOut);
    }

    function countDown() {
    countdownTimeOut = setTimeout(function () {
        let seconds = Number(secondsDisplay.textContent);
        let minutes = Number(minutesDisplay.textContent);
        let finishedTimer = minutes <= 0 && seconds <= 0;

        if (finishedTimer) {
        pause();
        Sounds().timeEnd()
        return;
        }
        if (seconds <= 0) {
        seconds = 60;
        minutesDisplay.textContent = String(minutes - 1).padStart(2, "0");
        }
        secondsDisplay.textContent = String(seconds - 1).padStart(2, "0"); // atualizando os segundos
        countDown();
    }, 1000);
    }

    function play() {
    playTimer.classList.add("hide");
    pauseTimer.classList.remove("hide");
    countDown();
    }

    function pause() {
    playTimer.classList.remove("hide");
    pauseTimer.classList.add("hide");
    clearTimeout(countdownTimeOut);
    }

    function buttonAddFiveMinutes() {
    newMinutes += 5;
    updateTimer(newMinutes);
    if (!playTimer.classList.contains("hide")) {
        clearTimeout(countdownTimeOut);
    }
    }

    function buttonRemoveFiveMinutes() {
    newMinutes -= 5;
    updateTimer(newMinutes);
    if (!playTimer.classList.contains("hide")) {
        clearTimeout(countdownTimeOut);
    }
    }

    return {
        updateTimer,
        countDown,
        play,
        pause,
        resetValue,
        buttonAddFiveMinutes,
        buttonRemoveFiveMinutes
    }
  }

