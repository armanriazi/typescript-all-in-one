// function that takes a parameter of type `number` or `null`
function printValues(a: number | null) {
    console.log(`a = ${a}`);  // log the value of a
  }
  
  printValues(1); // call the function with a number value of 1
  printValues(null); // call the function with a null value
  
