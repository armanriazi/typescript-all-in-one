# Type Inference in TypeScript

TypeScript can infer (and then check) the type of a variable based on a few simple rules. Because these rules
are simple you can train your brain to recognize safe / unsafe code (it happened for me and my teammates quite quickly).

> The types flowing is just how I imagine in my brain the flow of type information.

## Variable Definition

Types of a variable are inferred by definition.

```typescript
let foo = 123; // foo is a `number`
let bar = "Hello"; // bar is a `string`
foo = bar; // Error: cannot assign `string` to a `number`
```

This is an example of types flowing from right to left.

## Function Return Types

The return type is inferred by the return statements e.g. the following function is inferred to return a `number`.

```typescript
function add(a: number, b: number) {
    return a + b;
}
```

This is an example of types flowing bottom out.

## Assignment

The type of function parameters / return values can also be inferred by assignment e.g. here we say that `foo` is an `Adder`, that makes `number` the type of `a` and `b`.

```typescript
type Adder = (a: number, b: number) => number;
let foo: Adder = (a, b) => a + b;
```

This fact can be demonstrated by the below code which raises an error as you would hope:

```typescript
type Adder = (a: number, b: number) => number;
let foo: Adder = (a, b) => {
    a = "hello"; // Error: cannot assign `string` to a `number`
    return a + b;
}
```

This is an example of types flowing from left to right.

The same *assignment* style type inference works if you create a function for a callback argument. After all an `argument -> parameter`is just another form of variable assignment.

```typescript
type Adder = (a: number, b: number) => number;
function iTakeAnAdder(adder: Adder) {
    return adder(1, 2);
}
iTakeAnAdder((a, b) => {
    // a = "hello"; // Would Error: cannot assign `string` to a `number`
    return a + b;
})
```

### More Advanced Inferences

When multiple expressions are used in type inference, TypeScript looks for the "best common types." For instance:

```typescript
let x = [1, 'x', 1, null]; // The type inferred is: (string | number | null)[]
```

If the compiler cannot find the best common types, it returns a union type. For example:

```typescript
let x = [new RegExp('x'), new Date()]; // Type inferred is: (RegExp | Date)[]
```

TypeScript utilizes "contextual typing" based on the variable's location to infer types. In the following example, the compiler knows that `e` is of type `MouseEvent` because of the `click` event type defined in the lib.d.ts file, which contains ambient declarations for various common JavaScript constructs and the DOM:

```typescript
window.addEventListener('click', function (e) {}); // The inferred type of e is MouseEvent
```
