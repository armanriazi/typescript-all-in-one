///
/// ```bash
/// pnpm tsc ./src/types/tuple/tuple-ex4.ts
/// ```
///
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function concat(arr1, arr2) {
    return __spreadArray(__spreadArray([], arr1, true), arr2, true);
}
console.log("".concat(concat([1, 2, 3], ['4', '5', '6']))); // [1, 2, 3, "4", "5", "6"]
