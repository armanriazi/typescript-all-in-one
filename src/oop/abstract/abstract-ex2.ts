// Define an abstract class EmployeeBase with the following properties and methods:
// - `id` property of type number
// - `name` property of type string
// - `doWork` method with no return type (abstract method)
// - constructor that initializes `id` and `name` properties with `id` and `name` arguments
abstract class EmployeeBase {
    public id: number;
    public name: string;
    abstract doWork(): void;
  
    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
  }
  
  class OfficeWorker extends EmployeeBase {
    doWork() {
      console.log(`${this.name} : doing work`);
    }
  }
  
  class OfficeManager extends OfficeWorker {
    public employees: OfficeWorker[] = [];
    manageEmployees() {
      super.doWork();
      for (let employee of this.employees) {
        employee.doWork();
      }
    }
  }
  
  let joeBlogg = new OfficeWorker(1, "Joe");
  let jillBlogg = new OfficeWorker(2, "Jill")
  let jackManager = new OfficeManager(3, "Jack");
  
  jackManager.employees.push(joeBlogg);
  jackManager.employees.push(jillBlogg);
  jackManager.manageEmployees();
  