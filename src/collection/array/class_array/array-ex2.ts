///
/// ```bash
/// pnpm tsc workspace/collection/array/array-ex2.ts
/// ```
///

//TypeScript supports readonly arrays using the following syntax:

const x: readonly string[] = ['a', 'b']; // Readonly modifier
const y: ReadonlyArray<string> = ['a', 'b'];
const j: ReadonlyArray<string | number> = ['a', 1, 'b', 2];
//j.push('x'); // Invalid

