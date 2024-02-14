///
/// ```bash
/// pnpm tsc src/types/notation/notation-ex1.ts --outfile  ./dist/notation-ex1.js
/// ```
///
/// Actually, double exclamation !! is not an operator. It’s just the char! repeated twice. A useful notation to make code more readable. Because we could also write Boolean(value) with the same effect.
!!false === false
!!true === true
Boolean(false) === false // they really equals to each other
Boolean(true) === true


