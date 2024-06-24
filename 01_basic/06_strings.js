/*

const name = "Ramesh"
const repoCount = 50 

console.log(`Hello, My name is ${name} and my repo count is ${repoCount}`);  

const gameName =  new String ("rameshtmg");
console.log(gameName);

console.log(gameName[0]);
console.log(gameName.length); // count the number of element.
console.log(gameName.toUpperCase()); // convert the string into Upper Case.
console.log(gameName.charAt(3)); // find the character at the given index. 
console.log(gameName.indexOf("t")); // index of the character.

*/

// String Methods

const name = "TonyStark "

// console.log(name.charAt(4));
//  .concat()   ==>  returns a new string.

const  str1 = "Cats are the best!"
// console.log(str1.endsWith('best!', 18));
// console.log(str1.includes("are"));
console.log(str1.indexOf("the" , 12));   // returns -1
console.log(str1.indexOf("the" ,2));    // returns 9 as ( the actual position of "the" is greater than searchString position)  

/* if the position of the searchString is greater than the actual index or lenth of the string then, it returns (-1)
*/

// console.log(name.repeat(3));
// console.log(name.replace("Stark", "STARK"));

// const str11 = "I think Ruth's dog is cuter than your dog!"
// console.log(str11.replaceAll("dog", "cat"));
// console.log(str11.search("g"));


const str = "The quick brown fox jumps over the lazy dog."

// console.log(str.slice(4,10));
// console.log(str.slice(4));
console.log((str.split(" ")));  // array 