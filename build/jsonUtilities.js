"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBosses = exports.getEnemies = exports.getCharacters = void 0;
const fs_1 = require("fs");
const pathCharacters = './json/players.json';
const pathEnemies = './json/enemies.json';
const pathBosses = './json/boss.json';
function getCharacters() {
    try {
        const file = (0, fs_1.readFileSync)(pathCharacters, 'utf-8');
        const characterJson = JSON.parse(file);
        return characterJson;
    }
    catch (_a) {
        throw new Error(`Cannot access file : ${pathCharacters}`);
    }
}
exports.getCharacters = getCharacters;
function getEnemies() {
    try {
        const file = (0, fs_1.readFileSync)(pathEnemies, 'utf-8');
        const enemiesJson = JSON.parse(file);
        return enemiesJson;
    }
    catch (_a) {
        throw new Error(`Cannot access file : ${pathEnemies}`);
    }
}
exports.getEnemies = getEnemies;
function getBosses() {
    try {
        const file = (0, fs_1.readFileSync)(pathBosses, 'utf-8');
        const bossJson = JSON.parse(file);
        return bossJson;
    }
    catch (_a) {
        throw new Error(`Cannot access file : ${pathBosses}`);
    }
}
exports.getBosses = getBosses;
