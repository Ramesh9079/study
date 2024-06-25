
// singleton {form from constructor}
// Object.create

// objects literals

const mySym = Symbol("key1")
const jsUser = {
    name:"Ramesh",
    [mySym]: "mykey1",
    age : 18,
    "location":"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Thursday"]
}

// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser["location"]);
// console.log(jsUser[mySym]);

jsUser.email = "rameshtmg@gmail.com"
// Object.freeze(jsUser);
jsUser.email = "aakrititmg@gmail.com"

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js User");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());