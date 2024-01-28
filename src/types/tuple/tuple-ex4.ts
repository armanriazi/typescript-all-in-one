///
/// ```bash
/// pnpm ts-node ./src/types/tuple/tuple-ex4.ts
/// ```
///

type Items = readonly unknown[];
function concat<T extends Items, U extends Items>(
    arr1: T,
    arr2: U
): [...T, ...U] {
    return [...arr1, ...arr2];
}
console.log(`${concat([1, 2, 3], ['4', '5', '6'])}`); // [1, 2, 3, "4", "5", "6"]