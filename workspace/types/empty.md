
## any
TypeScript introduces the **:any** type for such occasions. Specifying that an object has a type of any will, in essence, **remove the TypeScript strict type checking**. Used for **backward compatibility with JavaScript**. In short, avoid the any type at any cost.

The any data type represents literally “any” value, it is the default value when TypeScript cannot infer the type or is not specified.

When using any TypeScript **compiler skips** the type checking so there is no type safety when any is being used. Generally **do not use `any` to silence the compiler when an error occurs**, instead focus on fixing the error as with using any it is possible to break contracts and we lose the benefits of TypeScript autocomplete.

The any type could be useful during a gradual **migration** from JavaScript to TypeScript, as it can silence the compiler.

For new projects use TypeScript configuration **noImplicitAny** which enables TypeScript to issue errors where any is used or inferred.

> *The anytype is usually a source of errors which can mask real problems with your types. Avoid using it as much as possible.*

The `any` type is a special type (**universal supertype**) that can be used to represent any type of value (*primitives, objects, arrays, functions, errors, symbols*). It is often used in situations where the **type of a value is not known at compile time**, or when working with values from external APIs or libraries that do not have TypeScript typings.

By utilizing `any` type, you are indicating to the TypeScript compiler that values should be represented without any limitations. In order to maximizing type safety in your code consider the following:

- [x] **Limit the usage of `any`** to specific cases where the type is truly unknown.
- [x] **Do not return `any` types from a function** as you will lose type safety in the code using that function weakening your type safety.
- [x] **Instead of `any` use `@ts-ignore` if you need to silence the compiler.**

The `any` type holds a special place in the TypeScript type system. It gives you an escape hatch from the type system to **tell the compiler to bugger off**. `any` is compatible with **any and all** types in the type system. This means that **anything can be assigned to it** and **it can be assigned to anything**. This is demonstrated in the example below:

```ts
var power: any;

// Takes any and all types
power = '123';
power = 123;

// Is compatible with all types
var num: number;
power = num;
num = power;
```

If you are porting JavaScript code to TypeScript, you are going to be close friends with `any` in the beginning. However, don't take this friendship too seriously as it means that it is up to you to **ensure the type safety**. *You are basically telling the compiler* to **not do any meaningful static analysis**.


```typescript
let value: any;
value = true; // Valid
value = 7; // Valid
```


## Unknown type

In TypeScript, the `unknown` type represents a value that is of an unknown type. Unlike `any` type, which allows for any type of value, `unknown` requires a type check or assertion before it can be used in a specific way so **no operations are permitted on an `unknown` without first asserting or narrowing to a more specific type.**

```ts
const isString = (value: unknown): value is string => typeof value === 'string';
```

```ts
type Options = {
    [prop: string]: unknown;
    a?: string;
    b?: string;
};
const fn = (options: Options) => undefined;
fn({ c: 'c' }); // Valid
```

using unknown as a **double assertion type**

```ts
function handler(event: Event) {
    let element = event as unknown as HTMLElement; // Okay, fix compiler complain!
}
```

The `unknown` type is only assignable to any type and the `unknown` type itself, it is a type-safe alternative to `any`.

<!-- skip -->
```typescript
let value: unknown;

let value1: unknown = value; // Valid
let value2: any = value; // Valid
let value3: boolean = value; // Invalid
let value4: number = value; // Invalid
```

```typescript
const add = (a: unknown, b: unknown): number | undefined =>
    typeof a === 'number' && typeof b === 'number' ? a + b : undefined;
console.log(add(1, 2)); // 3
console.log(add('x', 2)); // undefined
```

### any vs unknown
Both are **equally unsafe** as far as TypeScript is concerned. Use what makes you happy. Considerations:

- [x] **Linters prefer unknown** (with no-explicit-any rule)
- [x] **any is less characters** to type than unknown
- [x] Unlike `any` type, which allows for any type of value, **`unknown` requires a type check or assertion** before it can be used in a specific way

## undefined

### `null` and `undefined`

How they are treated by the type system depends on the `strictNullChecks` compiler flag (we cover this flag later). When in `strictNullCheck:false`, the `null` and `undefined` JavaScript literals are effectively treated by the type system the same as something of type `any`. These literals can be assigned to any other type. This is demonstrated in the below example:

```ts
var num: number;
var str: string;

// These literals can be assigned to anything
num = null;
str = undefined;
```


