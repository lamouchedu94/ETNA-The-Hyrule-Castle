const rl = require('readline-sync');

export default function getUserInput() {
  let userChoice = '';
  do {
    userChoice = rl.question('What to do ?\n');
    if (userChoice === '1') {
      return 1;
    } if (userChoice === '2') {
      return 2;
    }
  } while (userChoice !== '1' && userChoice !== '2');
  return 0;
}
