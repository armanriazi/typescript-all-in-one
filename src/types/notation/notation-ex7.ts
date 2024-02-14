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
  
  function printNameOrValue(obj: IIdName | IDescrValue): void {
    if ("id" in obj) {
      console.log(`obj.name : ${obj.name}`);
    }
    if ("descr" in obj) {
      console.log(`obj.value : ${obj.value}`);
    }
  }
  
  // Calling the printNameOrValue function with two objects with different properties
  printNameOrValue({
    id: 1,
    name: "nameValue",
  });
  printNameOrValue({
    descr: "description",
    value: 2,
  });
  