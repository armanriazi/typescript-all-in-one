# Type Guard

We have already seen how [literal types](./literal-types.md.md) help change and narrow down types (particularly in the case of unions). Type guards are just another form of type inference for a variable in a block.


A type guard is an expression that performs a check on our type and then **guarantees that type within its scope**. Let’s rewrite our previous function with a type guard as follows:

```ts
// Declare a function called addWithTypeGuard that takes in two parameters, arg1 and arg2, with types of string or number
function addWithTypeGuard(
  arg1: string | number,
  arg2: string | number
) {
  // Check if arg1 is a string
  if (typeof arg1 === "string") {function addWithTypeGuard(
  arg1: string | number,
  arg2: string | number
) {
  // Check if arg1 is a string
  if (typeof arg1 === "string") {
    // If it is, log that it is a string and return the sum of arg1 and arg2 as a string
    console.log(`arg1 is of type string`);
    return arg1 + arg2;
  }
  // Check if both arg1 and arg2 are numbers
  if (typeof arg1 === "number" && typeof arg2 === "number") {
    // If they are, log that they are numbers and return the sum of arg1 and arg2 as a number
    console.log(`arg1 and arg2 are numbers`);
    return arg1 + arg2;
  }
  // If arg1 and arg2 are not both numbers, log that they are being treated as strings and return their concatenation as a string
  console.log(`default return treat both as strings`)
  return arg1.toString() + arg2.toString();
}

```

`> Output:` Succeeded


