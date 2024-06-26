
/*
Based on the data storage and accessible, datatypes are categorized. 

Primitive DataTypes 
7 types : String, Number, Boolean, Symbol, Undefined, Null,and bigInt

Reference (Non-primitive datatypes)
3 types: Array, Objects, Functions

Javascript is dynamically type language
*/


// const id = Symbol("123");
// const anotherId = Symbol("123");
// console.log(id === anotherId);

// const bigNumber = 12324234242423n;
// console.log(bigNumber);

const heros = ["IronMan", "SpiderMan", "Thor"]

let myObj = {
    name: "Ramesh",
    age : 23,
}

const myFunction = function () {
    console.log("Hello World");
}


// ---------------------------------
// Stack(primitive) and Heap (Non-Primitive)

let myYoutubename = "Tamangvlog.com"
let anotherName =  myYoutubename;
anotherName = "ramesh.com"

console.log(myYoutubename);
console.log(anotherName);

let one = {
    name:"Aakriti Sharma",
    designation: "RN"
}

let two = one
two.designation = "Software Developer"
console.log(one);
console.log(two);