///
/// ```bash
/// pnpm tsc ./src/types/readonly/readonly-ex1.ts
/// ```
///

function foo(config: {
    readonly bar: number,
    readonly bas: number
}) {
    console.log(`${config.bar}, ${config.bas}`);
}

let config = { bar: 123, bas: 123 };
foo(config);

// Initialization is okay
//let poo: Foo = { bar: 123, bas: 456 };
// Mutation is not
//poo.bar = 456; // Error: Left-hand side of assignment expression cannot be a constant or a read-only property