//Using class and methods

class Alien {
  constructor(name, phrase) {
    this.name = name;
    this.phrase = phrase;
    this.species = "alien";
  }
  fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!");
  sayPhrase = () => console.log(this.phrase);
}

//Using a factory function
const alien1 = new Alien("Ali", "I'm Ali the alien!");
console.log(alien1.name); // output: "Ali"

function Alien(name, phrase) {
  this.name = name;
  this.phrase = phrase;
  this.species = "alien";
}

Alien.prototype.fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!");
Alien.prototype.sayPhrase = () => console.log(this.phrase);

const alien2 = new Alien("Ali", "I'm Ali the alien!");

console.log(alien1.name); // output "Ali"
console.log(alien1.phrase); // output "I'm Ali the alien!"
alien1.fly(); // output "Zzzzzziiiiiinnnnnggggg"
