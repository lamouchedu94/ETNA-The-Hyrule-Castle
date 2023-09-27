import GameSettings from './GameSettings';
import initGame from './basic_game_customization';
import startGame from './game';

function main() {
  const game: GameSettings | null = initGame();
  if (game !== null) startGame(game);
}

main();
