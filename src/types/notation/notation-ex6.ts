///
/// ```bash
/// pnpm tsc src/types/notation/notation-ex1.ts --outfile  ./dist/notation-ex1.js
/// ```
///
interface IIdName {
    id: number;
    name: string;
  }
  
  interface IDescrValue {
    descr: string;
    value: number;
  }
  
  // Define the printNameOrValue function which takes an object
  // that implements either the IIdName or IDescrValue interface
  function printNameOrValue(obj: IIdName | IDescrValue): void {
    // Use the 'in' operator to check if the object has an 'id' property
    if ('id' in obj) {
      console.log(`obj.name : ${obj.name}`);
    }
    // Use the 'in' operator to check if the object has a 'descr' property
    if ('descr' in obj) {
      console.log(`obj.value : ${obj.value}`);
    }
  }
  