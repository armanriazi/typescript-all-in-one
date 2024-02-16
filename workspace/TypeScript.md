# Introduction
TypeScript is a superset of JavaScript. It includes all of the features of JavaScript and adds a few additional features like Generics and Interfaces.

 **JavaScript is an interpreted language**, and as such has benefits but also drawbacks. **Interpreted languages do not have a compilation step** and therefore can’t check that all code written has no minor mistakes in spelling or syntax before it is actually run. *TypeScript is a strongly typed, object-oriented language that uses a compiler to generate JavaScript. The compiler will identify errors within the code base even before it is run in an interpreter.*

 slowly start to rename js files into a ts file. The **strict typing** syntax is also known as **syntactic sugar**, which can be sprinkled on top of any JavaScript code as and when we please.
The `class` keyword in TypeScript, similar to JavaScript, is often referred to as syntactic sugar. It was introduced in ECMAScript 2015 (ES6) to offer a more familiar syntax for creating and working with objects in a class-based manner. However, it's important to note that TypeScript, being a superset of JavaScript, ultimately compiles down to JavaScript, which remains prototype-based at its core.
 
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



