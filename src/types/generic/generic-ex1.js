///
/// ```bash
/// pnpm tsc ./src/types/generic/generic-ex1.ts
/// ```
///
function identity(arg) {
    return arg;
}
var a = identity('x');
var b = identity(123);
var getLen = function (data) { return data.length; };
var len = getLen([1, 2.11, 3]);
console.log("".concat(len));
