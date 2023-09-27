"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const minXp = 15;
const maxXp = 50;
function gainXp(hero) {
    const xp = Math.floor(Math.random() * (maxXp - minXp + 1) + minXp);
    hero.addXp(xp);
}
exports.default = gainXp;
