// This function logs all of the arguments passed to it, along with their index.
///
/// ```bash
/// pnpm tsc src/fp/function/function-ex1.ts --outfile  ./dist/function-ex1.js
/// ```
///
function testArguments() {//a:number, b: number
    for (var i = 0; i < arguments.length; i++) {
      console.log(`argument[${i}] = ${arguments[i]}`);
    }
  }
  
  // Js Calling the function with different arguments. Ts Calling will expose an error
  //testArguments(1, 2);
  //testArguments("first", "second", "third");
  