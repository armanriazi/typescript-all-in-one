// Define a function named `testArguments` that takes a rest parameter `args`
function testArguments(...args: (string[] | number[])) { 
    for (let i in args) {
      // Log each argument in the format `args[i] = argument_value`
      console.log(`args[${i}] = ${args[i]}`);
    }
  }
  
  // Call the `testArguments` function with different arguements
  testArguments("1");
  testArguments(10, 20);
  