import Enemie from "./Enemy"
import Hero from "./CharacterInterface"
import * as fs from "fs" 

export function getEnemieBaseHp(enemie : Enemie) {
    const file = fs.readFileSync("./json/enemies.json","utf-8")
    const enemieData = JSON.parse(file)
    let enemieBaseHp = 0
    for (const elem of enemieData) {
        if (elem.id ===enemie.id) {
            enemieBaseHp = elem.hp
        } 
    }    
    if (enemieBaseHp === 0) {
        console.log("enemieBaseHp not found.")
        process.exit(1)
    }
    return enemieBaseHp
}

export function getHeroBaseHp(hero : Hero) {
    const file = fs.readFileSync("./json/players.json","utf-8")
    const heroData = JSON.parse(file)
    let heroBaseHp = 0
    for (const elem of heroData) {
        if (elem.id ===hero.id) {
            heroBaseHp = elem.hp
        } 
    }    
    if (heroBaseHp === 0) {
        console.log("heroBaseHp not found.")
        process.exit(1)
    }
    return heroBaseHp
}

export function combat(fightNumber : number, enemie : Enemie, hero : Hero) {
    console.log(`========== FIGHT ${fightNumber} ==========`)
    console.log(`\x1B[31m${enemie.name}\x1B[0m`)
    let hpBar : string = ""
    for (let i = 0; i < enemie.hp; i+=1) {
        hpBar+="I"
    }
    console.log(`Hp : ${hpBar} ${enemie.hp}/${getEnemieBaseHp(enemie)}\n`)
    
    console.log(`\x1B[32m${hero.name}\x1B[0m`)
    hpBar = ""
    for (let i = 0; i < hero.hp; i+=1) {
        hpBar+="I"
    }
    console.log(`Hp : ${hpBar} ${hero.hp}/${getHeroBaseHp(hero)}`)
}

let enemieTest : Enemie = {
    id:1,
    name:"Dead Hand",
    hp:40,
    mp:20,
    str:5,
    int:3,
    def:2,
    res:2,
    spd:8,
    luck:5,
    race:15,
    class:5,
    rarity:3
}

let heroTest : Hero = {
    id:1,
    name:"Link",
    hp:60,
    mp:30,
    str:15,
    int:7,
    def:8,
    res:8,
    spd:11,
    luck:10,
    race:1,
    class:1,
    rarity:1
}

combat(1,enemieTest, heroTest)