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



#### Getter and Setter Decorators

Getter and setter decorators allow you to change or enhance the behavior of class accessors. They are useful, for instance, for validating property assignments. Here's a simple example for a getter decorator:

```typescript
function range<This, Return extends number>(min: number, max: number) {
    return function (
        target: (this: This) => Return,
        context: ClassGetterDecoratorContext<This, Return>
    ) {
        return function (this: This): Return {
            const value = target.call(this);
            if (value < min || value > max) {
                throw 'Invalid';
            }
            Object.defineProperty(this, context.name, {
                value,
                enumerable: true,
            });
            return value;
        };
    };
}

class MyClass {
    private _value = 0;

    constructor(value: number) {
        this._value = value;
    }
    @range(1, 100)
    get getValue(): number {
        return this._value;
    }
}

const obj = new MyClass(10);
console.log(obj.getValue); // Valid: 10

const obj2 = new MyClass(999);
console.log(obj2.getValue); // Throw: Invalid!
```

#### Decorator Metadata

Decorator Metadata simplifies the process for decorators to apply and utilize metadata in any class. They can access a new metadata property on the context object, which can serve as a key for both primitives and objects.
Metadata information can be accessed on the class via `Symbol.metadata`.

Metadata can be used for various purposes, such as debugging, serialization, or dependency injection with decorators.

```typescript
//@ts-ignore
Symbol.metadata ??= Symbol('Symbol.metadata'); // Simple polify

type Context =
    | ClassFieldDecoratorContext
    | ClassAccessorDecoratorContext
    | ClassMethodDecoratorContext; // Context contains property metadata: DecoratorMetadata

function setMetadata(_target: any, context: Context) {
    // Set the metadata object with a primitive value
    context.metadata[context.name] = true;
}

class MyClass {
    @setMetadata
    a = 123;

    @setMetadata
    accessor b = 'b';

    @setMetadata
    fn() {}
}

const metadata = MyClass[Symbol.metadata]; // Get metadata information

console.log(JSON.stringify(metadata)); // {"bar":true,"baz":true,"foo":true}
```

### Inheritance


TypeScript does not support multiple inheritance in the traditional sense and instead allows inheritance from a single base class.
TypeScript supports multiple interfaces. An interface can define a contract for the structure of an object, and a class can implement multiple interfaces. This allows a class to inherit behavior and structure from multiple sources.

```typescript
interface Flyable {
    fly(): void;
}

interface Swimmable {
    swim(): void;
}

class FlyingFish implements Flyable, Swimmable {
    fly() {
        console.log('Flying...');
    }

    swim() {
        console.log('Swimming...');
    }
}

const flyingFish = new FlyingFish();
flyingFish.fly();
flyingFish.swim();
```

The `class` keyword in TypeScript, similar to JavaScript, is often referred to as syntactic sugar. It was introduced in ECMAScript 2015 (ES6) to offer a more familiar syntax for creating and working with objects in a class-based manner. However, it's important to note that TypeScript, being a superset of JavaScript, ultimately compiles down to JavaScript, which remains prototype-based at its core.

### Statics

TypeScript has static members. To access the static members of a class, you can use the class name followed by a dot, without the need to create an object.

```typescript
class OfficeWorker {
    static memberCount: number = 0;

    constructor(private name: string) {
        OfficeWorker.memberCount++;
    }
}

const w1 = new OfficeWorker('James');
const w2 = new OfficeWorker('Simon');
const total = OfficeWorker.memberCount;
console.log(total); // 2
```

### Property initialization

There are several ways how you can initialize properties for a class in TypeScript:

Inline:

In the following example these initial values will be used when an instance of the class is created.

```typescript
class MyClass {
    property1: string = 'default value';
    property2: number = 42;
}
```

In the constructor:

```typescript
class MyClass {
    property1: string;
    property2: number;

    constructor() {
        this.property1 = 'default value';
        this.property2 = 42;
    }
}
```

Using constructor parameters:

```typescript
class MyClass {
    constructor(
        private property1: string = 'default value',
        public property2: number = 42
    ) {
        // There is no need to assign the values to the properties explicitly.
    }
    log() {
        console.log(this.property2);
    }
}
const x = new MyClass();
x.log();
```

### Method overloading

Method overloading allows a class to have multiple methods with the same name but different parameter types or a different number of parameters. This allows us to call a method in different ways based on the arguments passed.

```typescript
class MyClass {
    add(a: number, b: number): number; // Overload signature 1
    add(a: string, b: string): string; // Overload signature 2

    add(a: number | string, b: number | string): number | string {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        }
        if (typeof a === 'string' && typeof b === 'string') {
            return a.concat(b);
        }
        throw new Error('Invalid arguments');
    }
}

const r = new MyClass();
console.log(r.add(10, 5)); // Logs 15
```

