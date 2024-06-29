const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map((item) => {
//   return item + 10;
// });

// console.log(newNums);
//  It returns the value  itself

// let number = [];
// myNumbers.forEach((num) => {
//   if (num > 0) {
//     number.push(num + 10);
//   }
// });

// console.log(number);

const newNums = myNumbers
  .map((num) => num * 10) // num is multiplied by 10
  .map((num) => num + 1) // after the first operation, 1 is added to each number.
  .filter((num) => num > 50); // it filter the number greater than 50 from above operation.

console.log(newNums);