```typescript
let array = ["123", "456", "789"];  // Initialize an array with 3 elements, "123", "456", and "789"
delete array[0]; // delete the element at index 0 of the array, in this case "123". Using delete leaves a hole in the index and can cause unexpected behavior in many situations. 

// Use a for loop to iterate over the array
for (let i = 0; i < array.length; i++) {
  checkAndPrintElement(array[i]); // call the checkAndPrintElement function with the current element of the array as a parameter
}

// checkAndPrintElement function 
function checkAndPrintElement(arrElement: string | undefined) {
  // check if the passed element is undefined
  if (arrElement === undefined) {
    console.log(`invalid array element`); // If the element is undefined, log the message "invalid array element"
  } else {
    console.log(`valid array element : ${arrElement}`); // Else if the element is defined, log the message "valid array element: " and the element
  }
}
```

`> Output:`

```md
:invalid array element
valid array element : 456
valid array element : 789
```

### return validity checking by undefined

> Don't use return `undefined` as a means of denoting *validity*

For example an awful function like this:

```ts
function toInt(str: string) {
  return str ? parseInt(str) : undefined;
}
```

can be much better written like this:

```ts
function toInt(str: string): { valid: boolean, int?: number } {
  const int = parseInt(str);
  if (isNaN(int)) {
    return { valid: false };
  }
  else {
    return { valid: true, int };
  }
}
```

### Limit explicit use of 'undefined'

Because TypeScript gives you the opportunity to *document* your structures separately from values instead of stuff like:

```ts
function foo(){
  // if Something
  return {a:1,b:2};
  // else
  return {a:1,b:undefined};//Valid
}
```

you should use a type annotation:

```ts
function foo():{a:number,b?:number}{
  // if Something
  return {a:1,b:2};
  // else
  return {a:1};//Valid
}
```

### JSON and serialization

The JSON standard has support for encoding `null` but not `undefined`. When JSON-encoding an object with an attribute that is `null`, the attribute will be included with its null value, whereas an attribute with an `undefined` value will be excluded entirely.

```ts
JSON.stringify({willStay: null, willBeGone: undefined}); // {"willStay":null}
```

As a result, JSON-based databases may support `null` values but not `undefined` values. Since attributes set to `null` are encoded, you can transmit the intent to clear an attribute by setting its value to `null` before encoding and transmitting the object to a remote store.

Setting attribute values to undefined can save on storage and transmission costs, as the attribute names will not be encoded. However, this can complicate the semantics of clearing values vs. absent values.

## null
Along with undefined, JavaScript also allows values to be set to null. Setting a value to null is intended to indicate that the variable is known but has no value, as opposed to undefined, where the variable has not been defined in the current scope.  undefined is often seen as something that happens automatically or by default.

```typescript
// function that takes a parameter of type `number` or `null`
function printValues(a: number | null) {
  console.log(`a = ${a}`);  // log the value of a
}

printValues(1); // call the function with a number value of 1
printValues(null); // call the function with a null value

```

`> Output:`
    :a = 1
a = null

## Null and Undefined

