/// `>tags:` #Important #Inheritance
/// Implementing the derived interface in a class
// Definition of class BaseInterfaceClass with properties id and method print
class BaseInterfaceClass {
    id: number = 0;
    // Method that logs the value of id property
    print() {
      console.log(`this.id = ${this.id}`);
    }
  }
  
  // Definition of interface IBaseInterfaceClassExt that extends BaseInterfaceClass
  interface IBaseInterfaceClassExt
    extends BaseInterfaceClass {
    // Method that sets the value of id property
    setId(id: number): void;
  }
// Class 'ImplementsExt' extends from the 'BaseInterfaceClass' class
class ImplementsExt  
extends BaseInterfaceClass {
// Implementing the 'IBaseInterfaceClassExt' interface
// to ensure all its properties and methods are implemented
setId(id: number): void {
  this.id = id;
}
}
