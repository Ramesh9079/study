//  Dates

let myDate = new Date ()
console.log(myDate);
console.log(myDate.toString()); // returns the string representation of the date. 
console.log(myDate.toDateString()); // returns date as a string value.
console.log(myDate.toISOString()); // returns the date in ISO forms
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(typeof myDate); // returns objects

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());


// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date ()
console.log(newDate);
console.log(newDate.getDay());  // day 
console.log(newDate.getFullYear()); // full Year
console.log(newDate.getMonth()); // months (start with 0 as January)
console.log(newDate.getDate());  // date 

`${newDate.getDay()}`

//  newDate.toLocaleString("default",{
//     weekday: "long"
// })
console.log( newDate.toLocaleString("default",{
    weekday: "long"
}));