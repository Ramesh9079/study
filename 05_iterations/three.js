//  for of
// ["","",""]
// [{},{},{}]

// const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//   console.log(num);
// }

const greetings = "Hello World!";
for (const greet of greetings) {
  //   if (greet == " ") {
  //     console.log(`Space is detected`);
  //     continue;
  //   }
  //   console.log(`Each character is ${greet}`);
}

//  Maps

const map = new Map();
map.set("In", "India");
map.set("USA", "United States of America");
map.set("JP", "Japan");
map.set("JP", "Japan");

// console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

const myObject = {
  game1: "NFS",
  game2: "IPL",
  game3: "NFL",
};
// for (const [key, value] of myObject) {
//   console.log(key, value);
// }
