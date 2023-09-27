import { Character } from './CharacterInterface';
import { createCharacter } from './createCharacter';
import { attack, heal } from './fight';
import getUserInput from './userInput';
import { getBosses, getCharacters, getEnemies } from "./jsonUtilities";

function displayRound(floor : number, hero : Character, ennemy : Character) {
  console.log(`================== FIGHT ${floor} ==================`);
  console.log(`Name : ${ennemy.name.toUpperCase()}`);
  console.log(`HP : ${ennemy.hp}`);
  console.log(`Hero : ${hero.name.toUpperCase()}`);
  console.log(`HP : ${hero.hp}`);
  console.log('------------------ OPTION ------------------');
  console.log('1 - Attack  \t 2 - Heal');
}

function start(floor : number, hero : Character) {
  let isOver : boolean = false;
  let fightIsOver : boolean = false;
  const ennemyArray = getEnemies();
  const bossArray = getBosses();
  let ennemy : Character = createCharacter(ennemyArray);

  while (floor <= 10 && !isOver) {
    if (fightIsOver) {
      if (floor < 10) ennemy = createCharacter(ennemyArray);
      else ennemy = createCharacter(bossArray);
      console.log(`New enemy appear : ${ennemy.name} ${ennemy.hp}`);
      fightIsOver = false;
    }
    displayRound(floor, hero, ennemy);
    const userChoice = getUserInput();
    console.log(userChoice);
    switch (userChoice) {
      case 1: {
        console.log('attack');
        ennemy = attack(hero, ennemy);
        break;
      }
      case 2: {
        hero = heal(hero);
        break;
      }
      default:
        break;
    }
    if (ennemy.hp > 0) {
      hero = attack(ennemy, hero);
    } else {
      console.log(`You have beated ${ennemy.name}`);
      fightIsOver = true;
      floor += 1;
    }
    if (hero.hp <= 0) {
      console.log('YOU LOST.');
      isOver = true;
    }
  }
}

function main() {
  const floor : number = 1;
  const playerArray = getCharacters();
  const hero : Character = createCharacter(playerArray);
  hero.maxHp = hero.hp;
  start(floor, hero);
}

main();
