// Class 'ClassES6Private' defines a private property '#id' of type number
class ClassES6Private {
    // Property '#id' is a private field and can only be accessed within the class
    #id: number;
  
    // Constructor initializes the private '#id' field with the passed 'id' argument
    constructor(id: number) {
      this.#id = id;
    }
  }
  
  // Instantiate a new object of type 'ClassES6Private' with an 'id' of 10
  let es6PrivateClass = new ClassES6Private(10);
  
  // Attempt to change the private '#id' field
  //es6PrivateClass.#id = 20;
  