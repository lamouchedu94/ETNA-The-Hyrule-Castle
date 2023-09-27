import CharacterInterface from './CharacterInterface';
import Hero from './Hero';
import Enemy from './Enemy';

function selectEnemy(characterArray : CharacterInterface[], rarity : number, difficulty: number) {
  const characters = characterArray.filter((character) => character.rarity === rarity);
  const index = Math.ceil(Math.random() * characters.length);
  const character = new Enemy(characters[index - 1], difficulty);
  return character;
}

function selectHero(characterArray : CharacterInterface[], rarity : number) {
  const characters = characterArray.filter((character) => character.rarity === rarity);
  const index = Math.ceil(Math.random() * characters.length);
  const character = new Hero(characters[index - 1], 12);
  return character;
}

export function createHero(characterArray : CharacterInterface[]) {
  const rarity = Math.floor(Math.random() * 100);
  if (rarity === 0) return selectHero(characterArray, 1);
  if (rarity <= 5) return selectHero(characterArray, 4);
  if (rarity <= 20) return selectHero(characterArray, 3);
  if (rarity <= 50) return selectHero(characterArray, 2);
  return selectHero(characterArray, 1);
}

export function createEnemy(characterArray : CharacterInterface[], difficulty: number) {
  const rarity = Math.floor(Math.random() * 100);
  if (rarity === 0) return selectEnemy(characterArray, 1, difficulty);
  if (rarity <= 5) return selectEnemy(characterArray, 4, difficulty);
  if (rarity <= 20) return selectEnemy(characterArray, 3, difficulty);
  if (rarity <= 50) return selectEnemy(characterArray, 2, difficulty);
  return selectEnemy(characterArray, 1, difficulty);
}
