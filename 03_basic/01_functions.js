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

function loginUserMessage(username = "Sam") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }

  return `${username} just logged in `;
}

// console.log(loginUserMessage("Sujan"))
// console.log(loginUserMessage("Aakriti"));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function calculateCartPrice(...num1) {
  // (val1,val2, ...num1)
  return num1;
}
console.log(calculateCartPrice(200, 400, 500, 800, 600)); // => [800,600]


// =================================
const user = {
  username: "Ramesh",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}
// handleObject(user);
handleObject({
    username: "Rambabu", 
    price: 9999
})
 //+++++++++++++++++++++++++++++++++++++++++
const myArray  = [200,400,900,100]

function returnSecondValue (getArray) {
    return getArray[1]
}
// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([100,200,300,400]));