## Generics

Generics allow you to create reusable components and functions that can work with multiple types. With generics, you can parameterize types, functions, and interfaces, allowing them to operate on different types without explicitly specifying them beforehand.

Generics allow you to make code more flexible and reusable.

### Generic Type

To define a generic type, you use angle brackets (`<>`) to specify the type parameters, for instance:

```typescript
function identity<T>(arg: T): T {
    return arg;
}
const a = identity('x');
const b = identity(123);

const getLen = <T,>(data: ReadonlyArray<T>) => data.length;
const len = getLen([1, 2, 3]);
```

### Generic Classes

Generics can be applied also to classes, in this way they can work with multiple types by using type parameters. This is useful to create reusable class definitions that can operate on different data types while maintaining type safety.

```typescript
class Container<T> {
    private item: T;

    constructor(item: T) {
        this.item = item;
    }

    getItem(): T {
        return this.item;
    }
}

const numberContainer = new Container<number>(123);
console.log(numberContainer.getItem()); // 123

const stringContainer = new Container<string>('hello');
console.log(stringContainer.getItem()); // hello
```

### Generic Constraints

Generic parameters can be constrained using the `extends` keyword followed by a type or interface that the type parameter must satisfy.

In the following example T it is must containing a properly `length` in order to be valid:

<!-- skip -->
```typescript
const printLen = <T extends { length: number }>(value: T): void => {
    console.log(value.length);
};

printLen('Hello'); // 5
printLen([1, 2, 3]); // 3
printLen({ length: 10 }); // 10
printLen(123); // Invalid
```

An interesting feature of generic introduced in version 3.4 RC is Higher order function type inference which introduced  propagated generic type arguments:

```typescript
declare function pipe<A extends any[], B, C>(
    ab: (...args: A) => B,
    bc: (b: B) => C
): (...args: A) => C;

declare function list<T>(a: T): T[];
declare function box<V>(x: V): { value: V };

const listBox = pipe(list, box); // <T>(a: T) => { value: T[] }
const boxList = pipe(box, list); // <V>(x: V) => { value: V }[]
```

This functionality allows more easily typed safe pointfree style programming which is common in functional programming.

### Generic contextual narrowing

Contextual narrowing for generics is the mechanism in TypeScript that allows the compiler to narrow down the type of a generic parameter based on the context in which it is used, it is useful when working with generic types in conditional statements:

```typescript
function process<T>(value: T): void {
    if (typeof value === 'string') {
        // Value is narrowed down to type 'string'
        console.log(value.length);
    } else if (typeof value === 'number') {
        // Value is narrowed down to type 'number'
        console.log(value.toFixed(2));
    }
}

process('hello'); // 5
process(3.14159); // 3.14
```

## Erased Structural Types

In TypeScript, objects do not have to match a specific, exact type. For instance, if we create an object that fulfills an interface's requirements, we can utilize that object in places where that interface is required, even if there was no explicit connection between them.
Example:

```typescript
type NameProp1 = {
    prop1: string;
};

function log(x: NameProp1) {
    console.log(x.prop1);
}

const obj = {
    prop2: 123,
    prop1: 'Origin',
};

log(obj); // Valid
```

## Namespacing

In TypeScript, namespaces are used to organize code into logical containers, preventing naming collisions and providing a way to group related code together.
The usage of the `export` keywords allows access to the namespace in "outside" modules.

```typescript
export namespace MyNamespace {
    export interface MyInterface1 {
        prop1: boolean;
    }
    export interface MyInterface2 {
        prop2: string;
    }
}

const a: MyNamespace.MyInterface1 = {
    prop1: true,
};
```

## Symbols

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

## Triple-Slash Directives

Triple-slash directives are special comments that provide instructions to the compiler about how to process a file. These directives begin with three consecutive slashes (`///`) and are typically placed at the top of a TypeScript file and have no effects on the runtime behavior.

Triple-slash directives are used to reference external dependencies, specify module loading behavior, enable/disable certain compiler features, and more. Few examples:

Referencing a declaration file:

<!-- skip -->
```typescript
/// <reference path="path/to/declaration/file.d.ts" />
```

Indicate the module format:

<!-- skip -->
```typescript
/// <amd|commonjs|system|umd|es6|es2015|none>
```

Enable compiler options, in the following example strict mode:

<!-- skip -->
```typescript
/// <strict|noImplicitAny|noUnusedLocals|noUnusedParameters>
```

## Type Manipulation

### Creating Types from Types

Is it possible to create new types composing, manipulating or transforming existing types.

