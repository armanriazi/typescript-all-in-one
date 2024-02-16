## Interfaces
The purpose of an interface in TypeScript is to define a **blueprint for objects**.
Interfaces have *zero* runtime JS impact. There is a lot of power in TypeScript interfaces to declare the structure of variables.

The following two are equivalent declarations, the first uses an *inline annotation*, the second uses an *interface*:

```typescript
// Sample A
declare var myPoint: { x: number; y: number; };

// Sample B
interface Point {
    x: number; y: number;
}
declare var myPoint: Point;
```

However, the beauty of *Sample B* is that if someone authors a library that builds on the `myPoint` library to add new members, they can easily add to the existing declaration of `myPoint`:

```typescript
// Lib a.d.ts
interface Point {
    x: number; y: number;
}
declare var myPoint: Point;

// Lib b.d.ts
interface Point {
    z: number;
}

// Your code
var myPoint.z; // Allowed!
```

This is because **interfaces in TypeScript are open ended**. This is a vital tenet of TypeScript that it allows you to mimic the extensibility of JavaScript using *interfaces*.



Interfaces are the core way in TypeScript to compose multiple type annotations into a single named annotation. Consider the following example:

```typescript
interface Name {
    first: string;
    second: string;
}

var name: Name;
name = {
    first: 'John',
    second: 'Doe'
};

name = {           // Error : `second` is missing
    first: 'John'
};
name = {           // Error : `second` is the wrong type
    first: 'John',
    second: 1337
};
```

Here we've composed the annotations `first: string` + `second: string` into a new annotation `Name` that enforces the type checks on individual members. Interfaces have a lot of power in TypeScript and we will dedicate an entire section to how you can use that to your advantage.

### Narrowing a type on a derived interface

```typescript
// Interface `IBaseStringOrNumber` defines a property `id` that can be either a string or a number
interface IBaseStringOrNumber {
    id: string | number;
}

// Interface `IDerivedFromBaseNumber` extends `IBaseStringOrNumber` and defines the property `id` as being a number type
interface IDerivedFromBaseNumber
    extends IBaseStringOrNumber {
    id: number;
}
```

### Generic Constraint

Can we specify a generic constraint on a function parameter in TypeScript? Yes

```typescript
// This class takes an array of strings or numbers and concatenates them into a single string
class Concatenator<T extends Array<string> | Array<number>> {
  
  // Method that concatenates the array of items into a string
  public concatenateArray(items: T): string {
    
    // Initialize an empty string to store the concatenated values
    let returnString = "";

    // Loop through each item in the array
    for (let i = 0; i < items.length; i++) {
      // If this is not the first item, add a comma before appending the value
      returnString += i > 0 ? "," : "";
      
      // Append the current value to the return string
      returnString += items[i].toString();
    }

    // Return the final concatenated string
    return returnString;
  }
}
```

### Inline Type Annotation
Instead of creating a new `interface` you can annotate anything you want *inline* using `:{ /*Structure*/ }`. The previous example presented again with an inline type:

```typescript
var name: {
    first: string;
    second: string;
};
name = {
    first: 'John',
    second: 'Doe'
};

name = {           // Error : `second` is missing
    first: 'John'
};
name = {           // Error : `second` is the wrong type
    first: 'John',
    second: 1337
};
```

Inline types are great for quickly providing a one off type annotation for something. It saves you the hassle of coming up with (a potentially bad) type name. However, if you find yourself putting in the same type annotation inline multiple times it's a good idea to consider refactoring it into an interface (or a `type alias` covered later in this section).

## Classes can implement interfaces

If you want to use *classes* that must follow an object structure that someone declared for you in an `interface` you can use the `implements` keyword to ensure compatibility:

```typescript
interface Point {
    x: number; y: number;
}

class MyPoint implements Point {
    x: number; y: number; // Same as Point
}
```

Basically in the presence of that `implements`, any changes in that external `Point` interface will result in a compile error in your code base so you can easily keep it in sync:

```typescript
interface Point {
    x: number; y: number;
    z: number; // New member
}

class MyPoint implements Point { // ERROR : missing member `z`
    x: number; y: number;
}
```

Note that `implements` restricts the structure of the class *instances* i.e.:

```typescript
var foo: Point = new MyPoint();
```

And stuff like `foo: Point = MyPoint` is not the same thing.

## Keyof

`>tags:` [[Important]] [[Keyof]]

```typescript
Define an interface `IPerson` with properties `id` and `name`
interface IPerson {
  id: number;
  name: string;
}

// Generate a string literal type for the properties of the interface `IPerson`
type PersonPropertyName = keyof IPerson;
//This is equivalent to the following string literal:
type PersonPropertyLiteral = "id" | "name";
```

## In
Purpose of the in keyword in TypeScript interface To specify a constraint for the types of properties.

```typescript
    if ('id' in obj) {
      console.log(`obj.name : ${obj.name}`);
    }
```

## TIPs

### Not every interface is implementable easily

Interfaces are designed to declare *any arbitrarily crazy* structure that might be present in JavaScript.

Consider the following interface where something is callable with `new`:

```typescript
interface Crazy {
    new (): {
        hello: number
    };
}
```

`>tags:` [[Error_TS2420]] [[Interface]] error TS2420: Class 'CrazyClass' incorrectly implements interface 'Crazy'.

You would essentially have something like:

```typescript
class CrazyClass implements Crazy {
    constructor() {
        return { hello: 123 };
    }
}
// Because
const crazy = new CrazyClass(); // crazy would be {hello:123}
```

You can *declare* all the crazy JS out there with interfaces and even use them safely from TypeScript. Doesn't mean you can use TypeScript classes to implement them.


## Extending Types

It is possible to extend an `interface` (copy members from another type):

```typescript
interface X {
    a: string;
}
interface Y extends X {
    b: string;
}
```

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
