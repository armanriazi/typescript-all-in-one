## Literals
Literals are *exact* values that are JavaScript primitives. 

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
