// Declare a string variable named 'myString' and initialize it with the value "Hello"
var myString: string = `Hello`;

// Declare a boolean variable named 'myBoolean' and initialize it with the value true
var myBoolean: boolean = true;

// Declare a number variable named 'myNumber' and initialize it with the value 1234
var myNumber: number = 1234;

// Declare an array of strings named 'myStringArray' and initialize it with the values ["first", "second", "third"]
var myStringArray: string[] = [`first`, `second`, `third`];

// This line sets the value of the `myString` variable to the string representation of the value of the `myBoolean` variable.
myString = myBoolean.toString()

// This line sets the value of the `myBoolean` variable to a boolean value that represents
// whether the value of the `myNumber` variable is equal to 456.
myBoolean = myNumber === 456;

// This line sets the value of the `myStringArray` variable to an array with two elements:
// 1. The string representation of the value of the `myNumber` variable.
// 2. The string '5678'.
myStringArray = [myNumber.toString(), `5678`];

// This line sets the value of the `myNumber` variable to the length of the `myStringArray` array.
myNumber = myStringArray.length;

// These lines log the current values of the `myString`, `myBoolean`, `myStringArray`, and `myNumber` variables
// to the console.
console.log(`myString = ${myString}`);
console.log(`myBoolean = ${myBoolean}`);
console.log(`myStringArray = ${myStringArray}`);
console.log(`myNumber = ${myNumber}`);