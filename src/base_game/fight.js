"use strict";
exports.__esModule = true;
exports.heal = exports.attack = void 0;
function attack(attacker, defenser) {
    console.log("".concat(attacker.name.toUpperCase(), " attack ").concat(defenser.name, " for ").concat(attacker.str, " damages"));
    defenser.hp -= attacker.str;
    return defenser;
}
exports.attack = attack;
function heal(character) {
    console.log("".concat(character.name.toUpperCase(), " heals for ").concat(character.maxHp / 2));
    character.hp += character.maxHp / 2;
    if (character.hp > character.maxHp)
        character.hp = character.maxHp;
    return character;
}
exports.heal = heal;
