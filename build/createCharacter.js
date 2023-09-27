"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEnemy = exports.createHero = void 0;
const Hero_1 = __importDefault(require("./Hero"));
const Enemy_1 = __importDefault(require("./Enemy"));
function selectEnemy(characterArray, rarity, difficulty) {
    const characters = characterArray.filter((character) => character.rarity === rarity);
    const index = Math.ceil(Math.random() * characters.length);
    const character = new Enemy_1.default(characters[index - 1], difficulty);
    return character;
}
function selectHero(characterArray, rarity) {
    const characters = characterArray.filter((character) => character.rarity === rarity);
    const index = Math.ceil(Math.random() * characters.length);
    const character = new Hero_1.default(characters[index - 1], 12);
    return character;
}
function createHero(characterArray) {
    const rarity = Math.floor(Math.random() * 100);
    if (rarity === 0)
        return selectHero(characterArray, 1);
    if (rarity <= 5)
        return selectHero(characterArray, 4);
    if (rarity <= 20)
        return selectHero(characterArray, 3);
    if (rarity <= 50)
        return selectHero(characterArray, 2);
    return selectHero(characterArray, 1);
}
exports.createHero = createHero;
function createEnemy(characterArray, difficulty) {
    const rarity = Math.floor(Math.random() * 100);
    if (rarity === 0)
        return selectEnemy(characterArray, 1, difficulty);
    if (rarity <= 5)
        return selectEnemy(characterArray, 4, difficulty);
    if (rarity <= 20)
        return selectEnemy(characterArray, 3, difficulty);
    if (rarity <= 50)
        return selectEnemy(characterArray, 2, difficulty);
    return selectEnemy(characterArray, 1, difficulty);
}
exports.createEnemy = createEnemy;
