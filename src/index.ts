///
/// ```bash
/// pnpm tsc ./src/index.ts --outfile  ./dist/index.js
/// ```
///
/**
 - [x] Computes the power of a given number
 - [x] @constructor
 - [x] @param {number} base – The base value of the expression
 - [x] @param {number} exponent – The exponent value of the expression
 */
 /*
 function power(base: number, exponent: number) {
    return Math.pow(base, exponent);
}
*/

// export { Foo } from './foo';. Exporting from this file makes it available for consumption when someone does import //{ /* Here */ //} from 'example';

var version = `ES6`;


/*
const result = '1' + 1; // Result is of type string
console.log(result)
*/

if (123 && true) { // Will be treated like `true`
    console.log(`Hello ${version} TypeScript`);
}

const x = 1;
const y = "Good";

console.log(`${x},${y}`);

//**** */
// This function takes in a string as a parameter and does not return anything
function printString(a: string) : void {
    // This line logs the string passed as an argument to the console
    console.log(a);
  }
  
  // This variable is declared as a string type and is assigned the return value of the printString function
var returnedValue  = printString("this is a string");

//**** */
// Declare a variable of type any with a string value
let a: any = "test";

// Declare a variable of type number with a number value
let aNumber: number = 2;

// Attempt to assign a value of type any to a variable of type number
aNumber = a;

console.log(`${aNumber}`);


let prices = [20, 5, 50, 35, 60, 10];
console.log(prices.length);