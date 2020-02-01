const hero = {
  name: "Coding Hero",
  heroic: true,
  inventory: [],
  health: 10,
  weapon: { type: "sword", damage: 2 }
};
//variables

const heroRest = document.getElementById("inn");
const dagger = { type: "dagger", damage: 2 };
const daggerImage = document.getElementById("dagger");
const bag = document.getElementById("bag");
const heroName = document.getElementById("heroName");
const weaponType = document.getElementById("weaponType");
const weaponDamage = document.getElementById("weaponDamage");
const heroHealth = document.getElementById("health");
const wType = hero.weapon.type;
const wDamage = hero.weapon.damage;
const changeName = document.getElementById("changeHeroName");

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
heroRest.addEventListener("click", function() {
  rest(hero);
  heroHealth.innerText = `Health: 10`;
});

// pickup item function
function pickUpItem(person, weapon) {
  person.inventory.push(weapon);
}
// dagger afbeelding click event
daggerImage.addEventListener("click", function() {
  pickUpItem(hero, dagger);
  daggerImage.remove();
});

bag.addEventListener("click", function() {
  equipWeapon(hero);
  displayStats(hero);
});

function equipWeapon(person) {
  if (person.inventory.length === 0) {
    console.log("empty inventory");
    return;
  } else {
    person.weapon = person.inventory[0];
  }
}

function displayStats(person) {
  heroName.innerText = `Your Hero: ${person.name}`;
  heroHealth.innerText = `Health: ${person.health}`;
  weaponType.innerText = `Weapon: ${wType}`;
  weaponDamage.innerText = `Damage: ${wDamage}`;
}

function beatEnnemy() {
  const ennemy = document.getElementById("ennemy");
  ennemy.remove();
  hero.health = 2;
  heroHealth.innerText = `Health: 2`;
  const winText = document.getElementById("winningText");
  winText.innerText = "You beat the monster";
}

changeName.addEventListener("click", function() {
  const newName = window.prompt("Enter your Hero Name:");
  hero.name = newName;
  heroName.innerText = `Your Hero: ${newName}`;
});

displayStats(hero);
