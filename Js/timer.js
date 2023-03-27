import { Sound } from "./sounds.js";

export function Timer({
  minutesDisplay,
  secondsDisplay,
  playTimer,
  pauseTimer,
  buttonAddFiveMinutes,
  buttonRemoveFiveMinutes,
}) {
  let newMinutes;
  let countdownTimeOut;

  function updateTimer(resetValue = 25) {
    newMinutes = resetValue;
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
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
        Sound().timeEnd();
        updateTimer((newMinutes = 25));
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
    newMinutes = Number(minutesDisplay.textContent);
    newMinutes += 5;
    updateTimer(newMinutes);
    pause();
  }

  function buttonRemoveFiveMinutes() {
    newMinutes = Number(minutesDisplay.textContent);

    if (newMinutes <= 5) {
      newMinutes = newMinutes - newMinutes;
      updateTimer(newMinutes);
      pause();
      return;
    }

    newMinutes -= 5;
    updateTimer(newMinutes);
    pause();
  }

  return {
    updateTimer,
    countDown,
    play,
    pause,
    buttonAddFiveMinutes,
    buttonRemoveFiveMinutes,
  };
}
