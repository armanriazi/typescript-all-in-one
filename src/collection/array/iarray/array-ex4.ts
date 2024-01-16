///
/// ```bash
/// pnpm tsc ./src/collection/array/array-ex4.ts
/// ```
///
type K = {
    [name: string | number]: string;
};
const k: K = { x: 'x', 1: 'b' };
console.log(`${k['x']}, ${k[1]}, ${k['1']}`); 