Intersection Types (`&`):

Allow you to combine multiple types into a single  type:

```typescript
type A = { foo: number };
type B = { bar: string };
type C = A & B; // Intersection of A and B
const obj: C = { foo: 42, bar: 'hello' };
```

Union Types (`|`):

Allow you to define a type that can be one of several types:

```typescript
type Result = string | number;
const value1: Result = 'hello';
const value2: Result = 42;
```

Mapped Types:

Allow you to transform the properties of an existing type to create new type:

```typescript
type Mutable<T> = {
    readonly [P in keyof T]: T[P];
};
type Person = {
    name: string;
    age: number;
};
type ImmutablePerson = Mutable<Person>; // Properties become read-only
```

Conditional types:

Allow you to create types based on some conditions:

```typescript
type ExtractParam<T> = T extends (param: infer P) => any ? P : never;
type MyFunction = (name: string) => number;
type ParamType = ExtractParam<MyFunction>; // string
```

### Indexed Access Types

In TypeScript is it possible to access and manipulate  the types of properties within another type using an index, `Type[Key]`.

```typescript
type Person = {
    name: string;
    age: number;
};

type AgeType = Person['age']; // number
```

```typescript
type MyTuple = [string, number, boolean];
type MyType = MyTuple[2]; // boolean
```

### Utility Types

Several built-in utility types can be used to manipulate types, below a list of the most common used:

#### Awaited\<T\>

Constructs a type recursively unwrap Promises.

```typescript
type A = Awaited<Promise<string>>; // string
```

#### Partial\<T\>

Constructs a type with all properties of T set to optional.

```typescript
type Person = {
    name: string;
    age: number;
};

type A = Partial<Person>; // { name?: string | undefined; age?: number | undefined; }
```

#### Required\<T\>

Constructs a type with all properties of T set to required.

```typescript
type Person = {
    name?: string;
    age?: number;
};

type A = Required<Person>; // { name: string; age: number; }
```

#### Readonly\<T\>

Constructs a type with all properties of T set to readonly.

<!-- skip -->
```typescript
type Person = {
    name: string;
    age: number;
};

type A = Readonly<Person>;

const a: A = { name: 'Simon', age: 17 };
a.name = 'John'; // Invalid
```

#### Record\<K, T\>

Constructs a type with a set of properties K of type T.

```typescript
type Product = {
    name: string;
    price: number;
};

const products: Record<string, Product> = {
    apple: { name: 'Apple', price: 0.5 },
    banana: { name: 'Banana', price: 0.25 },
};

console.log(products.apple); // { name: 'Apple', price: 0.5 }
```

#### Pick\<T, K\>

Constructs a type by picking the specified properties K from T.

```typescript
type Product = {
    name: string;
    price: number;
};

type Price = Pick<Product, 'price'>; // { price: number; }
```

#### Omit\<T, K\>

Constructs a type by omitting the specified properties K from T.

```typescript
type Product = {
    name: string;
    price: number;
};

type Name = Omit<Product, 'price'>; // { name: string; }
```

#### Exclude\<T, U\>

Constructs a type by excluding all values of type U from T.

```typescript
type Union = 'a' | 'b' | 'c';
type MyType = Exclude<Union, 'a' | 'c'>; // b
```

#### Extract\<T, U\>

Constructs a type by extracting all values of type U from T.

```typescript
type Union = 'a' | 'b' | 'c';
type MyType = Extract<Union, 'a' | 'c'>; // a | c
```

#### NonNullable\<T\>

Constructs a type by excluding null and undefined from T.

```typescript
type Union = 'a' | null | undefined | 'b';
type MyType = NonNullable<Union>; // 'a' | 'b'
```

#### Parameters\<T\>

Extracts the parameter types of a function type T.

```typescript
type Func = (a: string, b: number) => void;
type MyType = Parameters<Func>; // [a: string, b: number]
```

#### ConstructorParameters\<T\>

Extracts the parameter types of a constructor function type T.

```typescript
class Person {
    constructor(
        public name: string,
        public age: number
    ) {}
}
type PersonConstructorParams = ConstructorParameters<typeof Person>; // [name: string, age: number]
const params: PersonConstructorParams = ['John', 30];
const person = new Person(...params);
console.log(person); // Person { name: 'John', age: 30 }
```

#### ReturnType\<T\>

Extracts the return type of a function type T.

```typescript
type Func = (name: string) => number;
type MyType = ReturnType<Func>; // number
```

#### InstanceType\<T\>

Extracts the instance type of a class type T.

```typescript
class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}!`);
    }
}

type PersonInstance = InstanceType<typeof Person>;

