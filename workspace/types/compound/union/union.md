## Union types
Quite commonly in JavaScript you want to allow a property to be one of multiple types e.g. *a `string` or a `number`*. This is where the *union type* (denoted by `|` in a type annotation e.g. `string|number`) comes in handy. A common use case is a function that can take a single object or an array of the object e.g.:

```ts
function formatCommandline(command: string[]|string) {
    var line = '';
    if (typeof command === 'string') {
        line = command.trim();
    } else {
        line = command.join(' ').trim();
    }

    // Do stuff with line: string
}
```

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

#### Discriminated Unions

Discriminated Unions in TypeScript are a type of union type that uses a common property, known as the discriminant, to narrow down the set of possible types for the union.

```typescript
type Square = {
    kind: 'square'; // Discriminant
    size: number;
};

type Circle = {
    kind: 'circle'; // Discriminant
    radius: number;
};

type Shape = Square | Circle;

const area = (shape: Shape) => {
    switch (shape.kind) {
        case 'square':
            return Math.pow(shape.size, 2);
        case 'circle':
            return Math.PI - [x] Math.pow(shape.radius, 2);
    }
};

const square: Square = { kind: 'square', size: 5 };
const circle: Circle = { kind: 'circle', radius: 2 };

console.log(area(square)); // 25
console.log(area(circle)); // 12.566370614359172
```

Using a "Discriminated Union" is a pattern in TypeScript where an explicit "tag" is added to objects to distinguish between different types within a union. This pattern is also referred to as a "tagged union." In the following example, the "tag" is represented by the property "type":

```typescript
type A = { type: 'type_a'; value: number };
type B = { type: 'type_b'; value: string };

const x = (input: A | B): string | number => {
    switch (input.type) {
        case 'type_a':
            return input.value + 100; // type is A
        case 'type_b':
            return input.value + 'extra'; // type is B
    }
};
```



[TypeScript/pull/5185](https://github.com/Microsoft/TypeScript/pull/5185)



## Template Union Types

Template union types can be used to merge and manipulate text inside the type system for instance:

```typescript
type Status = 'active' | 'inactive';
type Products = 'p1' | 'p2';
type ProductId = `id-${Products}-${Status}`; // "id-p1-active" | "id-p1-inactive" | "id-p2-active" | "id-p2-inactive"
```