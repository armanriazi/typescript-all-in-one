## Primitive Types

TypeScript supports 7 primitive types. A primitive data type refers to a type that is not an object and does not have any methods associated with it. In TypeScript, all primitive types are immutable, meaning their values cannot be changed once they are assigned.

### Symbols

Symbols are a primitive data type that represents an immutable value which is guaranteed to be globally unique throughout the lifetime of the program.

Symbols can be used as keys for object properties and provide a way to create non-enumerable properties.

```typescript
const key1: symbol = Symbol('key1');
const key2: symbol = Symbol('key2');

const obj = {
    [key1]: 'value 1',
    [key2]: 'value 2',
};

console.log(obj[key1]); // value 1
console.log(obj[key2]); // value 2
```

In WeakMaps and WeakSets, symbols are now permissible as keys.

Symbols are unique identifiers that can be used as property keys in objects to prevent naming conflicts.

```typescript
type Obj = {
    [sym: symbol]: number;
};

const a = Symbol('a');
const b = Symbol('b');
let obj: Obj = {};
obj[a] = 123;
obj[b] = 456;

console.log(obj[a]); // 123
console.log(obj[b]); // 456
```

#### Template String Pattern Index Signatures

Template string pattern index signatures allow us to define flexible index signatures using template string patterns. This feature enables us to create objects that can be indexed with specific patterns of string keys, providing more control and specificity when accessing and manipulating properties.

TypeScript from version 4.4 allows index signatures for symbols and template string patterns.

```typescript
const uniqueSymbol = Symbol('description');

type MyKeys = `key-${string}`;

type MyObject = {
    [uniqueSymbol]: string;
    [key: MyKeys]: number;
};

const obj: MyObject = {
    [uniqueSymbol]: 'Unique symbol key',
    'key-a': 123,
    'key-b': 456,
};

console.log(obj[uniqueSymbol]); // Unique symbol key
console.log(obj['key-a']); // 123
console.log(obj['key-b']); // 456
```


#### using declaration and Explicit Resource Management

A `using` declaration is a block-scoped, immutable binding, similar to `const`, used for managing disposable resources. When initialized with a value, the `Symbol.dispose` method of that value is recorded and subsequently executed upon exiting the enclosing block scope.

This is based on ECMAScript's Resource Management feature, which is useful for performing essential cleanup tasks after object creation, such as closing connections, deleting files, and releasing memory.

`>tags:` [[Important]] [[SuppressedError]] [[Disposal]]

Notes:

- [x] Due to its recent introduction in TypeScript version 5.2, most runtimes lack native support. You'll need polyfills for: `Symbol.dispose`, `Symbol.asyncDispose`, `DisposableStack`, `AsyncDisposableStack`, `SuppressedError`.
- [x] Additionally, you will need to configure your tsconfig.json as follows:

```json
{
    "compilerOptions": {
        "target": "es2022",
        "lib": ["es2022", "esnext.disposable", "dom"]
    }
}
```

Example:

`>tags:` [[Important]] [[Error_Dispose]] [[Error]] [[Symbol]] #Polify
<!-- skip -->
```typescript
//@ts-ignore
Symbol.dispose ??= Symbol('Symbol.dispose'); // Simple polify

const doWork = (): Disposable => {
    return {
        [Symbol.dispose]: () => {
            console.log('disposed');
        },
    };
};

console.log(1);

{
    using work = doWork(); // Resource is declared
    console.log(2);
} // Resource is disposed (e.g., `work[Symbol.dispose]()` is evaluated)

console.log(3);
```

The code will log:

```md
1
2
disposed
3
```

A resource eligible for disposal must adhere to the `Disposable` interface:

```typescript
// lib.esnext.disposable.d.ts
interface Disposable {
    [Symbol.dispose](): void;
}
```

The `using` declarations record resource disposal operations in a stack, ensuring they are disposed in reverse order of declaration:

<!-- skip -->
```typescript
{
    using j = getA(),
        y = getB();
    using k = getC();
} // disposes `C`, then `B`, then `A`.
```

Resources are guaranteed to be disposed, even if subsequent code or exceptions occur. This may lead to disposal potentially throwing an exception, possibly suppressing another. To retain information on suppressed errors, a new native exception, `SuppressedError`, is introduced.


#### await using declaration

An `await using` declaration handles an asynchronously disposable resource. The value must have a `Symbol.asyncDispose` method, which will be awaited at the block's end.

<!-- skip -->
```typescript
async function doWorkAsync() {
    await using work = doWorkAsync(); // Resource is declared
} // Resource is disposed (e.g., `await work[Symbol.asyncDispose]()` is evaluated)
```

For an asynchronously disposable resource, it must adhere to either the `Disposable` or `AsyncDisposable` interface:

```typescript
// lib.esnext.disposable.d.ts
interface AsyncDisposable {
    [Symbol.asyncDispose](): Promise<void>;
}
```

<!-- skip -->
```typescript
//@ts-ignore
Symbol.asyncDispose ??= Symbol('Symbol.asyncDispose'); // Simple polify

class DatabaseConnection implements AsyncDisposable {
    // A method that is called when the object is disposed asynchronously
    [Symbol.asyncDispose]() {
        // Close the connection and return a promise
        return this.close();
    }

    async close() {
        console.log('Closing the connection...');
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Connection closed.');
    }
}

async function doWork() {
    // Create a new connection and dispose it asynchronously when it goes out of scope
    await using connection = new DatabaseConnection(); //  Resource is declared
    console.log('Doing some work...');
} // Resource is disposed (e.g., `await connection[Symbol.asyncDispose]()` is evaluated)

doWork();
```

The code logs:

```md
Doing some work...
Closing the connection...
Connection closed.
```

The `using` and `await using` declarations are allowed in Statements: `for`, `for-in`, `for-of`, `for-await-of`, `switch`.

### string

The `string` primitive type stores textual data, and the value is always double or single-quoted.

```typescript
const x: string = 'x';
const y: string = 'y';
```

Strings can span multiple lines if surrounded by the backtick (`) character:

```typescript
let sentence: string = `xxx,yyy`;
```

### boolean

The `boolean` data type in TypeScript stores a binary value, either `true` or `false`.

```typescript
const isReady: boolean = true;
```

### number

A `number` data type in TypeScript is represented with a 64-bit floating point value. A `number` type can represent integers and fractions.
TypeScript also supports hexadecimal, binary, and octal, for instance:

```typescript
const decimal: number = 10;
const hexadecimal: number = 0xa00d; // Hexadecimal starts with 0x
const binary: number = 0b1010; // Binary starts with 0b
const octal: number = 0o633; // Octal starts with 0o
```

### bigInt

A `bigInt` represents numeric values that are very large (253 – 1) and cannot be represented with a `number`.

A `bigInt` can be created by calling the built-in function `BigInt()` or by adding `n` to the end of any integer numeric literal:

```typescript
const x: bigint = BigInt(9007199254740991);
const y: bigint = 9007199254740991n;
```

Notes:

- [x] `bigInt` values cannot be mixed with `number` and cannot be used with built-in `Math`, they must be coerced to the same type.
- [x] `bigInt` values are available only if target configuration is ES2020 or higher.