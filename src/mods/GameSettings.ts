export default class GameSettings {
  private readonly difficulty: number;

  private readonly round : number;

  constructor(difficulty : number, round : number) {
    this.difficulty = difficulty;
    this.round = round;
  }

  get getDifficulty(): number {
    return this.difficulty;
  }

  get getRound(): number {
    return this.round;
  }
}
