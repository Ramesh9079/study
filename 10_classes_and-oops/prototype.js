// let myName = "Ramesh     ";

// console.log(myName.truelength());

let myHeros = ["Thor", "SpiderMan"];

let heroPower = {
  thor: "Hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`Hitesh is present in all object`);
};

// heroPower.hitesh();

// myHeros.hitesh();

Array.prototype.heyHitesh = function () {
  console.log(`Hitesh says HEllo`);
};

// myHeros.heyHitesh();
// heroPower.heyHitesh();

// inheritance

//Old traditional way: prototypal inheritance
const user = {
  name: "Chai",
  email: "chai@google.com",
};
const Teacher = {
  makeVideo: true,
};

const teachingAssistance = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: teachingAssistance,
};

Teacher__proto__ = user;

// modern syntax

Object.setPrototypeOf(teachingAssistance, Teacher);

let anotherUsername = "ChaiAURCode      ";
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True Length is: ${this.trim().length}`);
};

anotherUsername.trueLength();

"Ramesh".trueLength();
"iceatea".trueLength();
