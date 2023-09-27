import CharacterInterface from './CharacterInterface';

export default class Character {
  protected readonly class: number;

  protected def: number;

  protected hp: number;

  protected int: number;

  protected luck: number;

  protected maxHp: number;

  protected mp: number;

  protected readonly name: string;

  protected readonly race: number;

  protected readonly rarity: number;

  protected res: number;

  protected spd: number;

  protected str: number;

  constructor(character : CharacterInterface) {
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

  public get getHp(): number {
    return this.hp;
  }

  public set setHp(value: number) {
    this.hp = value;
    if (this.hp > this.maxHp) this.hp = this.maxHp;
  }

  public get getDef(): number {
    return this.def;
  }

  public get getInt(): number {
    return this.int;
  }

  public get getLuck(): number {
    return this.luck;
  }

  public get getMaxHp(): number {
    return this.maxHp;
  }

  public get getMp(): number {
    return this.mp;
  }

  public get getName(): string {
    return this.name.toUpperCase();
  }

  public get getRes(): number {
    return this.res;
  }

  public get getSpd(): number {
    return this.spd;
  }

  get getStr(): number {
    return this.str;
  }

  private dodge(enemy: Character): boolean {
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

  public attack(enemy: Character): void {
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
