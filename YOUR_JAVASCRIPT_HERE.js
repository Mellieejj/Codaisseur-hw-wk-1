// Write your JS here
const myHero = {};
// Write your JS here
const hero = {
  name: "Coding Hero",
  heroic: true,
  inventory: [],
  health: 5,
  weapon: { type: "sword", damage: 2 }
};

// rest function
function rest(person) {
  if (person.health === 10) {
    alert("You health is already 10");
  }
  person.health = 10;
  return person;
  displayStats(person);
}

// rest afbeelding click event
const heroRest = document.getElementById("inn");
heroRest.addEventListener("click", function() {
  rest(hero);
});

// pickup item function
function pickUpItem(person, weapon) {
  person.inventory.push(weapon);
}
// dagger afbeelding click event
const dagger = { type: "dagger", damage: 2 };
const daggerImage = document.getElementById("dagger");
daggerImage.addEventListener("click", function() {
  pickUpItem(hero, dagger);
  daggerImage.remove();
});

const bag = document.getElementById("bag");
bag.addEventListener("click", function() {
  equipWeapon(hero);
  displayStats();
});

function equipWeapon(person) {
  if (person.inventory.length === 0) {
    console.log("empty inventory");
    return;
  } else {
    person.weapon = person.inventory[0];
  }
}
const heroName = document.getElementById("heroName");
const weaponType = document.getElementById("weaponType");
const weaponDamage = document.getElementById("weaponDamage");
const heroHealth = document.getElementById("health");
const wType = hero.weapon.type;
const wDamage = hero.weapon.damage;
// console.log(hero.weapon.type);
// console.log(hero.weapon.damage);

function displayStats(person) {
  heroName.innerText = `Your Hero: ${person.name}`;
  heroHealth.innerText = `Health: ${person.health}`;
  weaponType.innerText = `Weapon: ${wType}`;
  weaponDamage.innerText = `Damage: ${wDamage}`;
}
displayStats(hero);

function beatEnnemy() {
  const ennemy = document.getElementById("ennemy");
  ennemy.remove();
  const winText = document.getElementById("winningText");
  winText.innerText = "You beat the monster";
}
