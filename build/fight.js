"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heal = exports.attack = void 0;
function attack(attacker, defenser) {
    console.log(`${attacker.name.toUpperCase()} attack ${defenser.name} for ${attacker.str} damages`);
    defenser.hp -= attacker.str;
    return defenser;
}
exports.attack = attack;
function heal(character) {
    console.log(`${character.name.toUpperCase()} heals for ${character.maxHp / 2}`);
    character.hp += character.maxHp / 2;
    if (character.hp > character.maxHp)
        character.hp = character.maxHp;
    return character;
}
exports.heal = heal;
