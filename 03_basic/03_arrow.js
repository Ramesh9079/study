const user = {
    username: "Ramesh",
    price: 999,
    
     welcomeMessage: function ( ){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
     }

}
// user.welcomeMessage();
// user.username = "Sam"
// user.welcomeMessage();


// console.log(this); // this refers to the empty object in node environment

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// We cannot use the "this " in function.(returns undefined)
// function chai (){
//     let username = "Hitesh"
//     console.log(this.username)
// }
// chai ()

// ++++++++++++++++++++++++++++++++
// const chai = ()=>{
//     let username= "Ramesh"
//     console.log(this.username);
// }
// chai() 

// ***************** Arrow Function ************

// const addTwo = (num1, num2) =>{
//  return num1 + num2
// }
// console.log(addTwo(3,5))

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2) // implict return 
const addTwo = (num1, num2) => ({username:"Ramesh"}) // to return the object, paranthesis should be wrapped. 

console.log(addTwo(3,5)); 


