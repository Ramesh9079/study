let a =  300;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  // console.log(`Inner: ${a}`);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one (){
   const username = "Ramesh"

   function two (){
    const website = "YouTube"
    console.log(username)
   }
    // console.log(website)
    two()
}
// one()


if (true){
  const username = "Ramesh"
  if (username === "Ramesh"){
    const website = " YouTube"
    // console.log(username + website)
  } 
  // console.log(website);
}

// console.log(username);

// *************************************************************

console.log(addOne(6)) //  We can execute the function before declariation
function addOne(num){
    return num +1
}

// Expression Function
const addTwo = function (num){
  return num +2
}
console.log(addTwo(5)) 
/* "We cannot execute the function before declaration in the expression function"
*/