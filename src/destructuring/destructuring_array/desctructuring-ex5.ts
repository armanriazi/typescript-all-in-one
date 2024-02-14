// Declare a tuple called tuple1 with elements of type string and boolean
let tuple1: [string, boolean?];

// Assign values "test" and true to the tuple
tuple1 = ["test", true];

// This assignment is incorrect as it is missing a second element of type boolean
// and will result in a TypeScript error
//tuple1 = ["test"];


// Print the first element of tuple1
console.log(`tuple1[0] : ${tuple1[0]}`);


// Destructuring assignment to extract values from tuple1
let [tupleString, tupleBoolean] = tuple1;

// Print the value of tupleString
console.log(`tupleString = ${tupleString}`);

// Print the value of tupleBoolean
console.log(`tupleBoolean = ${tupleBoolean}`);