import GameSettings from './GameSettings';

const rl = require('readline-sync');

function displayLogo() {
  console.log('\x1b[33m                         ,                        \n'
      + '                       ..,,,                      \n'
      + '                      ..,,,,,                     \n'
      + '                     ..,,,,,,,                    \n'
      + '                   ..,,,,,,,,,,,                  \n'
      + '                  ..,,,,,,,,,,,,,                 \n'
      + '                ...,,,,,,,,,,,,,,,.               \n'
      + '                                                  \n'
      + '              .,.                 ..,             \n'
      + '            ...,,,               ..,,,,           \n'
      + '           ..,,,,,,             ..,,,,,,          \n'
      + '         ...,,,,,,,,,         ...,,,,,,,,.        \n'
      + '        ..,,,,,,,,,,,,       ..,,,,,,,,,,,,       \n'
      + '       ..,,,,,,,,,,,,,,    ...,,,,,,,,,,,,,,      \n'
      + '     ..,,,,,,,,,,,,,,,,,, .,,,,,,,,,,,,,,,,,,,    \x1b[0m');
}

function selectDifficulty() {
  let userInput = '';
  do {
    console.log('Choose your difficulty :');
    userInput = rl.question('1 - Normal\t2 - Difficult\t3 - Insane\n');
  } while (userInput !== '1' && userInput !== '2' && userInput !== '3');
  if (userInput === '1') return 1;
  if (userInput === '2') return 1.5;
  return 2;
}

function selectRoundsNumber() {
  let userInput = '';
  do {
    console.log('Choose your rounds numbers :');
    userInput = rl.question('1 - 10 rounds\t2 - 20 rounds\t3 - 50 rounds\t4 - 100 rounds\n');
  } while (userInput !== '1' && userInput !== '2' && userInput !== '3' && userInput !== '4');
  if (userInput === '1') return 10;
  if (userInput === '2') return 20;
  if (userInput === '3') return 50;
  return 100;
}

export default function startGame() {
  let userInput = '';
  console.log('Welcome to THE HYRULE CASTLE');
  displayLogo();
  console.log('1 - New Game\t2 - Quit');
  do {
    userInput = rl.question();
  } while (userInput !== '1' && userInput !== '2');
  if (userInput === '1') {
    const difficulty = selectDifficulty();
    const round = selectRoundsNumber();
    return new GameSettings(difficulty, round);
  } return null;
}
