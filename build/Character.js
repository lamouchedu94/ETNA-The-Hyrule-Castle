"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Character {
    constructor(character) {
        this.name = character.name;
        this.def = character.def;
        this.int = character.int;
        this.hp = character.hp;
        this.maxHp = character.hp;
        this.race = character.race;
        this.res = character.res;
        this.spd = character.spd;
        this.str = character.str;
        this.mp = character.mp;
        this.luck = character.luck;
        this.class = character.class;
        this.rarity = character.rarity;
    }
    get getHp() {
        return this.hp;
    }
    set setHp(value) {
        this.hp = value;
        if (this.hp > this.maxHp)
            this.hp = this.maxHp;
    }
    get getDef() {
        return this.def;
    }
    get getInt() {
        return this.int;
    }
    get getLuck() {
        return this.luck;
    }
    get getMaxHp() {
        return this.maxHp;
    }
    get getMp() {
        return this.mp;
    }
    get getName() {
        return this.name.toUpperCase();
    }
    get getRes() {
        return this.res;
    }
    get getSpd() {
        return this.spd;
    }
    get getStr() {
        return this.str;
    }
    dodge(enemy) {
        const dodgeChance = enemy.getSpd - this.spd;
        if (dodgeChance > 0) {
            const dodge = Math.floor(Math.random() * 100 + 1);
            if (dodgeChance >= dodge) {
                console.log(`${enemy.getName} dodged ${this.getName} attack`);
                return true;
            }
        }
        return false;
    }
    attack(enemy) {
        let damage = this.getStr;
        if (!this.dodge(enemy)) {
            const critChance = Math.floor(Math.random() * 100 + 1);
            if (this.getLuck >= critChance) {
                console.log(`${this.getName} inflicts a critical strike`);
                damage *= 2;
            }
            damage = Math.floor(damage - damage * (enemy.getDef / 100));
            console.log(`${this.getName} attacks ${enemy.getName} for ${damage} damages`);
            enemy.setHp = enemy.getHp - damage;
        }
    }
}
exports.default = Character;
