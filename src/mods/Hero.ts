import Character from './Character';
import CharacterInterface from './CharacterInterface';
import { makeBar } from './hpBar';
import * as fs from 'fs'
import { Item } from './objects';

export default class Hero extends Character {
  private coins: number;

  private lvl: number;

  private xp: number;

  private xpToLvlUp: number;

  private inventory: Item[]  

  constructor(character : CharacterInterface, coins : number) {
    super(character);
    this.coins = coins;
    this.xp = 0;
    this.lvl = 1;
    this.xpToLvlUp = 30;
    this.inventory = []
    this.initialiseInventory()
  }

  private initialiseInventory() {
    const file = fs.readFileSync('./json/potions.json', 'utf-8')
    const fileContent = JSON.parse(file)
    console.log(fileContent)
    for (const item of fileContent) {
      this.inventory.push(item)
    }
  }

  public get getName(): string {
    return `\x1b[32m${this.name.toUpperCase()}\x1b[0m`;
  }

  public displayInfo() : void {
    let healthBar = '';
    console.log(`\x1b[32m${this.name.toUpperCase()}\x1b[0m (LVL ${this.lvl})`);
    //for (let i = 0; i < this.hp; i += 1) healthBar += '\u2665 ';
    healthBar = makeBar(this.hp, this.getMaxHp)
    console.log(`\x1b[31m${healthBar}\x1b[0m`);
    console.log(`HP : ${this.hp}/${this.maxHp}`);
    console.log(`Strength : ${this.str} - Defense : ${this.def} - Speed : ${this.spd}`);
    console.log(`XP : ${this.xp}/${this.xpToLvlUp}`);
    console.log(`Rupees : ${this.coins}`);
  }

  public displayInventory() : void {
    let rien = false  // si on a rien dans l'inventaire
    console.log("you actually have :")
    for (const elem of this.inventory) {
      if (elem.number > 0){
        console.log(`${this.getItemName(elem.id)} (x${elem.number})`)
        rien = true
      }
      
    }
    if (!rien) {
      console.log('Nothing in your inventory')  
    }
    
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

  public addItem(idItem: number) : void {
    for (const item of this.inventory) {
      if (item.id === idItem) {
        item.number += 1
      }  
    }
    //console.log(this.inventory[0])

  }

  private getNumberOfCurrentItem(id : number) {
    for (const elem of this.inventory) {
      if (elem.id === id) {
        return elem.number
      }
    } 
    return 0
  }

  public getItemName(id : number) : void {
    //Return name of Item by id
    const file = fs.readFileSync('./json/potions.json', 'utf-8')
    const fileContent = JSON.parse(file)
    for (const item of fileContent) {
      if (item.id === id) {
        return item.name
      }
    }
  }
}