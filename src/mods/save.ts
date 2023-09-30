import Character from "./Character"
import * as fs from 'fs' 
import GameSettings from "./GameSettings"

export default function save(hero : Character, enemy : Character, game : GameSettings) {
  let dataFormat = '['
  dataFormat += JSON.stringify(hero)
  dataFormat += ',' + JSON.stringify(enemy)
  dataFormat += ',' + JSON.stringify(game) + ']'
  fs.writeFileSync('./json/save.json', dataFormat)
}