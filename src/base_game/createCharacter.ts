import {Character , CharacterInterface} from "./CharacterInterface";

function selectCharacter(characterArray : CharacterInterface[], rarity : number) {
  const characters = characterArray.filter(character => character.rarity === rarity )
  const index = Math.ceil(Math.random() * characters.length);
  const character = new Character(characters[index - 1]);
  return character;
}

export function createCharacter(characterArray : CharacterInterface[]) {
  const rarity = Math.ceil(Math.random() * 100);
  if (rarity === 1) return selectCharacter(characterArray, 1);
  else if (rarity <= 4) return selectCharacter(characterArray, 4);
  else if (rarity <= 15) return selectCharacter(characterArray, 3);
  else if (rarity <= 30) return selectCharacter(characterArray, 2);
  else return selectCharacter(characterArray, 1);
}
