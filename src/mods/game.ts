import Enemie from "./Enemy"

export function combat(fightNumber : number, enemie : Enemie) {
    console.log(`========== FIGHT ${fightNumber} ==========`)
    console.log(`\x1B[31m${enemie.name}\x1B[0m`)
    let hpBar : string = ""
    for (let i = 0; i < enemie.hp; i+=1) {
        hpBar+="I"
    }
    console.log(`Hp : ${hpBar}`)
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
combat(1,enemieTest)