const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}

*/

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

// const myNewObject =  Object.create()

const chai = {
  name: "Ginger Chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("Chai nhi bani");
  },
};
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", { writable: false, enumerable: false });
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key}: ${value}`);
  }
}
