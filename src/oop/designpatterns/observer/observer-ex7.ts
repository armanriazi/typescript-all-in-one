import { Observable, map, of } from "rxjs";

// Interface definition for a property 'value' of type number
interface IValue {
    value: number
  }
  
  // Interface definition for an optional property 'id' of type IValue
  interface INestedObj {
    id?: IValue;
  }
  
  // Create an observable 'objEmit' of type INestedObj and initialize it with 3 objects
  const objEmit : Observable<INestedObj> = of(
    { id: { value: 1 } }, // First object with id and value property
    //{}, // Second object with no properties //**Error**
    { id: { value: 2 } } // Third object with id and value property
  );
// This code defines a function that subscribes to an observable and extracts the ID value of an object.

// Define an observable and apply the map operator to extract the ID value of an object.
const returnIdValue = objEmit.pipe(
    map((value: INestedObj) => {
      return value.id!.value;
    })
  );
  
  // Subscribe to the observable and log the extracted ID value to the console.
  returnIdValue.subscribe((value: number) => {
    console.log(`received ${value} `)
  });
    