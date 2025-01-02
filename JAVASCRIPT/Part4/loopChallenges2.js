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

    let citiesPopulation = {
    "London" : 8900000,
    "New York" : 8400000,
    "Paris" : 2200000,
    "Berlin" : 3500000
    }
*/

let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};

let cityPopulations = {};

for (const city in citiesPopulation) {
  if (city === "Berlin") {
    break;
  }
  cityPopulations[city] = citiesPopulation[city];
}
// console.log(cityPopulations);

/* 
6. Use a `for-in` loop to loop through an object containing city populations.
    Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

    let worldCities = {
    "Syndey" : 5000000,
    "Tokyo" : 9000000,
    "Berlin" : 3500000,
    "Paris" : 2200000
    };
*/

let worldCities = {
  Syndey: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};

let largeCities = {};

for (const city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }
  largeCities[city] = worldCities[city];
}
// console.log(largeCities);

/* 
7. Write a `for-each` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`.
  Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.
*/
let chaiTypes = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
chaiTypes.forEach((tea) => {
  if (tea == "chai") {
    return;
  }
  availableTeas.push(tea);
});
// console.log(availableTeas);

/* 
Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`.
  Skip `"Sydney"` and store the other cities in an array named `traveledCities`.
*/

let citiesToVisit = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];
citiesToVisit.forEach(function (city) {
  if (city == "Sydney") {
    return;
  }
  traveledCities.push(city);
});
// console.log(traveledCities);

/* 
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`.
  Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
*/

let numberArray = [2, 5, 7, 9];
let doubledNumbers = [];

for (let i = 0; i < numberArray.length; i++) {
  if (numberArray[i] == 7) {
    continue;
  }
  doubledNumbers.push(numberArray[i] * 2);
}
// console.log(doubledNumbers);

/* 
10. Write a `for-of` loop to iterate through the loop `["chai","green tea","black tea","jasmine tea", "herbal tea"]` and stop when the length of the curent tea name is greater than 10.
  Store the teas iterated over in an array named `shortTeas`.
*/

let specialTeas = [
  "chai",
  "green tea",
  "black tea",
  "jasmine tea",
  "herbal tea",
];
let shortTeas = [];
for (const tea of specialTeas) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}
console.log(shortTeas);
