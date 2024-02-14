class ClassWithReadonly {
    // Declare a property named 'name' with the type 'string' and mark it as readonly
     name: string;
  
    // Constructor function to initialize the 'name' property
    constructor(_name: string) {
      // Assign the value of the incoming parameter '_name' to the 'name' property
      this.name = _name;
    }
  
    // Function to attempt to set the value of the 'name' property
    setNameValue(_name: string) {
      // Attempt to assign a new value to the 'name' property
      this.name = _name;
    }
  }
  
  const obj = new ClassWithReadonly('Still no error, try adding the readonly keyword somewhere in this code');
  console.log(obj.name);
  obj.setNameValue('Educative'); // error: Cannot assign to 'name' because it is a read-only property
  