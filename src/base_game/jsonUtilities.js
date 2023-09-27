"use strict";
exports.__esModule = true;
exports.getBosses = exports.getEnemies = exports.getCharacters = void 0;
var fs_1 = require("fs");
var pathCharacters = './json/players.json';
var pathEnemies = './json/enemies.json';
var pathBosses = './json/boss.json';
function getCharacters() {
    try {
        var file = (0, fs_1.readFileSync)(pathCharacters, 'utf-8');
        var characterJson = JSON.parse(file);
        return characterJson;
    }
    catch (_a) {
        console.error('Cannot access to players.json');
        return null;
    }
}
exports.getCharacters = getCharacters;
function getEnemies() {
    try {
        var file = (0, fs_1.readFileSync)(pathEnemies, 'utf-8');
        var enemiesJson = JSON.parse(file);
        return enemiesJson;
    }
    catch (_a) {
        console.error('Cannot access to enemies.json');
        return null;
    }
}
exports.getEnemies = getEnemies;
function getBosses() {
    try {
        var file = (0, fs_1.readFileSync)(pathBosses, 'utf-8');
        var bossJson = JSON.parse(file);
        return bossJson;
    }
    catch (_a) {
        console.error('Cannot access to boss.json');
        return null;
    }
}
exports.getBosses = getBosses;
