"use strict";
exports.__esModule = true;
var createCharacter_1 = require("./createCharacter");
var fight_1 = require("./fight");
var userInput_1 = require("./userInput");
var jsonUtilities_1 = require("./jsonUtilities");
function displayRound(floor, hero, ennemy) {
    console.log("================== FIGHT ".concat(floor, " =================="));
    console.log("Name : ".concat(ennemy.name.toUpperCase()));
    console.log("HP : ".concat(ennemy.hp));
    console.log("Hero : ".concat(hero.name.toUpperCase()));
    console.log("HP : ".concat(hero.hp));
    console.log('------------------ OPTION ------------------');
    console.log('1 - Attack  \t 2 - Heal');
}
function start(floor, hero) {
    var isOver = false;
    var fightIsOver = false;
    var ennemyArray = (0, jsonUtilities_1.getEnemies)();
    var bossArray = (0, jsonUtilities_1.getBosses)();
    var ennemy = (0, createCharacter_1.createCharacter)(ennemyArray);
    while (floor <= 10 && !isOver) {
        if (fightIsOver) {
            if (floor < 10)
                ennemy = (0, createCharacter_1.createCharacter)(ennemyArray);
            else
                ennemy = (0, createCharacter_1.createCharacter)(bossArray);
            console.log("New enemy appear : ".concat(ennemy.name, " ").concat(ennemy.hp));
            fightIsOver = false;
        }
        displayRound(floor, hero, ennemy);
        var userChoice = (0, userInput_1["default"])();
        console.log(userChoice);
        switch (userChoice) {
            case 1: {
                console.log('attack');
                ennemy = (0, fight_1.attack)(hero, ennemy);
                break;
            }
            case 2: {
                hero = (0, fight_1.heal)(hero);
                break;
            }
            default:
                break;
        }
        if (ennemy.hp > 0) {
            hero = (0, fight_1.attack)(ennemy, hero);
        }
        else {
            console.log("You have beated ".concat(ennemy.name));
            fightIsOver = true;
            floor += 1;
        }
        if (hero.hp <= 0) {
            console.log('YOU LOST.');
            isOver = true;
        }
    }
}
function main() {
    var floor = 1;
    var playerArray = (0, jsonUtilities_1.getCharacters)();
    var hero = (0, createCharacter_1.createCharacter)(playerArray);
    hero.maxHp = hero.hp;
    start(floor, hero);
}
main();
