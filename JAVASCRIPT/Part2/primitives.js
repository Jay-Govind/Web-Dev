// ---------------Number----------------

let balance = 1000;
let anotherbalance = new Number(1000);

// console.log(balance); // 1000
// console.log(anotherbalance); // Number {1000}
// console.log(anotherbalance.valueOf()); // 1000

// console.log(typeof balance); // number
// console.log(typeof anotherbalance); // object

/* Here `new` keyword is used to create a number as `object` and it is not recommended to use `new` keyword to create a number. */

// ---------------String----------------

let name = "Jay Govind";
let message = "Hello";
let emptyStr = "";
let anotherName = new String("Jay Govind");

// console.log(name); // Jay Govind
// console.log(message); // Hello
// console.log(emptyStr); // ""
// console.log(anotherName); // String { "Jay Govind" }

// String interpolation or template literals ( using backticks )

let greeting = `Hello, ${name}!`;
// console.log(greeting);

// ---------------Symbol----------------
let sym1 = Symbol();
let sym2 = Symbol("jay");
let sym3 = Symbol("jay");

console.log(sym1); // Symbol()
console.log(sym2); // Symbol(jay)
console.log(sym3); // Symbol(jay)
console.log(sym2 === sym3); // false