const person: PersonInstance = new Person('John');

person.sayHello(); // Hello, my name is John!
```

#### ThisParameterType\<T\>

Extracts the type of 'this' parameter from a function type T.

```typescript
interface Person {
    name: string;
    greet(this: Person): void;
}
type PersonThisType = ThisParameterType<Person['greet']>; // Person
```

#### OmitThisParameter\<T\>

Removes the 'this' parameter from a function type T.

```typescript
function capitalize(this: String) {
    return this[0].toUpperCase + this.substring(1).toLowerCase();
}

type CapitalizeType = OmitThisParameter<typeof capitalize>; // () => string
```

#### ThisType\<T\>

Servers as a market for a contextual `this` type.

<!-- skip -->
```typescript
type Logger = {
    log: (error: string) => void;
};

let helperFunctions: { [name: string]: Function } & ThisType<Logger> = {
    hello: function () {
        this.log('some error'); // Valid as "log" is a part of "this".
        this.update(); // Invalid
    },
};
```

#### Uppercase\<T\>

Make uppercase the name of the input type T.

```typescript
type MyType = Uppercase<'abc'>; // "ABC"
```

#### Lowercase\<T\>

Make lowercase the name of the input type T.

```typescript
type MyType = Lowercase<'ABC'>; // "abc"
```

#### Capitalize\<T\>

Capitalize the name of the input type T.

```typescript
type MyType = Capitalize<'abc'>; // "Abc"
```

#### Uncapitalize\<T\>

Uncapitalize the name of the input type T.

```typescript
type MyType = Uncapitalize<'Abc'>; // "abc"
```

## Others

### Errors and Exception Handling

TypeScript allows you to catch and handle errors using standard JavaScript error handling mechanisms:

Try-Catch-Finally Blocks:

```typescript
try {
    // Code that might throw an error
} catch (error) {
    // Handle the error
} finally {
    // Code that always executes, finally is optional
}
```

You can also handle different types of error:

```typescript
try {
    // Code that might throw different types of errors
} catch (error) {
    if (error instanceof TypeError) {
        // Handle TypeError
    } else if (error instanceof RangeError) {
        // Handle RangeError
    } else {
        // Handle other errors
    }
}
```

Custom Error Types:

It is possible to specify more specific error by extending on the Error `class`:

```typescript
class CustomError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'CustomError';
    }
}

throw new CustomError('This is a custom error.');
```

### Mixin classes

Mixin classes allow you to combine and compose behavior from multiple classes into a single class. They provide a way to reuse and extend functionality without the need for deep inheritance chains.

```typescript
abstract class Identifiable {
    name: string = '';
    logId() {
        console.log('id:', this.name);
    }
}
abstract class Selectable {
    selected: boolean = false;
    select() {
        this.selected = true;
        console.log('Select');
    }
    deselect() {
        this.selected = false;
        console.log('Deselect');
    }
}
class MyClass {
    constructor() {}
}

// Extend MyClass to include the behavior of Identifiable and Selectable
interface MyClass extends Identifiable, Selectable {}

// Function to apply mixins to a class
function applyMixins(source: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            let descriptor = Object.getOwnPropertyDescriptor(
                baseCtor.prototype,
                name
            );
            if (descriptor) {
                Object.defineProperty(source.prototype, name, descriptor);
            }
        });
    });
}

// Apply the mixins to MyClass
applyMixins(MyClass, [Identifiable, Selectable]);
let o = new MyClass();
o.name = 'abc';
o.logId();
o.select();
```

### Asynchronous Language Features

As TypeScript is a superset of JavaScript, it has built-in asynchronous language features of JavaScript as:

Promises:

Promises are a way to handle asynchronous operations and their results using methods like `.then()` and `.catch()` to handle success and error conditions.

To learn more: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise>

Async/await:

Async/await keywords are a way to provide a more synchronous-looking syntax for working with Promises. The `async` keyword is used to define an asynchronous function, and the `await` keyword is used within an async function to pause execution until a Promise is resolved or rejected.

To learn more:
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function>
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await>

The following API are well supported in TypeScript:

Fetch API:
<https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API>

Web Workers:
<https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API>

Shared Workers:
<https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker>

WebSocket:
<https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API>

### Iterators and Generators

Both Interators and Generators are well supported in TypeScript.

Iterators are objects that implement the iterator protocol, providing a way to access elements of a collection or sequence one by one. It is a structure that contains a pointer to the next element in the iteration. They have a `next()` method that returns the next value in the sequence along with a boolean indicating if the sequence is `done`.

```typescript
class NumberIterator implements Iterable<number> {
    private current: number;

    constructor(
        private start: number,
        private end: number
    ) {
        this.current = start;
    }

