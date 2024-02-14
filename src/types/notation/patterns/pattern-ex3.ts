/// Definite assignment asseration for global varible(!)
// Declare a variable named "globalString" with the type of "string"
var globalString: string;

// Call the function "setGlobalString" and pass in the argument "this string is set"
setGlobalString("this string is set");

// Log the current value of the "globalString" variable to the console, using the definite assignment assertion syntax to indicate that the variable has been assigned a value before this point.
console.log(`globalString = ${globalString!}`);

// Define a function named "setGlobalString" that takes in a parameter named "value" with the type "string"
function setGlobalString(value: string) {
  // Assign the value of the "value" parameter to the "globalString" variable
  globalString = value;
}

