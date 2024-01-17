///
/// ```bash
/// pnpm tsc ./src/types/compound/narrowing/predicate/predicate-ex1.ts
/// ```
///
var isString = function (value) { return typeof value === 'string'; };
var foo = function (bar) {
    if (isString(bar)) {
        console.log(bar.toUpperCase());
    }
    else {
        console.log('not a string');
    }
};
console.log("".concat(foo('arman')));
