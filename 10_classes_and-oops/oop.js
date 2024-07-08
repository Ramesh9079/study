const user = {
  username: "Ramesh",
  loginCount: 8,
  signedIn: true,
  getUserDetails: function () {
    // console.log(`Got user detail from database.`);
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// ====================================

function User(username, loginCount, isLoggedIn) {
  this.username = username; // (this.username is variable and username is value passed through parameter)
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  // return this; //Implicately defined
}

const userOne = new User("Ramesh", 12, true);
const userTwo = new User("Aakriti", 47, false);
console.log(userOne);
console.log(userTwo);
