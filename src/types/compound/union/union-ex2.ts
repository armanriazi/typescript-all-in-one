///
/// ```bash
/// pnpm tsc ./src/types/compound/union/union-ex2.ts
/// ```
///
type A = { type: 'type_a'; value: number };
type B = { type: 'type_b'; value: string };

const x = (input: A | B): string | number => {
    switch (input.type) {
        case 'type_a':
            return input.value + 100; // type is A
        case 'type_b':
            return input.value + 'extra'; // type is B
    }
};

const i: B = { type: 'type_b', value: 'Hello'};;
console.log(`${x(i)}`);