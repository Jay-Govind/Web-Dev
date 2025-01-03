/* 
1. Write a fucntion named `makeTea` that makes one parameter, `typeOfTea`, and returns a string like `Making green Tea"` when called with `"green tea"`.
Store the reslt in a variable named `teaOrder`.
*/

function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}
let teaOrder = makeTea("green tea");
// console.log(teaOrder);

/* 
2. Create a fucntion named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`.
Call `confirmOrder` from within `orderTea` and return the result.
*/

function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for ${teaType}`;
  }
  return confirmOrder();
}
// console.log(orderTea("masala chai"));

/* 
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and quantity`. The function should return the total cost by multiplying the `price` and `quantity`.
  Store the result in a variable named `totalCost`.
*/

let calculateTotal = (price, quantity) => price * quantity;
let totalCost = calculateTotal(10, 5);
// console.log(totalCost);

/* 
4. Write a function named `processTeaOrder` that takes another function, `makeTea` as a parameter and calls it with the argument `"earl tea"`.
  Return the result of calling `makeTea`.
*/
function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}

function processTeaOrder(teaFunction) {
  return teaFunction("earl tea");
}

let order = processTeaOrder(makeTea);
// console.log(order);

/* 
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making greeen tea"`.
  Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
*/

function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType}`;
  };
}

let teaMaker = createTeaMaker();
// console.log(teaMaker("green tea"));
