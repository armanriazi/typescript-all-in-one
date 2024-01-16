///
/// ```bash
/// pnpm tsc ./src/types/literal/widen/widen-ext3.ts
/// ```
///
var v = {
    x: 3,
};
v.x = 4;
console.log("".concat(v.x));
var w = {
    x: 1,
    y: 2,
};
console.log("".concat(w.x));
