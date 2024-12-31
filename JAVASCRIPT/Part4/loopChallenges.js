/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/

let sum = 0;
let i = 0;
while (i <= 5) {
  sum += i;
  i++;
}
// console.log(`The sum is : ${sum}`);

/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the number in an array named `countdown`.
*/
let j = 5;
let countdown = [];
while (j >= 1) {
  countdown.push(j);
  j--;
}
// console.log(countdown);

/* 
3. Write a `do while1 loop that prompts the user to enter their favorite tea type until they enter `"stop"`.
    Store each tea type in an array named `teaCollection`.
*/

// let teaCollection = [];
// let tea;
// do {
//   tea = prompt(`Enter your favorite tea type`);
//   if (tea != "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea != "stop");

/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/

let total = 0;
let k = 1;
do {
  total += k;
  k++;
} while (k <= 3);
// console.log(total);

/* 
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` and stores the result in a new array named `multipliedNumbers`.
*/

let multipliedNumbers = [];
let numbers = [2, 4, 6];

for (let index = 0; index < numbers.length; index++) {
  multipliedNumbers[index] = numbers[index] * 2;
}
// console.log(multipliedNumbers);

/* 
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let c = 0; c < cities.length; c++) {
  cityList.push(cities[c]);
}
console.log(cityList);
