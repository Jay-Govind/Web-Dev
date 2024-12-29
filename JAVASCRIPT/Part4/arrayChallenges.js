/* 
1. Declare an array named `teaFlavours` that contains the string `"green tea"`, `"black tea"`, and `"oolong tea"`.
    Access the first element of the array and store it in a variable named `firstFlavour`.
*/

let teaFlavours = ["green tea", "black tea", "oolong tea"];
let firstFlavour = teaFlavours[0];
// console.log(firstFlavour);

// let teaFl = new Array("green tea", "black tea", "oolong tea");
// this is also a valid way to declare an array

/* 
2. Declare an array named `cities` containing `"London"`, `"Paris"`, `"Tokyo"`, and `"New York"`.
    Access the third element in the array and store it in a variable named `favoriteCity`.
*/

let cities = ["London", "Tokyo", "Paris", "New York"];
const favoriteCity = cities[2];
// console.log(favoriteCity);

/*
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`.
    Change the second element of the array to `"jasmine tea"`.
*/

let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";
// console.log(teaTypes);

/*
4. Declare an arrray named 'citiesVisited' containing `"Mumbai"` and `"Syndey"`.
    Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited = ["Mumbai", "Syndey"];
citiesVisited.push("Berlin"); // adding to the end
// console.log(citiesVisited);

/* 
    we can also use this method
    citiesvisited[citiesVisited.length] = "Berlin"
*/

/* 
5. You have an array named `teaOrders` with `"chai"`, `"ice tea"`, `"matcha"` and `"earl grey"`.
    Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`. 
*/

let teaOrders = ["chai", "ice tea", "matcha", "earl grey"];
let lastOrder = teaOrders.pop(); // removing from the end
// console.log(lastOrder);

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"` and `"chai"`.
    Create a soft copy of this array named `softCopyTeas`.
*/

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
// console.log(softCopyTeas);
// console.log(popularTeas);

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`.
    Create a hard copy of this array named `"hardCopyCities"`.
*/

let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];
// console.log(hardCopyCities);

/* 
8. You have two arrays: `europeCities` containing `"Paris"` and `"Rome"` and `asianCities` containing `"Tokyo"` and `"Bangkok"`.
    Merge these two arrays into a new array named `worldCities`.
*/

let europeCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = [...europeCities, ...asianCities];
// console.log(worldCities);

/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`.
    Find the length of array and store it in a variable named `menuLength`.
*/

let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
let menuLength = teaMenu.length;
// console.log(menuLength);

/* 
10. you have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`.
    Check if `"London"` is present in the array and store the result in a variable named `isLondonPresent`.
*/

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
let isLondonPresent = cityBucketList.includes("London");
// console.log(isLondonPresent);