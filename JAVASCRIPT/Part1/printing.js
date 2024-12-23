/* First method
it prints a new line after the string */
console.log("Hello World !");

/* Second method
it prints the string without a new line */
process.stdout.write("Hello World !\n");

/* Third method
it prints the string in a table format */
console.table(["Hello World !", "Hello Govind !"]);
console.table({ name: "Jay Govind !", age: 20 });

/* Fourth method
it prints the string in red color as an error */
console.error("Hello World !");

/* Fifth method
it prints the string in yellow color as a warning */
console.warn("Hello World !");

/* Sixth method
it prints the string in blue or green color as an info */
console.info("Hello World !");
