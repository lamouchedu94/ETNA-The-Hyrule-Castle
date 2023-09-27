"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = __importDefault(require("./Character"));
class Enemy extends Character_1.default {
    constructor(character, difficulty) {
        super(character);
        this.hp *= difficulty;
        this.str *= difficulty;
        this.int *= difficulty;
        this.mp *= difficulty;
        this.spd *= difficulty;
        this.res *= difficulty;
        this.def *= difficulty;
        this.luck *= difficulty;
        this.maxHp *= difficulty;
    }
    get getName() {
        return `\x1b[31m${this.name.toUpperCase()}\x1b[0m`;
    }
    displayInfo() {
        let healthBar = '';
        console.log(`\x1b[31m${this.name.toUpperCase()}\x1b[0m`);
        for (let i = 0; i < this.hp; i += 1)
            healthBar += '\u2660 ';
        console.log(`\x1b[35m${healthBar}\x1b[0m`);
        console.log(`HP : ${this.hp}/${this.maxHp}`);
    }
}
exports.default = Enemy;
