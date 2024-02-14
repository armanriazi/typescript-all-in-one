
# Types as Sets

In TypeScript, a type is a set of possible values. This set is also referred to as the domain of the type. Each value of a type can be viewed as an element in a set. A type establishes the constraints that every element in the set must satisfy to be considered a member of that set.
The primary task of TypeScript is to check and verify whether one set is a subset of another.

TypeScript supports various types of sets:

| Set term           | TypeScript                      | Notes                                                                                                              |
| ------------------ | ------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Empty set          | never                           | "never" contains anything apart itself                                                                             |
| Single element set | undefined / null / literal type |                                                                                                                    |
| Finite set         | boolean / union                 |                                                                                                                    |
| Infinite set       | string / number / object        |                                                                                                                    |
| Universal set      | any / unknown                   | Every element is a member of "any" and every set is a subset of it / "unknown" is a type-safe counterpart of "any" |

Here few examples:

| TypeScript            | Set term               | Example                                                                         |
| --------------------- | ---------------------- | ------------------------------------------------------------------------------- |
| never                 | ∅ (empty set)          | const x: never = 'x'; // Error: Type 'string' is not assignable to type 'never' |
|                       |                        |
| Literal type          | Single element set     | type X = 'X';                                                                   |
|                       |                        | type Y = 7;                                                                     |
|                       |                        |
| Value assignable to T | Value ∈ T (member of)  | type XY = 'X' \| 'Y';                                                           |
|                       |                        | const x: XY = 'X';                                                              |
|                       |                        |
| T1 assignable to T2   | T1 ⊆ T2 (subset of)    | type XY = 'X' \| 'Y';                                                           |
|                       |                        | const x: XY = 'X';                                                              |
|                       |                        | const j: XY = 'J'; // Type '"J"' is not assignable to type 'XY'.                |
|                       |                        |                                                                                 |
| T1 extends T2         | T1 ⊆ T2 (subset of)    | type X = 'X' extends string ? true : false;                                     |
|                       |                        |
| T1 \| T2              | T1 ∪ T2 (union)        | type XY = 'X' \| 'Y';                                                           |
|                       |                        | type JK = 1 \| 2;                                                               |
|                       |                        |
| T1 & T2               | T1 ∩ T2 (intersection) | type X = { a: string }                                                          |
|                       |                        | type Y = { b: string }                                                          |
|                       |                        | type XY = X & Y                                                                 |
|                       |                        | const x: XY = { a: 'a', b: 'b' }                                                |
|                       |                        |
| unknown               | Universal set          | const x: unknown = 1                                                            |

# S.F.I.A.T
Interfaces are a way of defining custom types. Using interfaces allows us to cover almost every possible combination of types, meaning that **using the any type, in most cases, is unnecessary**. We use an acronym within our programming teams, which is Simply Find an Interface for the Any Type, pronounced sveat or sweat.  While this may sound rather odd, it simply brings home the point that the any type can and should be defined **as an interface**, so simply find it.
In short, avoid the any type at any cost.

# Inferred typing
Is a feature of TypeScript that allows the type of a variable or expression to be **determined based on the context** The process of determining the type of a variable **based on its value**. in which it appears rather than being explicitly specified with a type annotation.
`as` keyword in a type assertion
It provides a way to override the inferred type of a variable.

# Duck typing
Checks the compatibility of an object with a particular type based on *the presence of certain properties or methods rather than the object’s actual type.*
In TypeScript, objects are considered compatible based on their shape rather than the order of their properties. **In other words, two variables are considered to have the same type if they have the same properties and methods.** In TypeScript, objects are considered compatible based on their **shape rather than the order of their properties.**


Sample of non-duck:

```typescript
//*Missing property example*
// Declare a variable 'nameIdObject' and initialize it with an object that has a 'name' property, an 'id' property, and a 'print' method
var nameIdObject = { name: "myName", id: 1, print() {} };
// Assign a new object to 'nameIdObject'. This object has a 'name' property and an 'id' property, but it does not have the 'print' method
// that the original object had.
nameIdObject = { id: 3, name: "thirdName" };
//*Dynamic object typing*
// Declare a variable 'obj1' and initialize it with an object that has an 'id' property and a 'print' method
var obj1 = { id: 1, print() { } };

// Declare a variable 'obj2' and initialize it with an object that has an 'id' property, a 'print' method, and a 'select' method
var obj2 = { id: 2, print() { }, select() { } }

// Attempt to assign 'obj2' to 'obj1'. This won't cause a type error because 'obj2' has all of the methods that are present in the type of 'obj1'
obj1 = obj2;

// Attempt to assign 'obj1' to 'obj2'. This will cause a type error because 'obj1' is missing the 'select' method that is present in the type of 'obj2'
obj2 = obj1;
```

`> Output:`

```md
index.ts(5,1): error TS2741: Property 'print' is missing in type '{ id: number; name: string; }' but required in type '{ name: string; id: number; print(): void; }'.
```


# Explicit casting
uses the angled bracket syntax, that is, **< type >**, surrounding the name of the type.  `<any>{ id: 1, name: "item1" }`


# Type Aliases

```typescript
// Define a type alias for a string or number
type StringOrNumber = string | number;

// Declare a function that takes two arguments, both of type 'StringOrNumber'
function addWithTypeAlias(
  arg1: StringOrNumber,
  arg2: StringOrNumber
) {
  // Convert both arguments to strings and return the concatenation
  return arg1.toString() + arg2.toString();
}

console.log(addWithTypeAlias(1, 2)); // Output: '12'
console.log(addWithTypeAlias('Hello', ' World')); // Output: 'Hello World'

```

# Literal Types

TypeScript also allows us to use what are known as literals, which are almost a **hybrid of enums and type aliases**. A literal will limit the allowed values to a set of values specified. A literal can be made of string, number, or boolean values.

```ts
// Define a literal `AllowedStringValues` that can be either "one", "two", or "three".
type AllowedStringValues = "one" | "two" | "three";

// Define a literal `AllowedNumericValues` that can be either 1, 20, or 65535.
type AllowedNumericValues = 1 | 20 | 65535;

// The `withLiteral` function takes a parameter `input` of the union type `AllowedStringValues | AllowedNumericValues`.
function withLiteral(input: AllowedStringValues | AllowedNumericValues) {
  // Logs the string representation of `input` to the console.
  console.log(`called with : ${input}`);
}

```

## Literal Types vs Aliases

The syntax used for literals is very similar to the syntax of a type alias where we use the type keyword followed by a set of allowed values. Unlike type aliases, however, we are not specifying a set of different types. We are specifying a set of allowed values, which is similar in concept to an enum.

# Comparison Rules

The TypeScript comparison process is recursive and executed on types nested at any level.

A type "X" is compatible with "Y" if "Y" has at least the same members as "X".

```typescript
type X = {
    a: string;
};
type Y = {
    a: string;
    b: string;
};
const y = { a: 'A', b: 'B' }; // Valid, as it has at least the same members as X
const r: X = y;
```

### Types can be Implicit
TypeScript will try to infer as much of the type information as it can in order to give you type safety with minimal cost of productivity during code development. For example, in the following example TypeScript will know that foo is of type `number` below and will give an error on the second line as shown:

```ts
var foo = 123;
foo = '456'; // Error: cannot assign `string` to `number`

// Is foo a number or a string?
```
This type inference is well motivated. If you do stuff like shown in this example, then, in the rest of your code, you cannot be certain that `foo` is a `number` or a `string`. Such issues turn up often in large multi-file code bases. We will deep dive into the type inference rules later.

### Types can be Explicit
As we've mentioned before, TypeScript will infer as much as it can safely. However, you can use annotations to:

1. Help along the compiler, and more importantly document stuff for the next developer who has to read your code (that might be future you!).
1. Enforce that what the compiler sees, is what you thought it should see. That is your understanding of the code matches an algorithmic analysis of the code (done by the compiler).

