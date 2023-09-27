import {readFileSync} from "fs";

const pathCharacters = './json/players.json'
const pathEnemies = './json/enemies.json'
const pathBosses = './json/boss.json'

export function getCharacters(){
    try {
        const file = readFileSync(pathCharacters, 'utf-8');
        const characterJson = JSON.parse(file);
        return characterJson;
    } catch {
        console.error('Cannot access to players.json');
        return null;
    }
}

export function getEnemies() {
    try {
        const file = readFileSync(pathEnemies, 'utf-8');
        const enemiesJson = JSON.parse(file);
        return enemiesJson;
    } catch {
        console.error('Cannot access to enemies.json');
        return null;
    }
}

export function getBosses(){
    try {
        const file = readFileSync(pathBosses, 'utf-8');
        const bossJson = JSON.parse(file);
        return bossJson;
    } catch {
        console.error('Cannot access to boss.json');
        return null;
    }
}
