// This function takes in two parameters, "a" and "b"
// "a" is a number
// "b" is either a number, null, or undefined

function testNullOperands(a: number, b: number | null | undefined) {
     
    // This line declares a variable "addResult" and assigns it the result of adding "a" with the value of "b" if b is not null or undefined, otherwise it will use default value 0
    let addResult = a + (b ?? 0);
    //let addResult = a + b ?? 0; //Error
    
  }
  