import Hero from './Hero';
import Enemy from './Enemy';
import getUserInput from './userInput';

export function displayRound(floor : number, hero : Hero, ennemy : Enemy) {
  console.log(`================== FIGHT ${floor} ==================`);
  ennemy.displayInfo();
  hero.displayInfo();
  console.log('—————————————————— OPTION ——————————————————');
  console.log('1 - Attack \t 2 - Heal \t 3 - View Inventory \t 4 - Leave fight \t 5 - Game Menu');
}

export function displayMenu() {
  console.log(`================== GAME MENU ==================`)
  console.log(`1 Use objects`)
  console.log(`2 Save`)
  console.log(`3 Save and Quit`)
  console.log(`4 Quit (witout saving)`)
  const userInput = getUserInput()
  if (userInput === 4) {
    console.log(`\nSee you later !`)
    process.exit(1)
  }
}