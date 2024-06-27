const myObj = {
  js: "Javascript",
  py: "Python",
  cpp: "C++",
  rb: "ruby",
  swift: "Swift by Apple",
};

for (const key in myObj) {
  console.log(`${key} shortcut for ${myObj[key]}`);
}

const programming = ["js", "rb", "java"];

for (const key in programming) {
  console.log(key, programming[key]);
}

/* We cannot iterate in map. 
const map = new Map();
map.set("In", "India");
map.set("USA", "United States of America");
map.set("JP", "Japan");
map.set("JP", "Japan");

for (const key in map) {
  console.log(key);
}
*/
