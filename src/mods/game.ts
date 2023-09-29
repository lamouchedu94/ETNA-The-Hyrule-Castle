import Hero from './Hero';
import Enemy from './Enemy';
import GameSettings from './GameSettings';
import { getBosses, getCharacters, getEnemies, getSavedCharacters } from './jsonUtilities';
import { createEnemy, createHero } from './createCharacter';
import { displayRound } from './display';
import { displayMenu } from './display';
import gainXp from './lvl_exp';
import fight from './better_combat_options';
import getUserInput from './userInput';
import menu from  './menu'
import { dropItem } from './objects';
import * as fs from 'fs'
import Character from './Character';
import { selectHero } from './createCharacter';
import CharacterInterface from './CharacterInterface';


const rl = require('readline-sync');

export default function startGame(game : GameSettings, save : boolean) {
  let fightIsOver : boolean = true;
  let floor = 1;
  //console.log(getSavedCharacters())
  //getUserInput()
  let playerArray : CharacterInterface[]
  let hero : any
  if (save) {
    playerArray = getCharacters(save);
    hero = selectHero(playerArray, 1)
    hero.setMaxHp(playerArray[0].maxHp)
    hero.setCoins(playerArray[0].coin)
    hero.setXp(playerArray[0].xp)
    hero.setLvl(playerArray[0].lvl)
    hero.setXpToLvlUp(playerArray[0].xpToLvlUp)

//    getUserInput()
    
  }
  //console.log(playerArray[0])
  //getUserInput()
  if (!save) {
    playerArray = getCharacters(save);
    hero = createHero(playerArray);
    
  }
  const ennemyArray = getEnemies();
  const bossArray = getBosses();
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
      menu(getUserInput(), hero, enemy)
    };
    
    if (hero.getHp <= 0) console.log('\x1b[31mYOU LOST\x1b[0m');
    else if (enemy.getHp <= 0) {
      console.log(`You beated ${enemy.getName}`);
      gainXp(hero);
      fightIsOver = true;
      floor += 1;
      hero.addCoins(1);
      hero.addItem(dropItem())
    }
    rl.question('Press enter to continue');
  }
}

