///
/// ```bash
/// pnpm tsc ./src/types/primitive/empty/any/any-ex2.ts
/// ```
///
// Declare a variable of type any with a string value
let a: any = "test";

// Declare a variable of type number with a number value
let aNumber: number = 2;

// Attempt to assign a value of type any to a variable of type number
aNumber = a;


console.log(`${aNumber}`);