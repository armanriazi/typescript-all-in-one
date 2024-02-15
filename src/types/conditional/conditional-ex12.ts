// Define a function named "printGeneric" that takes in a generic type "T" as a parameter
function printGeneric<T>(value: T) {
    // Log the type of "T" and the value of "value" to the console
    console.log(`typeof T is : ${typeof value}`);
    console.log(`value is : ${value}`)
  }
  
  printGeneric<string>(1);