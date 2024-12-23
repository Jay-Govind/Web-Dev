/*
Datatypes:
1. Primitive Datatypes
    a. String
    b. Number
    c. Boolean
    d. BigInt

    e. Undefined
    f. Null

    g. Symbol

2. Non-Primitive Datatypes
    a. Array
    b. Object
    c. Function
*/

var name = "jay govind";
// console.log(name);
// var should not be used because it is a global variable.
// let should be used instead of var.

let score = 100;
console.log(score);
console.log(typeof score); // number

let String = "Hello World";
console.log(String);
console.log(typeof String); // string

let isTrue = true;
console.log(isTrue);
console.log(typeof isTrue); // boolean

// objects & arrays
let languages = ["Python", "JavaScript", "Java", "C++"];
console.log(languages);
console.log(typeof languages); // object

let person = {
  name: "Govind",
  age: 20,
  isStudent: true,
};
console.log(person);
console.log(typeof person); // object
