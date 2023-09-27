"use strict";
exports.__esModule = true;
exports.createCharacter = void 0;
var CharacterInterface_1 = require("./CharacterInterface");
function selectCharacter(characterArray, rarity) {
    var characters = characterArray.filter(function (character) { return character.rarity === rarity; });
    var index = Math.ceil(Math.random() * characters.length);
    var character = new CharacterInterface_1.Character(characters[index - 1]);
    return character;
}
function createCharacter(characterArray) {
    var rarity = Math.ceil(Math.random() * 100);
    if (rarity === 1)
        return selectCharacter(characterArray, 1);
    else if (rarity <= 4)
        return selectCharacter(characterArray, 4);
    else if (rarity <= 15)
        return selectCharacter(characterArray, 3);
    else if (rarity <= 30)
        return selectCharacter(characterArray, 2);
    else
        return selectCharacter(characterArray, 1);
}
exports.createCharacter = createCharacter;
