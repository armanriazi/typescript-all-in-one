# `strictNullChecks`

By default `null` and `undefined` are assignable to all types in TypeScript e.g.

```ts
let foo: number = 123;
foo = null; // Okay
foo = undefined; // Okay
```

This is modelled after how a lot of people write JavaScript. However, like all things, TypeScript allows you to be *explicit* about what *can and cannot be* assigned a `null` or `undefined`.

In strict null checking mode, `null` and `undefined` are different:

```ts
let foo = undefined;
foo = null; // NOT Okay
```

Let's say we have a `Member` interface:

```ts
interface Member {
  name: string,
  age?: number
}
```

Not every `Member` will provide their age, so `age` is an optional property, meaning the value of `age` may or may not be `undefined`.

`undefined` is the root of all evil. It often leads to runtime errors. It is easy to write code that will throw `Error` at runtime:

```ts
getMember()
  .then(member: Member => {
    const stringifyAge = member.age.toString() // Cannot read property 'toString' of undefined
  })
```

But in strict null checking mode, this error will be caught at compile time:

```ts
getMember()
  .then(member: Member => {
    const stringifyAge = member.age.toString() // Object is possibly 'undefined'
  })
```

## Non-Null Assertion Operator

`definite assignment`

A new `!` post-fix expression operator may be used to assert that its operand is **non-null and non-undefined** in contexts where the type checker is unable to conclude that fact. For example:

```ts
// Compiled with --strictNullChecks
function validateEntity(e?: Entity) {
    // Throw exception if e is null or invalid entity
}

function processEntity(e?: Entity) {
    validateEntity(e);
    let a = e.name;  // TS ERROR: e may be null.
    let b = e!.name;  // OKAY. We are asserting that e is non-null.
}
```

> Note that it is just an assertion, and just like type assertions **you are responsible*** for making sure the value is not null. A non-null assertion is essentially you telling the compiler "I know it's not null so let me use it as though it's not null".

`Next Example`

We have placed an exclamation mark (!) after the use of the globalString variable on line 8, which has now become globalString!. This will tell the compiler that we are overriding its type-checking rules and are willing to let it use the globalString variable even though it thinks it has not been assigned.

```ts
// Declare a variable named "globalString" with the type of "string"
var globalString: string;

// Call the function "setGlobalString" and pass in the argument "this string is set"
setGlobalString("this string is set");

// Log the current value of the "globalString" variable to the console, using the definite assignment assertion syntax to indicate that the variable has been assigned a value before this point.
console.log(`globalString = ${globalString!}`); // added ! to globalString without ! will expose `error TS2454: Variable 'globalString' is used before being assigned.`

// Define a function named "setGlobalString" that takes in a parameter named "value" with the type "string"
function setGlobalString(value: string) {
  // Assign the value of the "value" parameter to the "globalString" variable
  globalString = value;
}
```

### Definite Assignment Assertion Operator

TypeScript will also complain about properties in classes not being initialized e.g.:

```ts
class C {
  foo: number; // OKAY as assigned in constructor
  bar: string = "hello"; // OKAY as has property initializer
  baz: boolean; // TS ERROR: Property 'baz' has no initializer and is not assigned directly in the constructor.
  constructor() {
    this.foo = 42;
  }
}
```

You can use the definite assignment assertion postfixed to the property name to tell TypeScript that you are initializing it somewhere other than the constructor e.g.

```ts
class C {
  foo!: number;
  // ^
  // Notice this exclamation point!
  // This is the "definite assignment assertion" modifier.
  
  constructor() {
    this.initialize();
  }
  initialize() {
    this.foo = 0;
  }
}
```

You can also use this assertion with simple variable declarations e.g.:

```ts
let a: number[]; // No assertion
let b!: number[]; // Assert

initialize();

a.push(4); // TS ERROR: variable used before assignment
b.push(4); // OKAY: because of the assertion

function initialize() {
  a = [0, 1, 2, 3];
  b = [0, 1, 2, 3];
}
```

> Like all assertions, you are telling the compiler to trust you. The compiler will not complain even if the code doesn't actually always assign the property.
