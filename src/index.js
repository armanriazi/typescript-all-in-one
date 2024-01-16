///
/// ```bash
/// pnpm tsc ./src/index.ts
/// ```
///
// export { Foo } from './foo';. Exporting from this file makes it available for consumption when someone does import //{ /* Here */ //} from 'example';
var version = "ES6";
/*
const result = '1' + 1; // Result is of type string
console.log(result)
*/
if (123 && true) { // Will be treated like `true`
    console.log("Hello ".concat(version, " TypeScript"));
}
var x = 'x'; // TypeScript infers as string, a wide type
var y = 'y'; // y types is a union of literal types
y = x; // Invalid Type 'string' is not assignable to type '"x" | "y"'.
