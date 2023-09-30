import Character from './Character';
import CharacterInterface from './CharacterInterface';
import { makeBar } from './hpBar';
import * as fs from 'fs'
import { Item } from './objects';
import { getItemName } from './jsonUtilities';

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
    const file = fs.readFileSync('./json/object-inv.json', 'utf-8')
    const fileContent = JSON.parse(file)
    console.log(fileContent)
    for (const item of fileContent) {
      this.inventory.push(item)
    }
  }

  public setMaxHp(maxHp : number) {
    this.maxHp = maxHp
  }

  public setCoins(coins : number) {
    this.coins = coins
  }

  public setXp(xp : number) {
    this.xp = xp
  }

  public setLvl(lvl : number) {
    this.lvl = lvl
  }

  public setXpToLvlUp(xpToLvlUp : number){
    this.xpToLvlUp = xpToLvlUp
  }

  public setInventory(inventory : Item[]) {
    this.inventory = inventory
  }

  public get getName(): string {
    return `\x1b[32m${this.name.toUpperCase()}\x1b[0m`;
  }

  public displayInfo() : void {
    let healthBar = '';
    console.log(`\x1b[32m${this.name.toUpperCase()}\x1b[0m (LVL ${this.lvl})`);
    healthBar = makeBar(this.hp, this.getMaxHp)
    console.log(`\x1b[31m${healthBar}\x1b[0m`);
    console.log(`HP : ${this.hp}/${this.maxHp}`);
    console.log(`Strength : ${this.str} - Defense : ${this.def} - Speed : ${this.spd}`);
    console.log(`XP : ${this.xp}/${this.xpToLvlUp}`);
    console.log(`Rupees : ${this.coins}`);
  }

  public displayInventory(): void {
    let rien = false;
    let userChoice = '';
    console.log('You actually have:');
    for (const elem of this.inventory) {
      if (elem.number > 0) {
        console.log(`${this.getItem(elem.id).name} (x${elem.number})`);
        rien = true;
      }
    }
    if (!rien) {
      console.log('Nothing in your inventory');
    } else {
      userChoice = rl.question('Which item do you want to use? \n ');
      if (userChoice === '1') {
        this.usingItem(1);
      } else if (userChoice === '2') {
        this.usingItem(2);
      } else if (userChoice === '3') {
        this.usingItem(3);
      } else if (userChoice === '4') {
        this.usingItem(4);
      } else if (userChoice === '5') {
        this.usingItem(5);
      } else if (userChoice === '6') {
        this.usingItem(6);
      } else if (userChoice === '7') {
        this.usingItem(7);
      } else {
        console.log('Invalid choice.');
      }
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
    console.log(`${this.name.toLocaleUpperCase()} obtain one ${this.getItem(idItem).name} !`)

  }

  private getNumberOfCurrentItem(id : number) {
    for (const elem of this.inventory) {
      if (elem.id === id) {
        return elem.number
      }
    } 
    return 0
  }

  public getItem(id : number) {
    //Return name of Item by id
    const file = fs.readFileSync('./json/object-inv.json', 'utf-8')
    const fileContent = JSON.parse(file)
    for (const item of fileContent) {
      if (item.id === id) {
        return item
      }
    }
  }

  public subtractCoins(amount: number): number {
    if (this.coins >= amount) {
      this.coins -= amount;
    }
    return this.coins; //returne new value coins
  }

  public usingItem(id: number): void {
    const item = this.getItem(id);
    const numberOfItems = this.getNumberOfCurrentItem(id);
    if (item && numberOfItems > 0) {
      switch (item.id) {
        case 1:
          console.log("Max HP !!!")
          this.setHp = this.maxHp
          break;
        case 2:
          console.log(`${this.name.toUpperCase()} gaine 10 str`)
          this.setStr = this.getStr + 10;
          break;
        case 3:
          console.log(`${this.name.toUpperCase()} gaine ${Math.floor(15)} xp`)
          this.xp += 15;
          break;
        case 4:
          console.log(`${this.name.toUpperCase()} gaine 20 str`)
          this.setStr = this.getStr + 20;
          break;
        case 5:
          console.log(`${this.name.toUpperCase()} gaine 50 str`)
          this.setStr = this.getStr + 50;
          break;
        case 6:
          console.log(`${this.name.toUpperCase()} gaine 5 def`)
          this.setDef = this.getDef + 5;
          break;
        case 7:
          console.log(`${this.name.toUpperCase()} gaine 15 def`)
          this.setDef = this.getDef + 15;
          break;
        default:
          console.log('Unknown item');
          break;
      }
  
      this.inventory[this.inventory.findIndex((element) => element.id === id)].number -= 1;
    } else {
      console.log('You don\'t have this item in your inventory.');
    }
  }   
}

