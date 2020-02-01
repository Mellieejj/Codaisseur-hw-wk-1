// Write your JS here
const myHero = {};
// Write your JS here
const hero = {
  name: "Coding Hero",
  heroic: true,
  inventory: [],
  health: 10,
  weapon: { type: "sword", damage: 2 }
};

// rest function
function rest(person) {
  if (person.health === 10) {
    alert("You health is already 10");
  }
  person.health = 10;
  return person;
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
});

const bag = document.getElementById("bag");
bag.addEventListener("click", function() {
  equipWeapon(hero);
});

function equipWeapon(person) {
  if (person.inventory.length === 0) {
    console.log("empty inventory");
    return;
  } else {
    person.weapon = person.inventory[0];
  }
}
