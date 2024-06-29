// const coding = ["js", "python", "cpp", "ruby", "java"];

// const values = coding.forEach((item) => {
// //   console.log(item);
//   return item;
// });

// console.log(values);
// It doesn't return the value.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => {
//   return num > 6;
// });
// console.log(newNums);
// //  It returns the values

// const newNums = [];
// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });
// console.log(newNums);

const books = [
  {
    titile: "Book One",
    genre: "Fiction",
    publish: 1981,
    edition: 2001,
  },
  {
    titile: "Book Two",
    genre: "Non-Fiction",
    publish: 1991,
    edition: 2004,
  },
  {
    titile: "Book Three",
    genre: "Science",
    publish: 1988,
    edition: 2010,
  },
  {
    titile: "Book Four",
    genre: "Biography",
    publish: 2000,
    edition: 2017,
  },
  {
    titile: "Book Five",
    genre: "Fiction",
    publish: 2001,
    edition: 2020,
  },
  {
    titile: "Book Six",
    genre: "Non-Fiction",
    publish: 1986,
    edition: 2004,
  },
  {
    titile: "Book Seven",
    genre: "History",
    publish: 1901,
    edition: 2019,
  },
  {
    titile: "Book Eight",
    genre: "Biography",
    publish: 1998,
    edition: 2013,
  },
  {
    titile: "Book Nine",
    genre: "Fiction",
    publish: 1995,
    edition: 2007,
  },
];

let userBooks = books.filter((bk) => bk.genre === "Fiction");

userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "Biography";
});

console.log(userBooks);
