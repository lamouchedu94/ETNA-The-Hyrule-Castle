import Hero from './Hero';
import Enemy from './Enemy';
import GameSettings from './GameSettings';
import { getBosses, getCharacters, getEnemies } from './jsonUtilities';
import { createEnemy, createHero } from './createCharacter';
import { displayRound, displayMenu } from './display';
import gainXp from './lvl_exp';
import fight from './better_combat_options';
import getUserInput from './userInput';
import { dropItem } from './objects';

const rl = require('readline-sync');

const shopInventory = [
  { id: 1, name: "Heal potion", price: 10, stock: 2},
  { id: 2, name: "Sword (made in china)", price: 1, stock: 2 },
];

let hero: Hero;

export default function startGame(game: GameSettings) {
  let fightIsOver: boolean = true;
  let floor = 1;
  const playerArray = getCharacters();
  const enemyArray = getEnemies();
  const bossArray = getBosses();
  hero = createHero(playerArray);
  let enemy: Enemy = createEnemy(enemyArray, game.getDifficulty);

  while (floor <= game.getRound && hero.getHp > 0) { // Ajoutez les parenthèses pour appeler getRound
    console.clear();
    if (fightIsOver) {
      if (floor % 10 === 0) enemy = createEnemy(bossArray, game.getDifficulty);
      else enemy = createEnemy(enemyArray, game.getDifficulty);
      console.log(`New enemy appears: ${enemy.getName} ${enemy.getHp}`);
      fightIsOver = false;
    }
    displayRound(floor, hero, enemy);
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

    if (hero.getHp <= 0) console.log('\x1b[31mYOU LOST\x1b[0m');
    else if (enemy.getHp <= 0) {
      console.log(`You defeated ${enemy.getName}`);
      gainXp(hero);
      fightIsOver = true;
      floor += 1;
      hero.addCoins(1);
      hero.addItem(dropItem());
    }
    rl.question('Press enter to continue');
  }
}

function displayShop() {
  console.log("Welcome to the shop");
  console.log(`Hero's coins: ${hero.getCoins()} Ɍ\n`);

  shopInventory.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} (x${item.stock}) - ${item.price} Ɍ `);
  });
}

function purchaseItem(itemIndex: number) {
  const selectedItem = shopInventory[itemIndex];
  const playerCoins: number | undefined = hero.getCoins();
  const itemPrice: number | undefined = selectedItem?.price;
  
  if (playerCoins !== undefined && itemPrice !== undefined && playerCoins >= itemPrice && selectedItem.stock > 0) {
    // Réduisez le stock de l'article.
    selectedItem.stock -= 1;
    // Votre code lorsque le joueur a suffisamment de pièces.
    hero.subtractCoins(itemPrice);
    hero.addItem(selectedItem.id);
    console.log(`You have purchased ${selectedItem.name} !`);
    console.log(`Remaining currency: ${hero.getCoins()} Ɍ\n`);
  } else if (selectedItem.stock === 0) {
    console.log(`Sorry, ${selectedItem.name} is out of stock.`);
  } else {
    console.log("Insufficient funds or item not found.");
  }
}
  

function handleMenuChoice(choice: number) {
  switch (choice) {
    case 1:
      // Implémentez d'autres options de menu si nécessaire.
      break;
    case 2:
      displayShop();
      const shopChoice = getUserInput();
      if (shopChoice === 1) {
        // Le joueur choisit de quitter le magasin.
      } else if (shopChoice === 2) {
        // Le joueur choisit d'acheter un article.
        const shopItemChoice = getUserInput();
        if (shopItemChoice === 0) {
          // Le joueur choisit de quitter le magasin.
        } else if (shopItemChoice >= 1 && shopItemChoice <= shopInventory.length) {
          purchaseItem(shopItemChoice - 1);
        } else {
          console.log("Sélection invalide.");
        }
      } else {
        console.log("Option invalide.");
      }
      break;
    default:
      console.log("Choix de menu invalide.");
  }
}
