///
/// ```bash
/// pnpm tsc ./src/types/literal/literal-ex1.ts
/// ```
///
var foo; // literal types do not use '='
foo = 'Bar'; // Error: "Bar" is not assignable to type "Hello"
//const poo: 'Hello'; 
//poo = 'Bar'; //  error TS2588: Cannot assign to 'poo' because it is a constant.
