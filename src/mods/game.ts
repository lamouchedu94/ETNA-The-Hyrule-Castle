import Hero from './Hero';
import Enemy from './Enemy';

import GameSettings from './GameSettings';
import { getBosses, getCharacters, getEnemies } from './jsonUtilities';
import { createEnemy, createHero } from './createCharacter';
import { displayRound } from './display';
import { displayMenu } from './display';
import gainXp from './lvl_exp';
import fight from './better_combat_options';
import getUserInput from './userInput';

const rl = require('readline-sync');

export function makeBar(currentHp: number, maxHp: number) {

  let hpBar: string = "\x1B[0m[";
  for (let i = 0; i < currentHp; i += 1) {
      if (i < maxHp / 6) {
          hpBar += "\x1B[31m|\x1B[0m";
      } else if (i < (maxHp / 4) * 2) {
          hpBar += '\x1B[33m|\x1B[0m';
      } else {
          hpBar += '\x1B[32m|\x1B[0m';
      }
  }
  for (let i = 0; i < maxHp - currentHp; i += 1) {
      hpBar += "—";
  }
  return hpBar + "]";
  
}
export default function startGame(game : GameSettings) {
  let fightIsOver : boolean = true;
  let floor = 1;
  const playerArray = getCharacters();
  const ennemyArray = getEnemies();
  const bossArray = getBosses();
  const hero : Hero = createHero(playerArray);
  let enemy : Enemy = createEnemy(ennemyArray, game.getDifficulty);

  while (floor <= game.getRound && hero.getHp > 0) {
    console.clear();
    if (fightIsOver) {
      if (floor % 10 === 0) enemy = createEnemy(bossArray, game.getDifficulty);
      else enemy = createEnemy(ennemyArray, game.getDifficulty);
      console.log(`New enemy appear : ${enemy.getName} ${enemy.getHp}`);
      fightIsOver = false;
    }
    displayRound(floor, hero, enemy);   
    const repUtil = fight(hero, enemy)
    if (repUtil === 3) {
      hero.displayInventory()
    }
    if (repUtil === 4){
      console.log('You leave the fight.');
      fightIsOver = true;
    };
    if (repUtil === 5){
      displayMenu();
      menu(getUserInput())
    };
    
    if (hero.getHp <= 0) console.log('\x1b[31mYOU LOST\x1b[             0m');
    else if (enemy.getHp <= 0) {
      console.log(`You beated ${enemy.getName}`);
      gainXp(hero);
      fightIsOver = true;
      floor += 1;
      hero.addCoins(1);
      hero.addItem(1);
    }
    rl.question('Press enter to continue');
  }
}

export function menu(userInput : number) {
  if (userInput === 5) {
    console.log(`\nSee you later !`)     
    process.exit(1)
  }
}