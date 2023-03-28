
export function Sound() {
  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  );
  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );
  const forestAudio = new Audio("./sounds/Som-Floresta.wav");
  const rainAudio = new Audio("./sounds/Som-Chuva.wav");
  const soundCoffeShop = new Audio("./sounds/Som-Cafeteria.wav");
  const soundFireplace = new Audio("./sounds/Som-Lareira.wav");

  function pressButton() {
    buttonPressAudio.play();
  }

  function timeEnd() {
    kitchenTimer.play();
  }

  function toggleAudio(audio, isPlaying) {
    if (isPlaying) {
      audio.pause();
      return false;
    } else {
      audio.play();
      audio.loop = true;
      return true;
    }
  }
   let musicPlaying = false;
  

  function playForestAudio() {
    forestAudio.play();
    forestAudio.loop = true;
    musicPlaying = toggleAudio(forestAudio, musicPlaying);
  }

  function playRainAudio() {
    rainAudio.play();
    rainAudio.loop = true;
    musicPlaying = toggleAudio(rainAudio, musicPlaying);


  }

  function playSoundCoffeShop() {
    soundCoffeShop.play();
    soundCoffeShop.loop = true;
    musicPlaying = toggleAudio(soundCoffeShop, musicPlaying);
  }

  function playSoundFireplace() {
    soundFireplace.play();
    soundFireplace.loop = true;
    musicPlaying = toggleAudio(soundFireplace, musicPlaying);
  }

  return {
        pressButton,
        timeEnd,
        playForestAudio,
        playRainAudio,
        playSoundCoffeShop,
        playSoundFireplace,
        toggleAudio,
    }
}

