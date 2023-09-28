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
  console.log(`2 Shop`)
  console.log(`3 Save`)
  console.log(`4 Save and Quit`)
  console.log(`5 Quit (witout saving)`)
}