
///
/// ```bash
/// pnpm tsc ./src/types/recursive/recursive-ex3.ts
/// ```
///

type CheckNumber<T> = T extends number ? 'Number' : 'Not a number';
type A = CheckNumber<123>; // 'Number'
type B = CheckNumber<'abc'>; // 'Not a number'

const myNumber = 42;
type IsMyNumberAnArray = CheckNumber<typeof myNumber>; // Type false

//console.log(`${A},${B},${IsMyNumberAnArray}`);