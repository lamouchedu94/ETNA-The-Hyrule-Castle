import { readFileSync } from 'fs';
const pathCharacters = './json/players.json';
const pathEnemies = './json/enemies.json';
const pathBosses = './json/boss.json';

export function getCharacters() {
  try {
    const file = readFileSync(pathCharacters, 'utf-8');
    const characterJson = JSON.parse(file);
    return characterJson;
  } catch {
    throw new Error(`Cannot access file : ${pathCharacters}`);
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
