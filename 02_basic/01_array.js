// Array

const myArr = [0, 1, 2, 3, 4, 5];

const myHeors = ["IronMan", "Spiderman"];
const myArr2 = new Array(1, 4, 7, 9);
// console.log(myArr2);

// console.log(myArr[3]);

// Array methods

// myArr.push(6);
// console.log(myArr);

// myArr.pop()
// console.log(myArr);

// myArr.unshift(10);
// console.log(myArr);

// myArr.shift();
// console.log(myArr);


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join();
// console.log(newArr);
// console.log(typeof newArr);

//  slice and splice

console.log("A", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);
// slice exclude the end position and returns the original array

const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("C",myArr)
// splice includes the end position element and modifies the original array. 