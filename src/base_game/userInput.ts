const rl = require('readline-sync');

export default function getUserInput() {
  let userChoice = rl.question('Que faire ?');
  do {
    if (userChoice === '1') {
      return 1;
    } if (userChoice === '2') {
      return 2;
    }
    userChoice = rl.question('Choose an action ?');
  } while (userChoice !== '1' && userChoice !== '2');
  return 0;
}
