import Hero from './Hero';
import Enemy from './Enemy';
import GameSettings from './GameSettings';
import { getBosses, getCharacters, getEnemies, getObject } from './jsonUtilities';
import { createEnemy, createHero } from './createCharacter';
import { displayRound, displayMenu } from './display';
import gainXp from './lvl_exp';
import fight from './better_combat_options';
import getUserInput from './userInput';
import { dropItem } from './objects';
import { Console } from 'console';
import { readFile, readFileSync } from 'fs';

const rl = require('readline-sync');
let hero: Hero;
const pathObj = "./json/object.json";


const shopInventory: any = readFileSync(pathObj, 'utf-8'); // Read the contents of './json/object.json' and store it in 'shopInventory'
const stock = JSON.parse(shopInventory); // Parse 'shopInventory' to JSON and store it in 'stock'

export default function startGame(game: GameSettings) { 
  let fightIsOver: boolean = true; 
  let floor = 1; 
  const playerArray = getCharacters();
  const enemyArray = getEnemies();
  const bossArray = getBosses(); 
  hero = createHero(playerArray); 
  let enemy: Enemy = createEnemy(enemyArray, game.getDifficulty); 

  // while the hero is alive and the floor is less than the maximum number of rounds, keep fighting.
  while (floor <= game.getRound && hero.getHp > 0) {
    console.clear();

    if (fightIsOver) {
      if (floor % 10 === 0) enemy = createEnemy(bossArray, game.getDifficulty); 
      // Create a boss enemy every 10th floor
      else enemy = createEnemy(enemyArray, game.getDifficulty);
      console.log(`New enemy appears: ${enemy.getName} ${enemy.getHp}`); 
      fightIsOver = false; // Set 'fightIsOver' to false as a new fight has started
    }
    // Display the current round information.
    displayRound(floor, hero, enemy);
    // call the fight function to get the user's input and resolve the fight.
    const repUtil = fight(hero, enemy);

    if (repUtil === 3) {
      hero.displayInventory(); 

    }
    if (repUtil === 4) {
      console.log('You leave the fight.'); 
      fightIsOver = true; 
    }
    if (repUtil === 5) {
      displayMenu(); 
      handleMenuChoice(getUserInput());
    }

    // Check if the hero or enemy is dead.
    if (hero.getHp <= 0) console.log('😩☠️      \x1b[31mYOU LOST\x1b[0m   😱💀');
    else if (enemy.getHp <= 0) {
      console.log(`You defeated ${enemy.getName}`); 
      gainXp(hero); // Increase the hero's experience points.
      fightIsOver = true;
      floor += 1; // Increment the floor.
      hero.addCoins(1); 
      hero.addItem(dropItem()); // Add a dropped item to the hero's inventory.
    }
    if (floor)
      rl.question('Press enter to continue'); 
  }
  if (hero.getHp > 0) {
    console.log("👌You're alive !✨👌"); 
}

function displayShop() {
  console.log("================✨Welcome to the Rup'shop✨================"); 
  console.log(`Wallet: ${hero.getCoins()} Ɍ🪙`);
  stock.forEach((item: any, index: any) => {
    console.log(`|${index + 1}. ${item.name} (x${item.stock}) - ${item.price} Ɍ🪙`); 
  });
  console.log("============================================================");
}

function purchaseItem(itemIndex: number) {
  const selectedItem = stock[itemIndex]; // Get the selected item from the shop's inventory
  const playerCoins: number | undefined = hero.getCoins(); // get the hero's coins
  const itemPrice: number | undefined = selectedItem?.price; // get the price of the selected item.

  if (playerCoins !== undefined && itemPrice !== undefined && playerCoins >= itemPrice && selectedItem.stock > 0) {
    selectedItem.stock -= 1; // Decrement the item's stock.
    hero.subtractCoins(itemPrice); // Subtract the item's price from the hero's coins.
    hero.addItem(selectedItem.id); // Add the purchased item to the hero's inventory.
    console.log(`You have purchased ${selectedItem.name} !`); 
    console.log(`Wallet🪙 : ${hero.getCoins()} Ɍ\n`); 
  } else if (selectedItem.stock === 0) {
    console.log(`Sorry Man, ${selectedItem.name} is out of stock.`); 
  } else {
    console.log("Insufficient funds or item not found.");
  }
}

function handleMenuChoice(choice: number) {
  switch (choice) {
    case 1:
      break;
    case 2:
      displayShop();
      const shopItemChoice = getUserInput();
      if (shopItemChoice === 0) {
        // The player chooses to leave the shop.
      } else if (shopItemChoice >= 1 && shopItemChoice <= stock.length) {
        purchaseItem(shopItemChoice - 1); // Purchase the selected item from the shop.
      } else {
        console.log("Nop dude, invalid selection."); 
      }
  }
}
}
