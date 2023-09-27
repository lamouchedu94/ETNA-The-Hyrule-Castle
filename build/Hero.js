"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = __importDefault(require("./Character"));
class Hero extends Character_1.default {
    constructor(character, coins) {
        super(character);
        this.coins = coins;
        this.xp = 0;
        this.lvl = 1;
        this.xpToLvlUp = 30;
    }
    get getName() {
        return `\x1b[32m${this.name.toUpperCase()}\x1b[0m`;
    }
    displayInfo() {
        let healthBar = '';
        console.log(`\x1b[32m${this.name.toUpperCase()}\x1b[0m (LVL ${this.lvl})`);
        for (let i = 0; i < this.hp; i += 1)
            healthBar += '\u2665 ';
        console.log(`\x1b[31m${healthBar}\x1b[0m`);
        console.log(`HP : ${this.hp}/${this.maxHp}`);
        console.log(`Strength : ${this.str} - Defense : ${this.def} - Speed : ${this.spd}`);
        console.log(`XP : ${this.xp}/${this.xpToLvlUp}`);
        console.log(`Rupees : ${this.coins}`);
    }
    addCoins(coins) {
        console.log(`You gained ${coins} rupees`);
        this.coins += coins;
    }
    gainStat() {
        const stat = Math.floor(Math.random() * 3 + 1);
        switch (stat) {
            case 1:
                console.log('You gained 2 point of strength');
                this.str += 2;
                break;
            case 2:
                console.log('You gained 5 point of HP');
                this.maxHp += 5;
                this.hp += 5;
                break;
            case 3:
                console.log('You gained 1 point of defense');
                this.res += 1;
                break;
            case 4:
                console.log('You gained 1 point of speed');
                this.spd += 1;
                break;
            default:
                break;
        }
    }
    lvlUp() {
        this.lvl += 1;
        this.xp -= this.xpToLvlUp;
        this.xpToLvlUp += ((this.lvl - 2) + 1);
        console.log(`${this.name} gains 1 lvl. You are now level ${this.lvl}`);
        this.gainStat();
    }
    addXp(xp) {
        this.xp += xp;
        console.log(`${this.name.toUpperCase()} gains ${xp} experience points`);
        while (this.xp >= this.xpToLvlUp) {
            this.lvlUp();
        }
    }
    heal() {
        console.log(`${this.name.toUpperCase()} heals for ${Math.floor(this.maxHp / 2)} hp`);
        this.setHp = this.getHp + Math.floor(this.maxHp / 2);
    }
}
exports.default = Hero;
