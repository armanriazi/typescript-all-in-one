///
/// ```bash
/// pnpm tsc workspace/collection/array/array-ex1.ts
/// ```
///
var x = ['a', 'b'];
var y = ['a', 'b'];
var j = ['a', 1, 'b', 2]; // Union
//TypeScript supports readonly arrays using the following syntax:
var x = ['a', 'b']; // Readonly modifier
var y = ['a', 'b'];
var j = ['a', 1, 'b', 2];
//j.push('x'); // Invalid
//TypeScript supports tuple and readonly tuple:
var x = ['a', 1];
var y = ['a', 1];
