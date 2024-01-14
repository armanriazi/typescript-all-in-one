///
/// ```bash
/// pnpm tsc workspace/collection/array/array-ex2.ts
/// ```
///
//TypeScript supports readonly arrays using the following syntax:
var x = ['a', 'b']; // Readonly modifier
var y = ['a', 'b'];
var j = ['a', 1, 'b', 2];
//j.push('x'); // Invalid
