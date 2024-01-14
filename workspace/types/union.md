## Union types
They use the **pipe symbol (|)** to list all of the types that will make up this new type.

```typescript
// Declare a function called printObject that takes in a parameter called obj with a type of string or number
function printObject(obj: string | number) {
  // Log the value of obj
  console.log(`obj = ${obj}`);
}

// Call printObject with a number value
printObject(1);

// Call printObject with a string value
printObject("string value");

```

`> Output:`

```md
obj = 1
obj = string value
```

## Union vs Intersection vs Extends

An union, (T1 | T2) creates a wider set (both):

```typescript
type X = {
    a: string;
};
type Y = {
    b: string;
};
type XY = X | Y;
const r: XY = { a: 'a', b: 'x' }; // Valid
```

An intersection, (T1 & T2) create a narrower set (only shared):

<!-- skip -->
```typescript
type X = {
    a: string;
};
type Y = {
    a: string;
    b: string;
};
type XY = X & Y;
const r: XY = { a: 'a' }; // Invalid
const j: XY = { a: 'a', b: 'b' }; // Valid
```

The `extends` keyword could be considered as a "subset of" in this context. It sets a constraint for a type. The extends used with a generic, take the generic as an infinite set and it will constrain it to a more specific type.
Please note that `extends` has nothing to do with hierarchy in a OOP sense (there is no this concept in TypeScript).
TypeScript works with sets and does not have a strict hierarchy, infact, as in the example below, two types could overlap without either being a subtype of the other type (TypeScript considers the structure, shape of the objects).

```typescript
interface X {
    a: string;
}
interface Y extends X {
    b: string;
}
interface Z extends Y {
    c: string;
}
const z: Z = { a: 'a', b: 'b', c: 'c' };
interface X1 {
    a: string;
}
interface Y1 {
    a: string;
    b: string;
}
interface Z1 {
    a: string;
    b: string;
    c: string;
}
const z1: Z1 = { a: 'a', b: 'b', c: 'c' };

const r: Z1 = z; // Valid
```