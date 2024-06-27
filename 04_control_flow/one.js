// Control flow or logic flow

// if statement

// const isUserLoggedIn = true;
// const temperature = 41;

// if (temperature === 40) {
//   console.log("Less than 50");
// } else {
//   console.log("Temperature is greater than 50");
// }

// comparision : <, >, <=, >=, ==, !=, ===, !==

// const score = 200;
// if (score > 100) {
//   const power = "Fly";
//   console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`);

// +++++++++ Shorthand notation ++++++++++++++++

// const balance = 1000;
// if (balance > 500) console.log("test"), console.log("test2"); // (Not acceptable for readabaility)

// if (balance < 500) {
//   console.log("Less than ");
// } else if (balance < 750) {
//   console.log("Less than 750");
// } else if (balance < 950) {
//   console.log("Less than 950");
// } else {
//   console.log("Less than 1200");
// }

const isUserLoggedIn = true;
const debitcard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (isUserLoggedIn && debitcard && 2 == 2) {
  console.log(`Allowed to buy course`);
}

if (loggedInFromEmail || loggedInFromGoogle) {
  console.log(`User logged in`);
}
