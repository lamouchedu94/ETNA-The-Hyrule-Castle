const rl = require('readline-sync');

export default function getUserInput() {
  let userChoice = '';
  do {
    userChoice = rl.question('What to do ?\n');
    if (userChoice === '1') {
      return 1;
    } if (userChoice === '2') {
      return 2;
    } if (userChoice === '3') {
      return 3;
    } if (userChoice === '4') {
      return 4;
    } if (userChoice === '5') {
      return 5;
    } if (userChoice === '6') {
      return 6;
    } if (userChoice === '7') {
      return 7;
    }
  } while (userChoice !== '1' && userChoice !== '2' && userChoice !== '3' && userChoice !== '4' && userChoice !== '5');
  return 0;
}