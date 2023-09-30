import Character from "./Character"
import save from "./save"
import GameSettings from "./GameSettings"
export default function menu(userInput : number, hero : Character, enemy : Character, game : GameSettings) {
  if (userInput === 5) {
    console.log(`\nSee you later !`)     
    process.exit(1)
  }
  if (userInput === 3) {
    save(hero, enemy, game)
    console.log(`Game saved.`)
  }
  if (userInput === 4) {
    save(hero, enemy, game)
    console.log(`Game saved.`)
    console.log(`\nSee you later !`)     
    process.exit(1)
  }
  else {
    //console.log("not implemented yep. wip")
  }
}