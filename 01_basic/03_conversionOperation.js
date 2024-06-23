let score = "33abc"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


/*
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;
*/

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 44;

let string = String(someNumber);
// console.log(string);
// console.log(typeof string);

// ****************** Operations **********************

let value = 3
let negValue = - value
// console.log(negValue);

// operations (+,-,*,/,**,%)
let str1 = "hello"
let str2 = " Ramesh"

let str3 = str1 + str2;
// console.log(str3);

// console.log("1"+ 2); // 12
// console.log(1+ "2"); // 12
// console.log("1"+2+2); // 122 (first element is string: it will treat others as  string as well)
// console.log(1+2+"2"); // 32  (last element is string: firstly it will perform the calculation)

console.log(+true);
console.log(+""); 

let num1 , num2 , num3 
num1 = num2 = num3 = 2+2

// PREFIX AND POSTFIX OF JAVASCRIPT

let num = 10;
// someNum = num ++;
someNum = ++num;
console.log(num, someNum);

let a = 3;
let b = -- a;
console.log(a,b);

