///
/// ```bash
/// pnpm tsc ./src/declaration/var/var-ex2.ts
/// ```
/// Generate a Error
/// index.ts(8,31): error TS2454: Variable 'globalString' is used before being assigned.
// Declare a variable named "globalString" with the type of "string"
var globalString; // or let
// Call the function "setGlobalString" and pass in the argument "this string is set"
setGlobalString("this string is set");
// Log the current value of the "globalString" variable to the console
console.log("globalString = ".concat(globalString)); //without ! will expose an error
// Define a function named "setGlobalString" that takes in a parameter named "value" with the type "string"
function setGlobalString(value) {
    // Assign the value of the "value" parameter to the "globalString" variable
    globalString = value;
}
