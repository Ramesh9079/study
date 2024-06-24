
const marvelHeros = ["Thor", "IronMan", "Spiderman"]
const dcHeros = [ "Superman","Flash", "batman"];

// marvelHeros.push(dcHeros);

// const allHeros =  marvelHeros.concat(dcHeros);
// console.log(allHeros);

// Use of spread operator
// const all_new_heros = [...marvelHeros, ...dcHeros];
// console.log(all_new_heros);

// let odd = [1,3,5]
// let even = [2,4,6]
// console.log([...odd, ...even]);

// const anotherArray = [ 1,2,3, [4,5,6],7, [6,7,[4,5]]];
// const usableArray = anotherArray.flat(Infinity); // array in same format.

// console.log(usableArray); 

console.log(Array.isArray("Histesh")) // to check if the variable is array or not (returns boolean value: True or False)
console.log(Array.from("Histesh")) //  converts into array
console.log(Array.from({name: "hitesh"})); // interesting {return empty array}

let score1 = 100
let score2 = 200
let score3 = 300 
console.log(Array.of(score1, score2, score3)); // also convert the elements into array. 
