import { readFileSync } from 'fs';
import CharacterInterface from './CharacterInterface';
const pathCharacters = './json/players.json';
const pathEnemies = './json/enemies.json';
const pathBosses = './json/boss.json';
const pathSave = './json/save.json'


export function getCharacters(save : boolean) {
  try {
    if (save) {
      let tab = []
      const file = readFileSync(pathSave, 'utf-8');
      const characterJson = JSON.parse(file);
      tab.push(characterJson[0])
      return tab;
    } else {
      const file = readFileSync(pathCharacters, 'utf-8');
      const characterJson = JSON.parse(file);
      return characterJson;
    }
  } catch {
    throw new Error(`Cannot access file : ${pathCharacters}`);
  }
}

export function getSavedCharacters() {
  const file = readFileSync(pathSave, 'utf-8');
  const characterJson = JSON.parse(file);
  for (const elem of characterJson) {
    console.log(elem, 1)
  }
}

export function getEnemies() {
  try {
    const file = readFileSync(pathEnemies, 'utf-8');
    const enemiesJson = JSON.parse(file);
    return enemiesJson;
  } catch {
    throw new Error(`Cannot access file : ${pathEnemies}`);
  }
}

export function getBosses() {
  try {
    const file = readFileSync(pathBosses, 'utf-8');
    const bossJson = JSON.parse(file);
    return bossJson;
  } catch {
    throw new Error(`Cannot access file : ${pathBosses}`);
  }
}

export function getItemName(id : number) : void {
  //Return name of Item by id
  const file = readFileSync('./json/potions.json', 'utf-8')
  const fileContent = JSON.parse(file)
  for (const item of fileContent) {
    if (item.id === id) {
      return item.name
    }
  }
}
