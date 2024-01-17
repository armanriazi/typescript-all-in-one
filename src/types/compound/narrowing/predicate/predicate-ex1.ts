///
/// ```bash
/// pnpm tsc ./src/types/compound/narrowing/predicate/predicate-ex1.ts
/// ```
///
const isString = (value: unknown): value is string => typeof value === 'string';

const foo = (bar: unknown) => {
    if (isString(bar)) {
        console.log(bar.toUpperCase());
    } else {
        console.log('not a string');
    }
};
console.log(`${isString('arman')}`);
console.log(`${foo('arman')}`);