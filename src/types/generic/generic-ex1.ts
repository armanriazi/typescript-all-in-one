///
/// ```bash
/// pnpm tsc ./src/types/generic/generic-ex1.ts
/// ```
///

function identity<T>(arg: T): T {
    return arg;
}
const a = identity('x');
const b = identity(123);

const getLen = <T,>(data: ReadonlyArray<T>) => data.length;
const len = getLen([1, 2.11, 3]);
console.log(`${len}`);