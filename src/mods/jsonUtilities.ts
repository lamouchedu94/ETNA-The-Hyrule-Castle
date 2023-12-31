//import { readFileSync } from 'fs';

// import CharacterInterface from './CharacterInterface';
const pathCharacters = './json/players.json';
const pathEnemies = './json/enemies.json';
const pathBosses = './json/boss.json';
const pathSave = './json/save.json';
const pathObj = "./json/object.json"
const rl = require('readline-sync');

export function getSavedGameSetting() {
  try {
    const file = rl.readFileSync(pathSave, 'utf-8');
    const gameSettingsJson = JSON.parse(file);
    return gameSettingsJson[2];
  } catch {
    throw new Error(`Cannot access file : ${pathCharacters}`);
  }
}

export function getCharacters(save : boolean) {
  try {
    if (save) {
      let tab = []
      const file = rl.readFileSync(pathSave, 'utf-8');
      const characterJson = JSON.parse(file);
      tab.push(characterJson[0])
      return tab;
    } else {
      const file = rl.readFileSync(pathCharacters, 'utf-8');
      const characterJson = JSON.parse(file);
      return characterJson;
    }
  } catch {
    throw new Error(`Cannot access file : ${pathCharacters}`);
  }
}

export function getEnemies(save : boolean) {
  try {
    if (save) {
      let tab = []
      const file = rl.readFileSync(pathSave, 'utf-8');
      const enemiesJson = JSON.parse(file);
      tab.push(enemiesJson[1])
      return tab;
    } else {
      const file = rl.readFileSync(pathEnemies, 'utf-8');
      const enemiesJson = JSON.parse(file);
      return enemiesJson;
    }
  } catch {
    throw new Error(`Cannot access file : ${pathEnemies}`);
  }
}

export function getBosses() {
  try {
    const file = rl.readFileSync(pathBosses, 'utf-8');
    const bossJson = JSON.parse(file);
    return bossJson;
  } catch {
    throw new Error(`Cannot access file : ${pathBosses}`);
  }
}

export function getObject() {
  try{
    const shopInventory = rl.readFileSync(pathObj, 'utf-8');
    const stock = JSON.parse(shopInventory);
    return (stock)  ;
  } catch{
    throw new Error(`Cannot access file : ${pathObj}`);
  }
}