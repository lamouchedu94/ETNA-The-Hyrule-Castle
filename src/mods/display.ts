import Hero from './Hero';
import Enemy from './Enemy';

export default function displayRound(floor : number, hero : Hero, ennemy : Enemy) {
  console.log(`================== FIGHT ${floor} ==================`);
  ennemy.displayInfo();
  hero.displayInfo();
  console.log('—————————————————— OPTION ——————————————————');
  console.log('1 - Attack  \t 2 - Heal');
}
