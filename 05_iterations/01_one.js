//  for loop

for (let index = 0; index < 10; index++) {
  const element = index;
  if (element == 5) {
    // console.log(`5 is best number`);
  }

  //   console.log(element);
}

for (let i = 1; i <= 10; i++) {
  //   console.log(`Outer loop value: ${i}`);
  //   console.log(`Table of ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner Loop value: ${j} and loop:${i}`);
    // console.log(i + "*" + j + "=" + i * j);
  }
}

// +++++++++++++++++++++++++++++++++++

let myArray = ["flash", "Superman", "batman"];
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //   console.log(element);
}

// ----------------------------------------
// break and continue in javascript

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`Detected 5`);
//     break; //
//   }
//   console.log(`value of index is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`value of index is ${index}`);
}
