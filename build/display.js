"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function displayRound(floor, hero, ennemy) {
    console.log(`================== FIGHT ${floor} ==================`);
    ennemy.displayInfo();
    hero.displayInfo();
    console.log('—————————————————— OPTION ——————————————————');
    console.log('1 - Attack  \t 2 - Heal');
}
exports.default = displayRound;