* [Type Guard](#type-guard)
* [User Defined Type Guards](#user-defined-type-guards)


Type Guards allow you to narrow down the type of an object within a conditional block. 


### typeof

[[typeof]]
TypeScript is aware of the usage of the JavaScript `instanceof` and `typeof` operators. If you use these in a conditional block, TypeScript will understand the type of the variable to be different within that conditional block. Here is a quick example where TypeScript realizes that a particular function does not exist on `string` and points out what was probably a user typo:

```ts
function doSomething(x: number | string) {
    if (typeof x === 'string') { // Within the block TypeScript knows that `x` must be a string
        console.log(x.subtr(1)); // Error, 'subtr' does not exist on `string`
        console.log(x.substr(1)); // OK
    }
    x.substr(1); // Error: There is no guarantee that `x` is a `string`
}
```

### instanceof

[[instanceof]]
Here is an example with a class and `instanceof`:

```ts
class Foo {
    foo = 123;
    common = '123';
}

class Bar {
    bar = 123;
    common = '123';
}

function doStuff(arg: Foo | Bar) {
    if (arg instanceof Foo) {
        console.log(arg.foo); // OK
        console.log(arg.bar); // Error!
    }
    if (arg instanceof Bar) {
        console.log(arg.foo); // Error!
        console.log(arg.bar); // OK
    }

    console.log(arg.common); // OK
    console.log(arg.foo); // Error!
    console.log(arg.bar); // Error!
}

doStuff(new Foo());
doStuff(new Bar());
```

TypeScript even understands `else` so when an `if` narrows out one type it knows that within the else *it's definitely not that type*. Here is an example:

```ts
class Foo {
    foo = 123;
}

class Bar {
    bar = 123;
}

function doStuff(arg: Foo | Bar) {
    if (arg instanceof Foo) {
        console.log(arg.foo); // OK
        console.log(arg.bar); // Error!
    }
    else {  // MUST BE Bar!
        console.log(arg.foo); // Error!
        console.log(arg.bar); // OK
    }
}

doStuff(new Foo());
doStuff(new Bar());
```

### in 

[[in]]
The `in` operator does a safe check for the existence of a property on an object and can be used as a type guard. E.g. 

```ts
interface A {
  x: number;
}
interface B {
  y: string;
}

function doStuff(q: A | B) {
  if ('x' in q) {
    // q: A
  }
  else {
    // q: B
  }
}
```

## Warnings

### Be careful around parameters

Types do not flow into the function parameters if it cannot be inferred from an assignment. For example in the following case the compiler does not know the type of `foo` so it cannot infer the type of `a` or `b`.

```ts
const foo = (a,b) => { /* do something */ };
```

However, if `foo` was typed the function parameters type can be inferred (`a`,`b` are both inferred to be of type `number` in the example below).

```ts
type TwoNumberFunction = (a: number, b: number) => void;
const foo: TwoNumberFunction = (a, b) => { /* do something */ };
```

### Be careful around return

Although TypeScript can generally infer the return type of a function, it might not be what you expect. For example here function `foo` has a return type of `any`.

```ts
function foo(a: number, b: number) {
    return a + addOne(b);
}
// Some external function in a library someone wrote in JavaScript
function addOne(c) {
    return c + 1;
}
```

This is because the return type is impacted by the poor type definition for `addOne` (`c` is `any` so the return of `addOne` is `any` so the return of `foo` is `any`).

> I find it simplest to always be explicit about function returns. After all, these annotations are a theorem and the function body is the proof.

There are other cases that one can imagine, but the good news is that there is a compiler flag that can help catch such bugs.

## `noImplicitAny`

The flag `noImplicitAny` instructs the compiler to raise an error if it cannot infer the type of a variable (and therefore can only have it as an *implicit* `any` type). You can then

- [x] Either say that *yes I want it to be of type `any`* by *explicitly* adding an `: any` type annotation
- [x] Help the compiler out by adding a few more *correct* annotations.


### User Defined Type JS Guards
In cases where TypeScript is unable to determine a type, it is possible to write a helper function known as a "user-defined type guard." In the following example, we will utilize a Type Predicate to narrow down the type after applying certain filtering:

```typescript
const data = ['a', null, 'c', 'd', null, 'f'];

const r1 = data.filter(x => x != null); // The type is (string | null)[], TypeScript was not able to infer the type properly

const isValid = (item: string | null): item is string => item !== null; // Custom type guard

const r2 = data.filter(isValid); // The type is fine now string[], by using the predicate type guard we were able to narrow the type
```

JavaScript doesn't have very rich runtime introspection support built in. When you are using just plain JavaScript Objects (using structural typing to your advantage), you do not even have access to `instanceof` or `typeof`. For these cases you can create *User Defined Type Guard functions*. These are just functions that return `someArgumentName is SomeType`. Here is an example:

```ts
/**
 * Just some interfaces
 */
interface Foo {
    foo: number;
    common: string;
}

interface Bar {
    bar: number;
    common: string;
}

/**
 * User Defined Type Guard!
 */
function isFoo(arg: any): arg is Foo {
    return arg.foo !== undefined;
}

/**
 * Sample usage of the User Defined Type Guard
 */
function doStuff(arg: Foo | Bar) {
    if (isFoo(arg)) {
        console.log(arg.foo); // OK
        console.log(arg.bar); // Error!
    }
    else {
        console.log(arg.foo); // Error!
        console.log(arg.bar); // OK
    }
}

doStuff({ foo: 123, common: '123' });
doStuff({ bar: 123, common: '123' });
```


### Type Guards and callbacks

TypeScript doesn't assume type guards remain active in callbacks as making this assumption is dangerous. e.g. 

```js
// Example Setup
declare var foo:{bar?: {baz: string}};
function immediate(callback: ()=>void) {
  callback();
}


// Type Guard
if (foo.bar) {
  console.log(foo.bar.baz); // Okay
  functionDoingSomeStuff(() => {
    console.log(foo.bar.baz); // TS error: Object is possibly 'undefined'"
  });
}
```

The fix is as easy as storing the inferred safe value in a local variable, automatically ensuring it doesn't get changed externally, and TypeScript can easily understand that: 

```js
// Type Guard
if (foo.bar) {
  console.log(foo.bar.baz); // Okay
  const bar = foo.bar;
  functionDoingSomeStuff(() => {
    console.log(bar.baz); // Okay
  });
}
```
