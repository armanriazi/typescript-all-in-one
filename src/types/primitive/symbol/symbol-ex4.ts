///
/// ```bash
/// pnpm tsc ./src/types/primitive/symbol/symbol-ex4.ts
/// pnpm ts-node ./src/types/primitive/symbol/symbol-ex4.ts
/// ```
///

/*Symbol.dispose ??= Symbol('Symbol.dispose'); // Simple polify*/

const doWork = (): Disposable => {
    return {
        [Symbol.dispose]: () => {
            console.log('disposed');
        },
    };
};

console.log(1);

{
    using work = doWork(); // Resource is declared, value is recorded and subsequently executed upon exiting the enclosing block scope.
    console.log(2);
} // Resource is disposed (e.g., `work[Symbol.dispose]()` is evaluated)

console.log(3);

using work = doWork();

console.log(4);
console.log(5);