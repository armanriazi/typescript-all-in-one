// Define the abstract class "EmployeeBase"
///
/// ```bash
/// pnpm tsc src/oop/abstract/abstract-ex1.ts --outfile  ./dist/abstract-ex1.js
/// ```
/// 
abstract class EmployeeBase {
    // Declare public properties "id" and "name" of type number and string respectively
    public id: number;
    public name: string;
  
    // Constructor which takes two arguments, "id" and "name"
    constructor(id: number, name: string) {
      // Set the values of the properties "id" and "name" to the arguments
      this.id = id;
      this.name = name;
    }
  }
  
  // Define the "OfficeWorker" class which extends the "EmployeeBase" class
  class OfficeWorker extends EmployeeBase {}
  
  // Define the "OfficeManager" class which extends the "OfficeWorker" class
  class OfficeManager extends OfficeWorker {
    // Declare a public property "employees" of type array of "OfficeWorker" objects with an empty default value
    public employees: OfficeWorker[] = [];
  }
// Create an instance of the OfficeWorker class with id = 1 and name = "Joe"
let joeBlogg = new OfficeWorker(1, "Joe");

// Create an instance of the OfficeWorker class with id = 2 and name = "Jill"
let jillBlogg = new OfficeWorker(2, "Jill");

// Create an instance of the OfficeManager class with id = 3 and name = "Jack"
let jackManager = new OfficeManager(3, "Jack");
