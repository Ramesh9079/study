/*
const score = 400;
console.log(typeof score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // precision value:2

const otherNumber =  23.8966

console.log(otherNumber.toPrecision(3)); // return value is string.
console.log(typeof (otherNumber.toPrecision(3)));  // string


const hundreds  = 1000000;
console.log(hundreds.toLocaleString("en-IN")); // ()=> international numbering system  (en_In) => uses Indian numbering system

*/

// =================== Maths ===========================

/*
console.log(Math);
console.log(Math.abs(-4)); // returns absolute value 
console.log(Math.round(4.7)); // round off
console.log(Math.ceil(4.3)); // top value (4.1 => 5)
console.log(Math.floor(4.3));  // min value (4.9 => 4)
console.log(Math.min(4,3,6,8,1)); // min value among them 
console.log(Math.max(4,3,6,8,1)); // max value among them 
*/

console.log(Math.random()); // generates the number from 0 to 1
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random () * (max-min+1))+ min)


const num2 = 459.78
console.log(num2.toPrecision(2))