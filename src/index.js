///
/// ```bash
/// pnpm tsc ./src/index.ts
/// ```
///
/**
 - [x] Computes the power of a given number
 - [x] @constructor
 - [x] @param {number} base – The base value of the expression
 - [x] @param {number} exponent – The exponent value of the expression
 */
/*
function power(base: number, exponent: number) {
   return Math.pow(base, exponent);
}
*/
// export { Foo } from './foo';. Exporting from this file makes it available for consumption when someone does import //{ /* Here */ //} from 'example';
var version = "ES6";
/*
const result = '1' + 1; // Result is of type string
console.log(result)
*/
if (123 && true) { // Will be treated like `true`
    console.log("Hello ".concat(version, " TypeScript"));
}
var x = 1;
var y = "Good";
console.log("".concat(x, ",").concat(y));
var Foo = /** @class */ (function () {
    function Foo() {
    }
    return Foo;
}());
;
var someVar = Foo;
var someOtherVar = 123;
