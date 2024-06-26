function sayMyName() {
  console.log("R");
  console.log("A");
  console.log("M");
  console.log("E");
  console.log("S");
  console.log("H");
}
// sayMyName();

// function addTwoNumbers (num1 , num2){
//     console.log(num1 + num2);
// }
// addTwoNumbers(3,4)

function addTwoNumbers(num1, num2) {
  // let result = num1 + num2
  // return result
  return num1 + num2;
  // console.log("Ramesh");  // after return statement in function, code is unreachable
}
const result = addTwoNumbers(3, 5);
// console.log(`Result : ${result}`);

function loginUserMessage(username  = "Sam") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }

  return `${username} just logged in `;
}

// console.log(loginUserMessage("Sujan"))
console.log(loginUserMessage("Aakriti"));