    public next(): IteratorResult<number> {
        if (this.current <= this.end) {
            const value = this.current;
            this.current++;
            return { value, done: false };
        } else {
            return { value: undefined, done: true };
        }
    }

    [Symbol.iterator](): Iterator<number> {
        return this;
    }
}

const iterator = new NumberIterator(1, 3);

for (const num of iterator) {
    console.log(num);
}
```

Generators are special functions defined using the `function*` syntax that simplifies the creation of iterators. They use the `yield` keyword to define the sequence of values and automatically pause and resume execution when values are requested.

Generators make it easier to create iterators and are especially useful for working with large or infinite sequences.

Example:

```typescript
function- [x] numberGenerator(start: number, end: number): Generator<number> {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

const generator = numberGenerator(1, 5);

for (const num of generator) {
    console.log(num);
}
```

TypeScript also supports async iterators and async Generators.

To learn more:
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator>        <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator>

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
```

Full documentation is provided to this link:
<https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html>

From version 3.7 it is possible to generate .d.ts type definitions from JavaScript JSDoc syntax.
More information can be found here:
<https://www.typescriptlang.org/docs/handbook/declaration-files/dts-from-js.html>

### @types

Packages under the @types organization are special package naming conventions used to provide type definitions for existing JavaScript libraries or modules. For instance using:

```shell
npm install --save-dev @types/lodash
```

Will install the type definitions of `lodash` in your current project.

To contribute to the type definitions of @types package, please submit a pull request to <https://github.com/DefinitelyTyped/DefinitelyTyped>.

### JSX

JSX (JavaScript XML) is an extension to the JavaScript language syntax that allows you to write HTML-like code within your JavaScript or TypeScript files. It is commonly used in React to define the HTML structure.

TypeScript extends the capabilities of JSX by providing type checking and static analysis.

To use JSX you need to set the `jsx` compiler option in your `tsconfig.json` file. Two common configuration options:

- [x] "preserve": emit .jsx files with the JSX unchanged. This option tells TypeScript to keep the JSX syntax as-is and not transform it during the compilation process. You can use this option if you have a separate tool, like Babel, that handles the transformation.
- [x] "react": enables TypeScript's built-in JSX transformation. React.createElement will be used.

All options are available here:
<https://www.typescriptlang.org/tsconfig#jsx>

### ES6 Modules

TypeScript does support ES6 (ECMAScript 2015) and many subsequent versions. This means you can use ES6 syntax, such as arrow functions, template literals, classes, modules, destructuring, and more.

To enable ES6 features in your project, you can specify the `target` property in the tsconfig.json.

A configuration example:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "es6",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist"
  },
  "include": ["src"]
}
```

### ES7 Exponentiation Operator

The exponentiation (`**`) operator computes the value obtained by raising the first operand to the power of the second operand. It functions similarly to `Math.pow()`, but with the added capability of accepting BigInts as operands.
TypeScript fully supports this operator using as `target` in your tsconfig.json file `es2016` or larger version.

```typescript
console.log(2 *- [x] (2 *- [x] 2)); // 16
```

### The for-await-of Statement

This is a JavaScript feature fully supported in TypeScript which allows you to iterate over asynchronous iterable objects from target version es2018.

```typescript
async function- [x] asyncNumbers(): AsyncIterableIterator<number> {
    yield Promise.resolve(1);
    yield Promise.resolve(2);
    yield Promise.resolve(3);
}

(async () => {
    for await (const num of asyncNumbers()) {
        console.log(num);
    }
})();
```

### New.target

You can use in TypeScript the `new.target` meta-property which enables you to determine if a function or constructor was invoked using the new operator. It allows you to detect whether an object was created as a result of a constructor call.

```typescript
class Parent {
    constructor() {
        console.log(new.target); // Logs the constructor function used to create an instance
    }
}

class Child extends Parent {
    constructor() {
        super();
    }
}

const parentX = new Parent(); // [Function: Parent]
const child = new Child(); // [Function: Child]
```

### Dynamic Import Expressions

It is possible to conditionally load modules or lazy load them on-demand using the ECMAScript proposal for dynamic import which is supported in TypeScript.

The syntax for dynamic import expressions in TypeScript is as follows:

<!-- skip -->
```typescript
async function renderWidget() {
    const container = document.getElementById('widget');
    if (container !== null) {
        const widget = await import('./widget'); // Dynamic import
        widget.render(container);
    }
}

