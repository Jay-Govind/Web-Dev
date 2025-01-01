/* 
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds "chai".
    Store all teas before `"chai"` in a new array named `selectedTeas`.
*/

let teaTypes = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let chai = 0; chai < teaTypes.length; chai++) {
  if (teaTypes[chai] === "chai") {
    break;
  }
  selectedTeas.push(teaTypes[chai]);
}
// console.log(selectedTeas);

/* 
2. Write a `for` loop that loops throgh the array `["London", "New York", "Paris", "Berlin"]` and skips the `"Paris"`.
    Store the other cities in a new array named `visitedCities`.
*/

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let city = 0; city < cities.length; city++) {
  if (cities[city] === "Paris") {
    continue;
  }
  visitedCities.push(cities[city]);
}
// console.log(visitedCities);

/* 
3. USe a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` ans stop when the number `4` is found.
    Store the numbers before `4` in a new array named `SamllNumbers`.
*/
let numbers = [1, 2, 3, 4, 5];
let SamllNumbers = [];

for (const number of numbers) {
  if (number === 4) {
    break;
  }
  SamllNumbers.push(number);
}
// console.log(SamllNumbers);

/* 
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`.
    Store the other teas in an array named `preferredTeas`
*/

let teas = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const tea of teas) {
  if (tea === "herbal tea") {
    continue;
  }
  preferredTeas.push(tea);
}
// console.log(preferredTeas);

/* 
5. Use a `for-in` loop to loop through an object containing city population.
    Stop the loop when the population of `"Berlin"` is found and store all previous cities' population in a new object named `cityPopulations`.

    let citiesPopulaton = {
    "London" : 8900000,
    "New York" : 8400000,
    "Paris" : 2200000,
    "Berlin" : 3500000
    }
*/

let citiesPopulaton = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};


/* 
6. Use a `for-in` loop to loop through an object containing city populations.
    Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

    let worldCities = {
    "Syndey" : 5000000,
    "Tokyo" : 9000000,

    };
*/