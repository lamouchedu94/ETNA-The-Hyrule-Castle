import GameSettings from './GameSettings';
import initGame from './basic_game_customization';
import startGame from './game';
import getUserInput from './userInput';
function main() {
  const [game, userChoice] : any = initGame();
  console.log(game, userChoice)
  if (game !== null && userChoice === 0) {
    startGame(game,false)
  };
  if (game !== null && userChoice === 1) {
    startGame(game, true)
  }

}

main();