> [Free youtube video on the subject](https://www.youtube.com/watch?v=kaUfBNzuUAI)

JavaScript (and by extension TypeScript) has two bottom types : `null` and `undefined`. They are *intended* to mean different things:

- [x] Something hasn't been **initialized** : `undefined`.
- [x] Something is **currently unavailable**: `null`.

```ts
// Both null and undefined are only `==` to themselves and each other:
console.log(null == null); // true (of course)
console.log(undefined == undefined); // true (of course)
console.log(null == undefined); // true


// You don't have to worry about falsy values making through this check
console.log(0 == undefined); // false
console.log('' == undefined); // false
console.log(false == undefined); // false
```
Recommend `== null` to check for both `undefined` or `null`. You generally don't want to make a distinction between the two.

```ts
function foo(arg: string | null | undefined) {
  if (arg != null) {
    // arg must be a string as `!=` rules out both null and undefined. 
  }
}
```

Remember how I said you should use `== null`? Of course you do (cause I just said it ^). Don't use it for root level things. In strict mode if you use `foo` and `foo` is undefined you get a `ReferenceError` **exception** and the whole call stack unwinds.

> You should use strict mode ... and in fact the TS compiler will insert it for you if you use modules ... more on those later in the book so you don't have to be explicit about it :)

So to check if a variable is defined or not at a **global** level you normally **use `typeof`**:

```ts
if (typeof someglobal !== 'undefined') {
  // someglobal is now safe to use
  console.log(someglobal);
}
```

### null and undefined with `strictNullChecks`

TypeScript is smart enough to rule out both `null` and `undefined` with a `== null` / `!= null` check. For example:

```ts
function foo(a?: number | null) {
  if (a == null) return;

  // a is number now.
}
```


## Never type
The `never` type represents values that never occur. It is used to **denote functions or expressions that never return or throw an error.**

### never vs null

The `never` type is used to ensure that the default case is exhaustive and that TypeScript will raise an error if a new value is added to the Direction type without being handled in the switch statement.

### Never use-cases

For instance an infinite loop:

```typescript
const infiniteLoop = (): never => {
    while (true) {
        // do something
    }
};
```

Throwing an error:

```typescript
const throwError = (message: string): never => {
    throw new Error(message);
};
```

The never type is used in TypeScript to denote this bottom type. Cases when it occurs naturally:

- [x] A function **never returns** (e.g. if the function body has while(true){})
- [x] A function **always throws** (e.g. in function foo(){throw new Error('Not Implemented')} the return type of foo is never)

```ts
let foo: never = 123; // Error: Type number is not assignable to never

// Okay as the function's return type is `never`
let bar: never = (() => { throw new Error(`Throw my hands in the air like I just don't care`) })();
```

And because `never` is only assignable to another `never` you can use it for *compile time* exhaustive checks as well. 

The `never` type is useful in ensuring type safety and catching potential errors in your code. It helps TypeScript analyze and infer more precise types when used in combination with other types and control flow statements, for instance:

```typescript
type Direction = 'up' | 'down';
const move = (direction: Direction): void => {
    switch (direction) {
        case 'up':
            // move up
            break;
        case 'down':
            // move down
            break;
        default:
            const exhaustiveCheck: never = direction;
            throw new Error(`Unhandled direction: ${exhaustiveCheck}`);
    }
};
```


When a variable is narrowed to a type that cannot contain any values, the TypeScript compiler will infer that the variable must be of the `never` type. This is because The never Type represents a value that can never be produced.

```typescript
const printValue = (val: string | number) => {
    if (typeof val === 'string') {
        console.log(val.toUpperCase());
    } else if (typeof val === 'number') {
        console.log(val.toFixed(2));
    } else {
        // val has type never here because it can never be anything other than a string or a number
        const neverVal: never = val;
        console.log(`Unexpected value: ${neverVal}`);
    }
};
```

## Exhaustiveness checking

Exhaustiveness checking is a feature in TypeScript that ensures all possible cases of a discriminated union are handled in a `switch` statement or an `if` statement.

```typescript
type Direction = 'up' | 'down';

const move = (direction: Direction) => {
    switch (direction) {
        case 'up':
            console.log('Moving up');
            break;
        case 'down':
            console.log('Moving down');
            break;
        default:
            const exhaustiveCheck: never = direction;
            console.log(exhaustiveCheck); // This line will never be executed
    }
};
```



## void

Use `:void` to signify that a function does not have a return type:

```ts
function log(message): void {
    console.log(message);
}
```
As soon as someone tells you that never is returned when a function never exits gracefully you intuitively want to think of it as the same as void. However, void is a Unit. never is a falsum.

A function that returns nothing returns a Unit void. However, a function that never returns (or always throws) returns never. void is something that can be assigned (without strictNullChecking) but never can never be assigned to anything other than never.

```ts
// Inferred return type: void
function failDeclaration(message: string) {
  throw new Error(message);
}

// Inferred return type: never
const failExpression = function(message: string) {
  throw new Error(message);
};
```


### Final thoughts
TypeScript team doesn't use `null` : [TypeScript coding guidelines](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines#null-and-undefined) and it hasn't caused any problems. Douglas Crockford thinks [`null` is a bad idea](https://www.youtube.com/watch?v=PSGEjv3Tqo0&feature=youtu.be&t=9m21s) and we should all just use `undefined`.

However, NodeJS style code bases uses `null` for Error arguments as standard as it denotes `Something is currently unavailable`. I personally don't care to distinguish between the two as most projects use libraries with differing opinions and just rule out both with `== null`.
