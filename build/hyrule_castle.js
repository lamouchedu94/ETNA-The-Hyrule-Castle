"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const basic_game_customization_1 = __importDefault(require("./basic_game_customization"));
const game_1 = __importDefault(require("./game"));
function main() {
    const game = (0, basic_game_customization_1.default)();
    if (game !== null)
        (0, game_1.default)(game);
}
main();
