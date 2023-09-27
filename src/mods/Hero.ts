import Character from './Character';
import CharacterInterface from './CharacterInterface';

export default class Hero extends Character {
  private coins: number;

  private lvl: number;

  private xp: number;

  private xpToLvlUp: number;

  constructor(character : CharacterInterface, coins : number) {
    super(character);
    this.coins = coins;
    this.xp = 0;
    this.lvl = 1;
    this.xpToLvlUp = 30;
  }

  public get getName(): string {
    return `\x1b[32m${this.name.toUpperCase()}\x1b[0m`;
  }

  public displayInfo() : void {
    let healthBar = '';
    console.log(`\x1b[32m${this.name.toUpperCase()}\x1b[0m (LVL ${this.lvl})`);
    for (let i = 0; i < this.hp; i += 1) healthBar += '\u2665 ';
    console.log(`\x1b[31m${healthBar}\x1b[0m`);
    console.log(`HP : ${this.hp}/${this.maxHp}`);
    console.log(`Strength : ${this.str} - Defense : ${this.def} - Speed : ${this.spd}`);
    console.log(`XP : ${this.xp}/${this.xpToLvlUp}`);
    console.log(`Rupees : ${this.coins}`);
  }

  public addCoins(coins: number): void {
    console.log(`You gained ${coins} rupees`);
    this.coins += coins;
  }

  private gainStat(): void {
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

  private lvlUp(): void {
    this.lvl += 1;
    this.xp -= this.xpToLvlUp;
    this.xpToLvlUp += ((this.lvl - 2) + 1);
    console.log(`${this.name} gains 1 lvl. You are now level ${this.lvl}`);
    this.gainStat();
  }

  public addXp(xp: number): void {
    this.xp += xp;
    console.log(`${this.name.toUpperCase()} gains ${xp} experience points`);
    while (this.xp >= this.xpToLvlUp) {
      this.lvlUp();
    }
  }

  public heal(): void {
    console.log(`${this.name.toUpperCase()} heals for ${Math.floor(this.maxHp / 2)} hp`);
    this.setHp = this.getHp + Math.floor(this.maxHp / 2);
  }
}
