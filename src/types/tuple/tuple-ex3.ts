type Bar<T extends unknown[], G extends unknown[]> = [...T, boolean, ...G];
type A = Bar<[number], [string]>; // [number, boolean, string]
type B = Bar<['a', 'b'], [boolean]>; // ["a", "b", boolean, boolean]
