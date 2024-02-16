// Define a function called classConstructorDec which takes a constructor function as input and logs it to the console
// It also adds a testProperty to the prototype of the constructor function
function classConstructorDec(constructor: Function) {
    console.log(`constructor : ${constructor}`);
  // Define a function called classConstructorDec which takes a constructor function as input and logs it to the console
  function classConstructorDec(constructor: Function) {
    console.log(`constructor : ${constructor}`);
  }
  
  // Apply the classConstructorDec decorator to the ClassWithConstructor class
  @classConstructorDec
  class ClassWithConstructor {
    public testProperty: number = 1;
    constructor(id: number) { }
  }
  
  }
  
  // Apply the classConstructorDec decorator to the ClassWithConstructor class
  @classConstructorDec
  class ClassWithConstructor {
    public testProperty: number = 0;
    constructor(id: number) { }
  }
  
  // Create an instance of the ClassWithConstructor class and assign it to the classInstance variable
let classInstance = new ClassWithConstructor(1);

// Log the value of the testProperty added to the prototype of the class instance using type assertion
console.log(`classInstance.testProperty = ${(<any>classInstance).testProperty}`);
