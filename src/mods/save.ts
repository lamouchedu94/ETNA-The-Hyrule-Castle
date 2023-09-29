import Character from "./Character"
import * as fs from 'fs' 

export default function save(hero : Character, enemy : Character) {
  let dataFormat = '['
  dataFormat += JSON.stringify(hero)
  dataFormat += ',' + JSON.stringify(enemy) + "]"
  fs.writeFileSync('./json/save.json', dataFormat)
}