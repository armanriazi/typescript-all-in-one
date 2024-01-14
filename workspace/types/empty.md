
## any
TypeScript introduces the **:any** type for such occasions. Specifying that an object has a type of any will, in essence, **remove the TypeScript strict type checking**. Used for **backward compatibility with JavaScript**. In short, avoid the any type at any cost.

The any data type represents literally “any” value, it is the default value when TypeScript cannot infer the type or is not specified.

When using any TypeScript **compiler skips** the type checking so there is no type safety when any is being used. Generally **do not use `any` to silence the compiler when an error occurs**, instead focus on fixing the error as with using any it is possible to break contracts and we lose the benefits of TypeScript autocomplete.

The any type could be useful during a gradual **migration** from JavaScript to TypeScript, as it can silence the compiler.

For new projects use TypeScript configuration **noImplicitAny** which enables TypeScript to issue errors where any is used or inferred.

> *The anytype is usually a source of errors which can mask real problems with your types. Avoid using it as much as possible.*

## unknown

```ts
type Options = {
    [prop: string]: unknown;
    a?: string;
    b?: string;
};
const fn = (options: Options) => undefined;
fn({ c: 'c' }); // Valid
```

## undefined

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

So to check if a variable is defined or not at a *global* level you normally use `typeof`:

```ts
if (typeof someglobal !== 'undefined') {
  // someglobal is now safe to use
  console.log(someglobal);
}
```

## never
The never type is used in TypeScript to denote this bottom type. Cases when it occurs naturally:

- [x] A function never returns (e.g. if the function body has while(true){})
- [x] A function always throws (e.g. in function foo(){throw new Error('Not Implemented')} the return type of foo is never)

```ts
let foo: never = 123; // Error: Type number is not assignable to never

// Okay as the function's return type is `never`
let bar: never = (() => { throw new Error(`Throw my hands in the air like I just don't care`) })();
```

And because `never` is only assignable to another `never` you can use it for *compile time* exhaustive checks as well. This is covered in the [*discriminated union* section](./discriminated-unions.md).

## never vs null
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