renderWidget();
```

### "tsc –watch"

This command starts a TypeScript compiler with `--watch` parameter, with the ability to automatically recompile TypeScript files whenever they are modified.

```shell
tsc --watch
```

Starting from TypeScript version 4.9, file monitoring primarily relies on file system events, automatically resorting to polling if an event-based watcher cannot be established.

### Non-null Assertion Operator (Postfix !)

The Non-null Assertion Operator (Postfix !) also called Definite Assignment Assertions is a TypeScript feature that allows you to assert that a variable or property is not null or undefined, even if TypeScript's static type analysis suggests that it might be. With this feature it is possible to remove any explicit checking.

```typescript
type Person = {
    name: string;
};

const printName = (person?: Person) => {
    console.log(`Name is ${person!.name}`);
};
```

### Defaulted declarations

Defaulted declarations are used when a variable or parameter is assigned a default value. This means that if no value is provided for that variable or parameter, the default value will be used instead.

```typescript
function greet(name: string = 'Anonymous'): void {
    console.log(`Hello, ${name}!`);
}
greet(); // Hello, Anonymous!
greet('John'); // Hello, John!
```

### Optional Chaining

The optional chaining operator `?.` works like the regular dot operator (`.`) for accessing properties or methods. However, it gracefully handles null or undefined values by terminating the expression and returning `undefined`, instead of throwing an error.

```typescript
type Person = {
    name: string;
    age?: number;
    address?: {
        street?: string;
        city?: string;
    };
};

const person: Person = {
    name: 'John',
};

console.log(person.address?.city); // undefined
```

### Nullish coalescing operator (??)

The nullish coalescing operator `??` returns the right-hand side value if the left-hand side is `null` or `undefined`; otherwise, it returns the left-hand side value.

```typescript
const foo = null ?? 'foo';
console.log(foo); // foo

const baz = 1 ?? 'baz';
const baz2 = 0 ?? 'baz';
console.log(baz); // 1
console.log(baz2); // 0
```

### Template Literal Types

Template Literal Types allow to manipulate string value at type level and generate new string types based on existing ones. They are useful to create more expressive and precise types from string-based operations.

```typescript
type Department = 'engineering' | 'hr';
type Language = 'english' | 'spanish';
type Id = `${Department}-${Language}-id`; // "engineering-english-id" | "engineering-spanish-id" | "hr-english-id" | "hr-spanish-id"
```

### Function overloading

Function overloading allows you to define multiple function signatures for the same function name, each with different parameter types and return type.
When you call an overloaded function, TypeScript uses the provided arguments to determine the correct function signature:

```typescript
function makeGreeting(name: string): string;
function makeGreeting(names: string[]): string[];

function makeGreeting(person: unknown): unknown {
    if (typeof person === 'string') {
        return `Hi ${person}!`;
    } else if (Array.isArray(person)) {
        return person.map(name => `Hi, ${name}!`);
    }
    throw new Error('Unable to greet');
}

makeGreeting('Simon');
makeGreeting(['Simone', 'John']);
```

### Recursive Types

A Recursive Type is a type that can refer to itself. This is useful for defining data structures that have a hierarchical or recursive structure (potentially infinite nesting), such as linked lists, trees, and graphs.

```typescript
type ListNode<T> = {
    data: T;
    next: ListNode<T> | undefined;
};
```

### Recursive Conditional Types

It is possible to define complex type relationships using logic and recursion in TypeScript.
Let’s break it down in simple terms:

Conditional Types: allows you to define types based on boolean conditions:

```typescript
type CheckNumber<T> = T extends number ? 'Number' : 'Not a number';
type A = CheckNumber<123>; // 'Number'
type B = CheckNumber<'abc'>; // 'Not a number'
```

Recursion: means a type definition that refers to itself within its own definition:

```typescript
type Json = string | number | boolean | null | Json[] | { [key: string]: Json };

const data: Json = {
    prop1: true,
    prop2: 'prop2',
    prop3: {
        prop4: [],
    },
};
```

Recursive Conditional Types combine both conditional logic and recursion. It means that a type definition can depend on itself through conditional logic, creating complex and flexible type relationships.

```typescript
type Flatten<T> = T extends Array<infer U> ? Flatten<U> : T;

