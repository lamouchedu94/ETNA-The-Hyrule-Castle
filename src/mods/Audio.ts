const player = require('play-sound')();

export default class Audio {
  public async playTheme() {
    return new Promise((resolve) => {
      player.play('./Zelda_main.mp3', (err:any) => {
        if (err) console.log(`Could not play sound: ${err}`);
      });
    });
  }
}