TypeScript uses postfix type annotations popular in other *optionally* annotated languages (e.g. ActionScript and F#).

```ts
var foo: number = 123;
```
So if you do something wrong the compiler will report an error e.g.:

```ts
var foo: number = '123'; // Error: cannot assign a `string` to a `number`
```

We will discuss all the details of all the annotation syntax supported by TypeScript in a later chapter.

### Assign a type
Type Declarations and Type Assertions.In the following example, we use x: X (": Type") to declare a type for the variable x.

```ts
type X = {
    a: string;
};

const x: X = {
    a: 'a',
    b: 'b', // Error: Object literal may only specify known properties
};
```


## Type vs Interface

* Use `type` when you *might* need a union or intersection:

```ts
type Foo = number | { someProperty: number }
```

* Use `interface` when you want `extends` or `implements` e.g.

```ts
interface Foo {
  foo: string;
}
interface FooBar extends Foo {
  bar: string;
}
class X implements FooBar {
  foo: string;
  bar: string;
}
```

- Otherwise use whatever makes you happy that day. I use [type](https://www.youtube.com/watch?v=IXAT3If0pGI)

## Extending Types

It is also possible to extend from multiple types:

```typescript
interface A {
    a: string;
}
interface B {
    b: string;
}
interface Y extends A, B {
    y: string;
}
```

The `extends` keyword works only on interfaces and classes, for types use an intersection:

```typescript
type A = {
    a: number;
};
type B = {
    b: number;
};
type C = A & B;
```

It is possible to extend a type using an inference but not vice versa:

```typescript
type A = {
    a: string;
};
interface B extends A {
    b: string;
}
```

### Types are structural
In some languages (specifically nominally typed ones) static typing results in unnecessary ceremony because even though *you know* that the code will work fine the language semantics force you to copy stuff around. This is why stuff like **automapper** for c# is *vital* for C#. In TypeScript because we really want it to be easy for JavaScript developers with a minimum cognitive overload, types are *structural*. This means that **duck typing** is a first class language construct. Consider the following example. The function `iTakePoint2D` will accept anything that contains all the things (`x` and `y`) it expects:

```ts
interface Point2D {
    x: number;
    y: number;
}
interface Point3D {
    x: number;
    y: number;
    z: number;
}
var point2D: Point2D = { x: 0, y: 10 }
var point3D: Point3D = { x: 0, y: 10, z: 20 }
function iTakePoint2D(point: Point2D) { /* do something */ }

iTakePoint2D(point2D); // exact match okay
iTakePoint2D(point3D); // extra information okay
iTakePoint2D({ x: 0 }); // Error: missing information `y`
```

TypeScript is based on a structural type system but excess property checking is a property of TypeScript which allows it to check whether an object has the exact properties specified in the type.

Excess Property Checking is performed when assigning object literals to variables or when passing them as arguments to the function's excess property, for instance.

<!-- skip -->
```typescript
type X = {
    a: string;
};
const y = { a: 'a', b: 'b' };
const x: X = y; // Valid because structural typing
const w: X = { a: 'a', b: 'b' }; // Invalid because excess property checking
```

### Type errors do not prevent JavaScript emit
To make it easy for you to migrate your JavaScript code to TypeScript, even if there are compilation errors, by default TypeScript *will emit valid JavaScript* the best that it can. e.g.

```ts
var foo = 123;
foo = '456'; // Error: cannot assign a `string` to a `number`
```

will emit the following js:

```ts
var foo = 123;
foo = '456';
```

So you can incrementally upgrade your JavaScript code to TypeScript. This is very different from how many other language compilers work and yet another reason to move to TypeScript.


### Weak Types
A type is considered weak when it contains nothing but a set of all-optional properties:


```typescript
type X = {
    a?: string;
    b?: string;
};
```

TypeScript considers an error to assign anything to a weak type when there is no overlap, for instance, the following throws an error:

<!-- skip -->
```typescript
type Options = {
    a?: string;
    b?: string;
};

const fn = (options: Options) => undefined;

fn({ c: 'c' }); // Invalid
```

Although not recommended, if needed, it is possible to bypass this check by using type assertion:

```typescript
type Options = {
    a?: string;
    b?: string;
};
const fn = (options: Options) => undefined;
fn({ c: 'c' } as Options); // Valid
```

Or by adding `unknown` to the [index signatures](../types/system/index-signatures.md) to the weak type:

```typescript
type Options = {
    [prop: string]: unknown;
    a?: string;
    b?: string;
};
const fn = (options: Options) => undefined;
fn({ c: 'c' }); // Valid
```

#### Strong Type VS Weak Type
Strong typing enforces strict type checking, while weak typing allows for more flexibility in type conversions.

### Explicit Type Annotation

We can be specific and pass a type, in the following example property `x` is of type `number`:

```typescript
const v = {
    x: 1, // Inferred type: number (widening)
};
v.x = 3; // Valid
```

We can make the type annotation more specific by using a union of literal types:

<!-- skip -->
```typescript
const v: { x: 1 | 2 | 3 } = {
    x: 1, // x is now a union of literal types: 1 | 2 | 3
};
v.x = 3; // Valid
v.x = 100; // Invalid
```

### Type Narrowing

Type Narrowing is the process in TypeScript where a general type is narrowed down to a more specific type. This occurs when TypeScript analyzes the code and determines that certain conditions or operations can refine the type information.(instanceof, in, typeof, const)


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

## Type Annotations

On variables declared using `var`, `let` and `const`, it is possible to optionally add a type:

```typescript
const x: number = 1;
```

TypeScript does a good job of inferring types, especially when simple one, so these declarations in most cases are not necessary.

On functions is possible to add type annotations to parameters:

```typescript
function sum(a: number, b: number) {
    return a + b;
}
```

The following is an example using a anonymous functions (so called lambda function):

```typescript
const sum = (a: number, b: number) => a + b;
```

These annotation can be avoided when a default value for a parameter is present:

```typescript
const sum = (a = 10, b: number) => a + b;
```

Return type annotations can be added to functions:

```typescript
const sum = (a = 10, b: number): number => a + b;
```

This is useful especially for  more complex functions as writing expliciting the return type before an implementation can help better think about the function.

Generally consider annotating type signatures but not the body local variables and add types always to object literals.

TypeScript provides convenient syntax for providing names for type annotations that you would like to use in more than one place. The aliases are created using the `type SomeName = someValidTypeAnnotation` syntax. An example is demonstrated below:

```ts
type StrOrNum = string|number;

// Usage: just like any other notation
var sample: StrOrNum;
sample = 123;
sample = '123';

// Just checking
sample = true; // Error!
```

Unlike an `interface` you can give a type alias to literally any type annotation (useful for stuff like union and intersection types). Here are a few more examples to make you familiar with the syntax:

```ts
type Text = string | { text: string };
type Coordinates = [number, number];
type Callback = (data: string) => void;
```

`> TIP:` If you need to have hierarchies of Type annotations use an `interface`. They can be used with `implements` and `extends`

`> TIP:` Use a type alias for simpler object structures (like `Coordinates`) just to give them a semantic name. Also when you want to give semantic names to **Union or Intersection types**, a Type alias is the way to go.

## Object Type
TypeScript introduces the object type to cover types that are not primitive types. This includes any type that is not number, boolean, string, null, symbol, or undefined.

```ts
let structuredObject: object = {
  name: "myObject",
  properties: {
    id: 1,
    type: "AnObject"
  }
};

// Define a function that takes an object as an argument and logs its string representation
function printObjectType(a: object) {
  console.log(`a: ${JSON.stringify(a)}`);
}

printObjectType(structuredObject);
printObjectType("this is a string");

```

### Ambient Declarations

['@'types](./module/@types.md)

