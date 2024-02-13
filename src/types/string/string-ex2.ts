// This function calculates the result of (a * b) + c
function calculate(a, b, c) {
  
    // Return the result of (a * b) + c
    return (a * b) + c;
    }
  
// Log the result of calling the calculate function with arguments 3, 2 and 1
console.log("calculate() = " + calculate(3, 2, 1));

  // Log the result of calling the calculate function with arguments "2", "3", and "1"
console.log("calculate() = " + calculate("2", "3", "1"));

console.log(`calculate() = ${calculate("2", "3", "1")}`);

// Declaring a variable of string type
var returnedValue: string = calculate(3, 2, 1);

console.log(`calculate() = ${returnedValue}`);