// const userEmail = "t@jamuan.ai";

// if (userEmail) {
//   console.log(`Got user email`);
// } else {
//   console.log(`Don't have user email`);
// }

/*
falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN 
truthy values : "0", "false", " ", [], {}, function(){}
*/
const userEmail = [];
if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

//  Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10; // saftey check and assign the value. {10 is assigned}
// val1 = undefined ?? 15;  // assigned 15
val1 = null ?? 10 ?? 15;

console.log(val1);

//  Terniary Operator

//  condition ? true: false

const iceTeaPrice = 10;
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");