type NestedArray = [1, [2, [3, 4], 5], 6];
type FlattenedArray = Flatten<NestedArray>; // 2 | 3 | 4 | 5 | 1 | 6
```

### ECMAScript Module Support in Node.js

Node.js added support for ECMAScript Modules starting from version 15.3.0, and TypeScript has had ECMAScript Module Support for Node.js since version 4.7. This support can be enabled by using the `module` property with the value `nodenext` in the tsconfig.json file. Here's an example:

```json
{
  "compilerOptions": {
    "module": "nodenext",
    "outDir": "./lib",
    "declaration": true
  }
}
```

Node.js supports two file extensions for modules: `.mjs` for ES modules and `.cjs` for CommonJS modules. The equivalent file extensions in TypeScript are `.mts` for ES modules and `.cts` for CommonJS modules. When the TypeScript compiler transpiles these files to JavaScript, it will create `.mjs` and `.cjs` files.

If you want to use ES modules in your project, you can set the `type` property to "module" in your package.json file. This instructs Node.js to treat the project as an ES module project.

Additionally, TypeScript also supports type declarations in .d.ts files. These declaration files provide type information for libraries or modules written in TypeScript, allowing other developers to utilize them with TypeScript's type checking and auto-completion features.

### Assertion Functions

In TypeScript, assertion functions are functions that indicate the verification of a specific condition based on their return value. In their simplest form, an assert function examines a provided predicate and raises an error when the predicate evaluates to false.

```typescript
function isNumber(value: unknown): asserts value is number {
    if (typeof value !== 'number') {
        throw new Error('Not a number');
    }
}
```

Or can be declared as function expression:

```typescript
type AssertIsNumber = (value: unknown) => asserts value is number;
const isNumber: AssertIsNumber = value => {
    if (typeof value !== 'number') {
        throw new Error('Not a number');
    }
};
```

Assertion functions share similarities with type guards. Type guards were initially introduced to perform runtime checks and ensure the type of a value within a specific scope.
Specifically, a type guard is a function that evaluates a type predicate and returns a boolean value indicating whether the predicate is true or false. This differs slightly from assertion functions,where the intention is to throw an error rather than returning false when the predicate is not satisfied.

Example of type guard:

```typescript
const isNumber = (value: unknown): value is number => typeof value === 'number';
```

### Variadic Tuple Types

Variadic Tuple Types are a features introduces in TypeScript version 4.0, let’s start to learn them by revise what is a tuple:

A tuple type is an array which has a defined length, and were the type of each element is known:

```typescript
type Student = [string, number];
const [name, age]: Student = ['Simone', 20];
```

The term "variadic" means indefinite arity (accept a variable number of arguments).

A variadic tuple is a tuple type which has all the property as before but the exact shape is not defined yet:

```typescript
type Bar<T extends unknown[]> = [boolean, ...T, number];

type A = Bar<[boolean]>; // [boolean, boolean, number]
type B = Bar<['a', 'b']>; // [boolean, 'a', 'b', number]
type C = Bar<[]>; // [boolean, number]
```

In the previous code we can see that the tuple shape is defined by the `T` generic passed in.

Variadic tuples can accept multiple generics make them very flexible:

```typescript
type Bar<T extends unknown[], G extends unknown[]> = [...T, boolean, ...G];

type A = Bar<[number], [string]>; // [number, boolean, string]
type B = Bar<['a', 'b'], [boolean]>; // ["a", "b", boolean, boolean]
```

With the new variadic tuples we can use:

- [x] The spreads in tuple type syntax can now be generic, so we can represent higher-order operation on tuples and arrays even when we do not know the actual types we are operating over.
- [x] The rest elements can occur anywhere in a tuple.

Example:

```typescript
type Items = readonly unknown[];

function concat<T extends Items, U extends Items>(
    arr1: T,
    arr2: U
): [...T, ...U] {
    return [...arr1, ...arr2];
}

concat([1, 2, 3], ['4', '5', '6']); // [1, 2, 3, "4", "5", "6"]
```

### Boxed types

Boxed types refer to the wrapper objects that are used to represent primitive types as objects. These wrapper objects provide additional functionality and methods that are not available directly on the primitive values.

When you access a method like `charAt` or `normalize` on a `string` primitive, JavaScript wraps it in a `String` object, calls the method, and then throws the object away.

Demonstration:

```typescript
const originalNormalize = String.prototype.normalize;
String.prototype.normalize = function () {
    console.log(this, typeof this);
    return originalNormalize.call(this);
};
console.log('\u0041'.normalize());
```

TypeScript represents this differentiation by providing separate types for the primitives and their corresponding object wrappers:

- [x] string => String
- [x] number => Number
- [x] boolean => Boolean
- [x] symbol => Symbol
- [x] bigint => BigInt

The boxed types are usually not needed. Avoid using boxed types and instead use type for the primitives,  for instance `string` instead of `String`.

### Covariance and Contravariance in TypeScript

Covariance and Contravariance are used to describe how relationships work when dealing with inheritance or assignment of types.

Covariance means that a type relationship preserves the direction of inheritance or assignment, so if a type A is a subtype of type B, then an array of type A is also considered a subtype of an array of type B. The important thing to note here is that the subtype relationship is maintained this means that Covariance accept subtype but doesn't accept supertype.

Contravariance means that a type relationship reverses the direction of inheritance or assignment, so if a type A is a subtype of type B, then an array of type B is considered a subtype of an array of type A. The subtype relationship is reversed this means that Contravariance accept supertype but doesn't accept subtype.

Notes: Bivariance means accept both supertype & subtype.

Example: Let's say we have a space for all animals and a separate space just for dogs.

In Covariance, you can put all the dogs in the animals space because dogs are a type of animal. But you cannot put all the animals in the dog space because there might be other animals mixed in.

In Contravariance, you cannot put all the animals in the dogs space because the animals space might contain other animals as well. However, you can put all the dogs in the animal space because all dogs are also animals.

<!-- skip -->
```typescript
// Covariance example
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    breed: string;
    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }
}

