"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GameSettings {
    constructor(difficulty, round) {
        this.difficulty = difficulty;
        this.round = round;
    }
    get getDifficulty() {
        return this.difficulty;
    }
    get getRound() {
        return this.round;
    }
}
exports.default = GameSettings;
