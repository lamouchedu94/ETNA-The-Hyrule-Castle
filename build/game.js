"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonUtilities_1 = require("./jsonUtilities");
const createCharacter_1 = require("./createCharacter");
const display_1 = __importDefault(require("./display"));
const lvl_exp_1 = __importDefault(require("./lvl_exp"));
const better_combat_options_1 = __importDefault(require("./better_combat_options"));
const rl = require('readline-sync');
function startGame(game) {
    let fightIsOver = true;
    let floor = 1;
    const playerArray = (0, jsonUtilities_1.getCharacters)();
    const ennemyArray = (0, jsonUtilities_1.getEnemies)();
    const bossArray = (0, jsonUtilities_1.getBosses)();
    const hero = (0, createCharacter_1.createHero)(playerArray);
    let enemy = (0, createCharacter_1.createEnemy)(ennemyArray, game.getDifficulty);
    while (floor <= game.getRound && hero.getHp > 0) {
        console.clear();
        if (fightIsOver) {
            if (floor % 10 === 0)
                enemy = (0, createCharacter_1.createEnemy)(bossArray, game.getDifficulty);
            else
                enemy = (0, createCharacter_1.createEnemy)(ennemyArray, game.getDifficulty);
            console.log(`New enemy appear : ${enemy.getName} ${enemy.getHp}`);
            fightIsOver = false;
        }
        (0, display_1.default)(floor, hero, enemy);
        (0, better_combat_options_1.default)(hero, enemy);
        if (hero.getHp <= 0)
            console.log('\x1b[31mYOU LOST\x1b[0m');
        else if (enemy.getHp <= 0) {
            console.log(`You beated ${enemy.getName}`);
            (0, lvl_exp_1.default)(hero);
            fightIsOver = true;
            floor += 1;
            hero.addCoins(1);
        }
        rl.question('Press enter to continue');
    }
}
exports.default = startGame;
