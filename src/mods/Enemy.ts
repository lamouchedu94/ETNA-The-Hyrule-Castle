import Character from './Character';
import CharacterInterface from './CharacterInterface';
import { makeBar } from './hpBar';


// export interface EnemieInterface {
//   //this is temp
//   id: number,
//   name: string,
//   hp: number,
//   mp: number,
//   str: number,
//   int: number,
//   def: number,
//   res: number,
//   spd: number,
//   luck: number,
//   race: number,
//   class: number,
//   rarity: number
// }

export default class Enemy extends Character {
  constructor(character : CharacterInterface, difficulty: number) {
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

  public setMaxHp(maxHp : number) {
    this.maxHp = maxHp
  }

  public get getName(): string {
    return `\x1b[31m${this.name.toUpperCase()}\x1b[0m`;
  }

  public displayInfo(): void {
    let healthBar = '';
    console.log(`\x1b[31m${this.name.toUpperCase()}\x1b[0m`);
    //for (let i = 0; i < this.hp; i += 1) healthBar += '\u2660 ';
    healthBar = makeBar(this.hp, this.maxHp)
    console.log(`\x1b[35m${healthBar}\x1b[0m`);
    console.log(`HP : ${this.hp}/${this.maxHp}`);
  }
}
