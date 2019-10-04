// https://stackoverflow.com/questions/47921013/play-sound-on-click-in-a-frame
// https://jsfiddle.net/fq2pqwfx/2/


// can you figure out how to make the sound come from the speaker?
AFRAME.registerComponent('audiohandler', {
  init: function() {
    let playing = false;
    let audio = document.querySelector("#soundtrack");
    this.el.addEventListener('click', () => {
      if (!playing) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0;
      }
      playing = !playing;
    });
  }
})