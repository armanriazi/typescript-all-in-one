class ClassWithReadonly {
    // Declare a property named 'name' with the type 'string' and mark it as readonly
    readonly #name: string;
  
    // Constructor function to initialize the 'name' property
    constructor(_name: string) {
      // Assign the value of the incoming parameter '_name' to the 'name' property
      this.#name = _name;
    }
  
    // Function to attempt to set the value of the 'name' property
    setNameValue(_name: string) {
      // Attempt to assign a new value to the 'name' property
      //this.name = _name; //Error
    }
  }
  