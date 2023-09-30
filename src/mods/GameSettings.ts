export default class GameSettings {
  private difficulty: number;

  private round : number;

  private floor : number;

  constructor(difficulty : number, round : number) {
    this.difficulty = difficulty;
    this.round = round;
    this.floor = 1
  }

  public setDifficulty(difficulty : number) {
    this.difficulty = difficulty
  }


  public setRound(round : number) {
    this.round = round
  }

  public setFloor(floor : number) {
    this.floor = floor
  }

  get getFloor() : number {
    return this.floor
  }

  get getDifficulty(): number {
    return this.difficulty;
  }

  get getRound(): number {
    return this.round;
  }
}
