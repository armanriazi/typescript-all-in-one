let structuredObject: object = {
    name: "myObject",
    properties: {
      id: 1,
      type: "AnObject"
    }
  };
  
  // Define a function that takes an object as an argument and logs its string representation
  function printObjectType(a: object) {
    console.log(`a: ${JSON.stringify(a)}`);
  }
  
  printObjectType(structuredObject);
  //printObjectType("this is a string"); //Error
  