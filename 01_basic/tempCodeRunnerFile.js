// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // returns objects

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());


// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));


let date = new Date ();
// let birthday = date.toLocaleDateString();
let birthday = date.toTimeString()
console.log(birthday);