let animals: Animal[] = [];
let dogs: Dog[] = [];

// Covariance allows assigning subtype (Dog) array to supertype (Animal) array
animals = dogs;
dogs = animals; // Invalid: Type 'Animal[]' is not assignable to type 'Dog[]'

// Contravariance example
type Feed<in T> = (animal: T) => void;

let feedAnimal: Feed<Animal> = (animal: Animal) => {
    console.log(`Animal name: ${animal.name}`);
};

let feedDog: Feed<Dog> = (dog: Dog) => {
    console.log(`Dog name: ${dog.name}, Breed: ${dog.breed}`);
};

// Contravariance allows assigning supertype (Animal) callback to subtype (Dog) callback
feedDog = feedAnimal;
feedAnimal = feedDog; // Invalid: Type 'Feed<Dog>' is not assignable to type 'Feed<Animal>'.
```

In TypeScript, type relationships for arrays are covariant, while type relationships for function parameters are contravariant. This means that TypeScript exhibits both covariance and contravariance, depending on the context.

#### Optional Variance Annotations for Type Parameters

As of TypeScript 4.7.0, we can use the `out` and `in` keywords to be specific about Variance annotation.

For Covariant, use the `out` keyword:

```typescript
type AnimalCallback<out T> = () => T; // T is Covariant here
```

And for Contravariant, use the `in` keyword:

```typescript
type AnimalCallback<in T> = (value: T) => void; // T is Contravariance here
```

### Template String Pattern Index Signatures

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

### The satisfies Operator

The `satisfies`  allows you to check if a given type satisfies a specific interface or condition. In other words, it ensures that a type has all the required properties and methods of a specific interface. It is a way to ensure a variable fits into a definition of a type
Here is an example:

<!-- skip -->
```typescript
type Columns = 'name' | 'nickName' | 'attributes';

type User = Record<Columns, string | string[] | undefined>;

// Type Annotation using `User`
const user: User = {
    name: 'Simone',
    nickName: undefined,
    attributes: ['dev', 'admin'],
};

// In the following lines, TypeScript won't be able to infer properly
user.attributes?.map(console.log); // Property 'map' does not exist on type 'string | string[]'. Property 'map' does not exist on type 'string'.
user.nickName; // string | string[] | undefined

// Type assertion using `as`
const user2 = {
    name: 'Simon',
    nickName: undefined,
    attributes: ['dev', 'admin'],
} as User;

// Here too, TypeScript won't be able to infer properly
user2.attributes?.map(console.log); // Property 'map' does not exist on type 'string | string[]'. Property 'map' does not exist on type 'string'.
user2.nickName; // string | string[] | undefined

// Using `satisfies` operators we can properly infer the types now
const user3 = {
    name: 'Simon',
    nickName: undefined,
    attributes: ['dev', 'admin'],
} satisfies User;

user3.attributes?.map(console.log); // TypeScript infers correctly: string[]
user3.nickName; // TypeScript infers correctly: undefined
```

### Type-Only Imports and Export

Type-Only Imports and Export allows you to import or export types without importing or exporting the values or functions associated with those types. This can be useful for reducing the size of your bundle.

To use type-only imports, you can use the `import type` keyword.

TypeScript permits using both declaration and implementation file extensions (.ts, .mts, .cts, and .tsx) in type-only imports, regardless of `allowImportingTsExtensions` settings.

For example:

<!-- skip -->
```typescript
import type { House } from './house.ts';
```

The following are supported forms:

<!-- skip -->
```typescript
import type T from './mod';
import type { A, B } from './mod';
import type - [x] as Types from './mod';
export type { T };
export type { T } from './mod';
```

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

```shell
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

```shell
Doing some work...
Closing the connection...
Connection closed.
```

The `using` and `await using` declarations are allowed in Statements: `for`, `for-in`, `for-of`, `for-await-of`, `switch`.