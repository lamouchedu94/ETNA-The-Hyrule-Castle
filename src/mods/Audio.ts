const player = require('play-sound')();

export default class Audio {
  public async playTheme() {
    return new Promise((resolve) => {
      player.play('./audio/mainTheme8bit.mp3', (err:any) => {
        if (err) console.log(`Could not play sound: ${err}`);
      });
    });
  }
}
