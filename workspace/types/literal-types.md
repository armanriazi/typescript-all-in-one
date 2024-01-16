## Literals
Literals are *exact* values that are JavaScript primitives. 


A Literal Type is a single element set from a collective type, it defines a very exact value that is a JavaScript primitive.

Literal Types in TypeScript are numbers, strings, and booleans.

Example of literals:

```typescript
const a = 'a'; // String literal type
const b = 1; // Numeric literal type
const c = true; // Boolean literal type
```

String, Numeric, and Boolean Literal Types are used in the union, type guard, and type aliases.
In the following example you can see a type alias union, `O` can be the only value specified and not any other string:

```typescript
type O = 'a' | 'b' | 'c';
```

### String Literals

You can use a string literal as a type. For example:

```ts
let foo: 'Hello';
```

Here we have created a variable called `foo` that *will only allow the literal value `'Hello'` to be assigned to it*. This is demonstrated below:

```ts
let foo: 'Hello';
foo = 'Bar'; // Error: "Bar" is not assignable to type "Hello"
```

They are not very useful on their own but can be combined in a type union to create a powerful (and useful) abstraction e.g.:

```ts
type CardinalDirection =
    | "North"
    | "East"
    | "South"
    | "West";

function move(distance: number, direction: CardinalDirection) {
    // ...
}

move(1,"North"); // Okay
move(1,"Nurth"); // Error!
```

### Other literal types
TypeScript also supports `boolean` and `number` literal types, e.g.: 

```ts
type OneToFive = 1 | 2 | 3 | 4 | 5;
type Bools = true | false;
```
