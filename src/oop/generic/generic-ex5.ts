// Define a function named "printGeneric" that takes in a generic type "T" as a parameter
function printGeneric<T>(value: T) {
    // Log the type of "T" and the value of "value" to the console
    console.log(`typeof T is : ${typeof value}`);
    console.log(`value is : ${value}`)
  }
  
  // Call the printGeneric function with various argument types
  
  printGeneric(1);
  printGeneric("test");
  printGeneric(true);
  printGeneric(() => { });
  printGeneric({ id: 1 });
  printGeneric<string>("test");
  //printGeneric<string>(1); //Invalid

  // Define a function using multiple generic types
function usingTwoTypes<A, B> ( first: A, second: B) {
}

// Call the usingTwoTypes function with various argument types
usingTwoTypes<number, string> ( 1, "test");
usingTwoTypes(1, "test");
usingTwoTypes<boolean, boolean>(true, false);
usingTwoTypes("first", "second");