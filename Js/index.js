import { Timer } from "./timer.js"; 
import Sound from "./sounds.js";
 

import {
  playTimer,
  pauseTimer,
  updateTimer,
  minutesDisplay,
  secondsDisplay,
  buttonAddFiveMinutes,
  buttonRemoveFiveMinutes,
  soundForest,
  soundRain,
  soundCoffeShop,
  soundFireplace,
} from './elements.js';

const sound = Sound()

const timer = Timer({
  newMinutes,
  minutesDisplay,
  secondsDisplay,
  countdownTimeOut,
  playTimer,
  pauseTimer,
  updateTimer,
  buttonAddFiveMinutes,
  buttonRemoveFiveMinutes
})

let countdownTimeOut;
let newMinutes = 25;

playTimer.addEventListener("click", function () {
  timer.play();
  sound.buttonPressAudio();
});

pauseTimer.addEventListener("click", function () {
  timer.pause();
  sound.pressButton();

});

updateTimer.addEventListener("click", function () {
  timer.updateTimer();
  timer.pause();
  newMinutes;
  sound.pressButton();

});

buttonAddFiveMinutes.addEventListener("click", function () {
  timer.buttonAddFiveMinutes();
  sound.pressButton();

});

buttonRemoveFiveMinutes.addEventListener("click", function () {
  timer.buttonRemoveFiveMinutes();
  sound.pressButton();

});


soundForest.addEventListener("click", function () {
  sound.playForestAudio();
});

soundRain.addEventListener('click', function() {});

soundCoffeShop.addEventListener('click', function() {});

soundFireplace.addEventListener('click', function() {});
