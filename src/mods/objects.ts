import * as fs from 'fs'
export interface Item {
    id: number,
    name: string,
    number: number,
    rarity: number,
}

export function dropItem() {
    //const file = fs.readFileSync('./json/potions.json', 'utf-8')
    //const potions = JSON.parse(file)
    const rarity = Math.floor(Math.random() * 100);
    
    if (rarity <= 50) {
        return 1
    } else {
        return 2
    }
}
  
(dropItem())