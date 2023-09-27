import { Character } from './CharacterInterface';

export function attack(attacker : Character, defenser : Character) {
  console.log(`${attacker.name.toUpperCase()} attack ${defenser.name} for ${attacker.str} damages`);
  defenser.hp -= attacker.str;
  return defenser;
}

export function heal(character : Character) {
  console.log(`${character.name.toUpperCase()} heals for ${character.maxHp / 2}`);
  character.hp += character.maxHp / 2;
  if (character.hp > character.maxHp) character.hp = character.maxHp;
  return character;
}
