
///
/// ```bash
/// pnpm tsc ./src/types/conditional/conditional-ex1.ts
/// ```
///
// related to ../recursive/recursive-ex3

type IsArray<T> = T extends any[] ? true : false;
const myArray = [1, 2, 3];
const myNumber = 42;
type IsMyArrayAnArray = IsArray<typeof myArray>; // Type true
type IsMyNumberAnArray = IsArray<typeof myNumber>; // Type false