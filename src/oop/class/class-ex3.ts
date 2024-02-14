// Defining ClassC
class ClassC {
    // Method that logs a message to the console
    print(): void {
      console.log(`ClassC.print() called.`);
    }
  }
  
  // Creating an instance of ClassC
  let classC = new ClassC();
  
  // Calling the printClass function and passing in the classC instance
  printClass(classC);

function printClass(classC: ClassC) {
    console.log(`${classC}`);
}
  