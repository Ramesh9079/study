/* Singleton object
const tinderUser = new Object()
console.log(tinderUser);
*/

let tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Samantha";
tinderUser.isloggedIn = true;

// console.log(tinderUser);

const regularUser = {
  email: "somea42@gmail.com",
  fullName: {
    userName: {
      firstname: "Aakriti",
      lastname: "Sharma",
    },
  },
};

// console.log(regularUser.fullName.userName.firstname);
// console.log(regularUser.fullName.userName["firstname"]);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  4: "a",
  3: "b",
};

// const obj3 = Object.assign({},obj1, obj2)  // {}=>target and others are the sources. 

// const obj3 = { ...obj1, ...obj2 }; // Mostly used
// console.log(obj3);


// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // return value is array
// console.log(Object.values(tinderUser)); // return value is array
// console.log(Object.entries(tinderUser)); // return key and value in array form.  Output: [ [ 'id', '123abc' ], [ 'name', 'Samantha' ], [ 'isloggedIn', true ] ]

// console.log(tinderUser.hasOwnProperty("IsloggedIn"));


// Object de-structuring
const course = {
  coursename:"js in hindi",
  price: "999",
  courseInstructor : "Hitesh"
}
//  course.courseInstructor 

const {courseInstructor:instructor} = course
console.log(instructor);


// ========== API concept =============
//  JSON (key and value both are strings)

