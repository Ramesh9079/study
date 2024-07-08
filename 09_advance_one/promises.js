// Bluebird and Q library were used for asynchronous operations.

const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network call
  setTimeout(function () {
    console.log(`Async task is complete`);
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise is consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log(`Async Task 2`);
    resolve();
  }, 1000);
}).then(function () {
  console.log(`Async task 2 resolved`);
});

// ==================================

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve({ username: "Ramesh", email: "chai@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// =============================
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Ramesh", password: "123abc" });
    } else {
      reject(`Error:- Something went wrong`);
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log(`Finally, the promise is either resolved or rejected.`);
  });

//   ========================================

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Javascript", password: "123abc" });
    } else {
      reject(`Error: JS went wrong`);
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// ++++++++++++++++++++++++++++++++++++++++++

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getAllUsers();

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//  global fetch () method and return the promise (Network)
//  404 error  => comes as a response (not reject)
//  fetch (url, )
