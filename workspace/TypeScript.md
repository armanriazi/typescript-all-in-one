# Introduction
TypeScript is a superset of JavaScript. It includes all of the features of JavaScript and adds a few additional features like Generics and Interfaces.

 **JavaScript is an interpreted language**, and as such has benefits but also drawbacks. **Interpreted languages do not have a compilation step** and therefore can’t check that all code written has no minor mistakes in spelling or syntax before it is actually run. *TypeScript is a strongly typed, object-oriented language that uses a compiler to generate JavaScript. The compiler will identify errors within the code base even before it is run in an interpreter.*

 
# TypeScript Features
TypeScript can compile code to any released version of JavaScript since ECMAScript 3 (1999). This means that TypeScript can transpile code from the latest JavaScript features to older versions, a process known as Downleveling. This allows the usage of modern JavaScript while maintaining maximum compatibility with older runtime environments.

It’s important to note that during transpilation to an older version of JavaScript, TypeScript may generate code that could incur a performance overhead compared to native implementations.

Here are some of the modern JavaScript features that can be used in TypeScript:

- [x] ECMAScript modules instead of AMD-style “define” callbacks or CommonJS “require” statements.
- [x] Classes instead of prototypes.
- [x] Variables declaration using “let” or “const” instead of “var”.
- [x] “for-of” loop or “.forEach” instead of the traditional “for” loop.
- [x] Arrow functions instead of function expressions.
- [x] Destructuring assignment.
- [x] Shorthand property/method names and computed property names.
- [x] Default function parameters.

By leveraging these modern JavaScript features, developers can write more expressive and concise code in TypeScript.
 
When we run a TypeScript file, the TypeScript compiler is responsible for transpiling it into a corresponding JavaScript file. This process is known as transpiling, allowing us to run our TypeScript code in environments that only support JavaScript, such as a web browser or a Node server.

 The use of the **backtick (`)** to delineate strings gives us the ability to inject values directly into the string, as follows:
 
 ```typescript
 var version = `ES6`;
console.log(`Hello ${version} TypeScript`);
 ```

# Why TypeScript
There are two main goals of TypeScript:

- [x] Provide an **optional type system** for JavaScript.
- [x] Provide planned features from **future JavaScript editions** to current JavaScript engines

The desire for these goals is motivated below.

## The TypeScript type system

You might be wondering "**Why add types to JavaScript?**"

Types have proven ability to enhance code quality and understandability. Large teams (Google, Microsoft, Facebook) have continually arrived at this conclusion. Specifically:

- [x] Types increase your agility when doing refactoring. *It's better for the compiler to catch errors than to have things fail at runtime*.
- [x] Types are one of the best forms of documentation you can have. *The function signature is a theorem and the function body is the proof*.

---


### TsDocs JSDoc Reference

When working with a JavaScript code base, it is possible to help TypeScript to infer the right Type by using JSDoc comments with additional annotation to provide type information.

Example:

```typescript
/**
 - [x] Computes the power of a given number
 - [x] @constructor
 - [x] @param {number} base – The base value of the expression
 - [x] @param {number} exponent – The exponent value of the expression
 */
function power(base: number, exponent: number) {
    return Math.pow(base, exponent);
}
power(10, 2); // function power(base: number, exponent: number): number
// console.log(10 ** 2) //eq. 10^2
```

Full documentation is provided to this [link](<https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)

From version 3.7 it is possible to generate .d.ts type definitions from JavaScript JSDoc syntax.
More information can be found [here](https://www.typescriptlang.org/docs/handbook/declaration-files/dts-from-js.html)




### using declaration and Explicit Resource Management

A `using` declaration is a block-scoped, immutable binding, similar to `const`, used for managing disposable resources. When initialized with a value, the `Symbol.dispose` method of that value is recorded and subsequently executed upon exiting the enclosing block scope.

This is based on ECMAScript's Resource Management feature, which is useful for performing essential cleanup tasks after object creation, such as closing connections, deleting files, and releasing memory.

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