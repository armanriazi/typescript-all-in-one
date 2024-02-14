// Define an interface named IA that has one property 'a' of type number.
interface IA {
    a: number;
   }
   
   // Define an interface named IAb that has two properties 'a' of type number and 'b' of type string.
   interface IAb {
    a: number;
    b: string;
   }
   
   // Define an interface named IAbc that has three properties 'a' of type number, 'b' of type string, and 'c' of type boolean.
   interface IAbc {
    a: number;
    b: string;
    c: boolean;
   }

// Define a conditional type called `abc_ab_a` that takes a type parameter `T`.
type abc_ab_a<T> = 
T extends IAbc ? [number, string, boolean] : 
T extends IAb  ? [number, string] : 
T extends IA   ? [number] : 
never;
// Define a function getTupleStringAbc that takes a type parameter T.
function getTupleStringAbc<T>(tupleValue: abc_ab_a<T>): string {
    // Destructure the tuple into an array.
    let [...tupleDestructured] = tupleValue;
    let returnString = "|";
    // Concatenate each value in the array into a string.
    for (let value of tupleDestructured) {
      returnString += `${value}|`;
    }
    return returnString;
  }
  
  // Call getTupleStringAbc with different interface types to demonstrate its behavior.
  let keyA = getTupleStringAbc<IA>([1]);
  console.log(`keyA = ${keyA}`);
  let keyAb = getTupleStringAbc<IAb>([1, "test"]);
  console.log(`keyAb = ${keyAb}`);
  let keyAbc = getTupleStringAbc<IAbc>([1, "test", true]);
  console.log(`keyAbc = ${keyAbc}`);
  