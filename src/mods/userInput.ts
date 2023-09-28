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
    }
  } while (userChoice !== '1' && userChoice !== '2');
  return 0;
}
