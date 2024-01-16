///
/// ```bash
/// pnpm tsc ./src/types/literal/widen/widen-ext3.ts
/// ```
///
const v = {
    x: 3 as const,
};
//v.x = 4; //error TS2322: Type '4' is not assignable to type '3'.
v.x = 3; //Valid
console.log(`${v.x}`);


const w = {
    x: 1,
    y: 2,
} as const;
console.log(`${w.x}`);