//  forEach

const coding = ["js", "python", "cpp", "ruby", "java"];

// coding.forEach((items) => {
//   console.log(items);
// });

// coding.forEach(function (item) {
//   console.log(item);
// });

// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe); // only giving reference not calling it

// coding.forEach((item, index, array) => {
//   console.log(item, index, array);
// });

const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "Js",
  },
  {
    languageName: "Java",
    languageFileName: "Java",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
