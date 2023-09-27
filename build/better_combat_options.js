"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userInput_1 = __importDefault(require("./userInput"));
function heroAction(hero, enemy, userChoice) {
    switch (userChoice) {
        case 1: {
            hero.attack(enemy);
            break;
        }
        case 2: {
            hero.heal();
            break;
        }
        default:
            break;
    }
}
function fight(hero, enemy) {
    const userChoice = (0, userInput_1.default)();
    if (hero.getSpd >= enemy.getSpd) {
        console.log(`${hero.getName} moves first`);
        heroAction(hero, enemy, userChoice);
        if (enemy.getHp > 0) {
            enemy.attack(hero);
        }
    }
    else {
        console.log(`${enemy.getName} moves first`);
        enemy.attack(hero);
        if (hero.getHp > 0) {
            heroAction(hero, enemy, userChoice);
        }
    }
}
exports.default = fight;
