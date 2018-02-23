class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi! I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
};

class Student extends Person {
  constructor(name, age, major) {
    super(name, age); //referring to parent class
    this.major = major;
  }
  hasMajor() {
    return !!this.major; //logical NOT with boolean - flipping the value
  }
  getDescription() {
    let description = super.getDescription(); //accessing parent's method
    if (this.hasMajor()) {
      description = description + ` Their major is ${this.major}.`
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, homeLocation) {
    super(name);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation() {
    return !!this.homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.hasHomeLocation()) {
      greeting += ` I'm visiting from ${this.homeLocation}.`
    }
    return greeting;
  }
}

const me = new Student ('Mira Max', 40, 'Business', 'California');
// console.log(me.getDescription());

const mira = new Traveler('Mira Max', 'California')
console.log(mira.getGreeting());


const other = new Student();
// console.log(other.getDescription());


const trav = new Traveler()
console.log(trav.getGreeting());
