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
    if (rarity <= 50) {  //rarity 1
        const itemToDrop = Math.floor(Math.random() * 100);
        if (itemToDrop <= 50) {
            return 1
        } else {
            return 2
        }
    }
    if (rarity <= 33) { //rarity 3
        return 3
    }
    return 3
}