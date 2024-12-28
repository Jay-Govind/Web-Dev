// ----------------objects------------------

let id = Symbol("id");
let user = {
  [id]: 1,
  "first name": "Jay Govind",
  "last name": "Kumar",
  username: "@govind",
  email: "govind@google.com",
  age: 20,
  address: {
    city: "Ara",
    state: "Bihar",
  },
  greet() {
    console.log(`Hello, ${this["first name"]} ${this["last name"]}!`);
  },
};

// console.log(user);
// console.log(typeof user);
// console.log(user.greet());

// console.log(user["first name"]);
/* Here, we can't access the first name using dot operator because it is a string */

// console.log(user[id]);

// ----------------Arrays------------------

let arr = [];
let arr2 = new Array();
let arr3 = Array(5);
let arr4 = ["jay", 20, "@govind", "govind@google.com"];
// in js, arrays can be of different data types.

// console.log(arr4[0]);

let arr5 = [1, 2, 3, 4];
let arr6 = [5, 6, 7, 8];

// let newArr = arr5.concat(arr6);
// console.log(newArr);

// let newArr = arr5.join(arr6);
// console.log(newArr);

// arr5.push(arr6);
// console.log(arr5);

// let newArr = [...arr5, ...arr6];
// console.log(newArr);

/* -------------Array Methods------------ */

let numbers = [1, 2, 3, 4, 5];

numbers.push(6);
// console.log(numbers);

numbers.pop(2);
// console.log(numbers);

numbers.unshift(0);
// console.log(numbers);

numbers.shift(0);
// console.log(numbers);

// let newArr = numbers.slice(1, 3);
// console.log(newArr);

// let newArr = numbers.splice(1, 3);
// console.log(newArr);
// console.log(numbers);

numbers.reverse();
console.log(numbers);