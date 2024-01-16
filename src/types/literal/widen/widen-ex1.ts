///
/// ```bash
/// pnpm tsc ./src/types/literal/widen/widen-ex1.ts
/// ```
///

/// `>tags:` #Error_TS2322 #Error_Assignable
/*
let x = 'x'; // TypeScript infers as string, a [wide type]
let y: 'y' | 'x' = 'y'; // y types is a union of literal types
y = x; // Invalid Type 'string' is not assignable to type '"x" | "y"'.
*/


const x = 'xz'; // TypeScript infers the type of x as 'x', a [narrower type]
let y: 'yz' | 'xz' = 'yz';
y = x; // Valid: The type of x is inferred as 'x'
console.log(`${y}`);

/*
let x = "x"; // TypeScript infers as string, a [wide type]
let y: 'y' | 'x' = "y"; // y types is a union of literal types
y = x; // Valid Type 'string' is not assignable to type '"x" | "y"'.
console.log(`${y}`);
*/