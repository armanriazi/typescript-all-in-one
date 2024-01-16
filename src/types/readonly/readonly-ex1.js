///
/// ```bash
/// pnpm tsc ./src/types/readonly/readonly-ex1.ts
/// ```
///
function foo(config) {
    console.log("".concat(config.bar, ", ").concat(config.bas));
}
var config = { bar: 123, bas: 123 };
foo(config);
