//  Reduce method
//  accumulator meaning: empty variable (inital value at the first)

const myNums = [1, 2, 3];

const myTotal = myNums.reduce((acc, currval) => {
  console.log(`Accumulator: ${acc} and Current value: ${currval}`);
  return acc + currval;
}, 0); // Here 0 stands for the initial value (accumulator)

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "JS Course",
    price: 2999,
  },
  {
    itemName: "Python Course",
    price: 5999,
  },
  {
    itemName: "IOS Development Course",
    price: 9999,
  },
  {
    itemName: "Data Scientist Course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
