///
/// ```bash
/// pnpm tsc ./src/collection/array/squarebracket/array-bracket-ex1.ts
/// ```
///
//TypeScript supports readonly arrays using the following syntax:
var xx = ['a', 'b']; // Readonly modifier
var jj = ['a', 1, 'b', 2];
xx.push('x'); // Valid
jj.push('x'); // Valid
//TypeScript supports tuple and readonly tuple:
var xxx = ['a', 1];
var yyy = ['a', 1];
