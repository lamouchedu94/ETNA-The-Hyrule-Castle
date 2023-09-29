import save from "./save"
export default function menu(userInput : number) {
  if (userInput === 5) {
    console.log(`\nSee you later !`)     
    process.exit(1)
  }
  if (userInput === 3) {
    save(hero, enemy)
    console.log(`Game saved.`)
  } 
  else {
    console.log("not implemented yep. wip")
  }
}