///
/// ```bash
/// pnpm tsc ./src/types/compound/enum/enum-ex1.ts
/// ```
///
enum X {
    A,
    B,
}
enum Y {
    A,
    B,
    C,
}
const xa: number = X.A; // Valid
const ya: Y = 0; // Valid
console.log(`${ya}`); // Valid
//console.log(`${ya.A}`); //Invalid
//X.A === Y.A; // Invalid
