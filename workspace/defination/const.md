# const

`const` is a very welcomed addition offered by ES6 / TypeScript. It allows you to be immutable with variables. This is good from a documentation as well as a runtime perspective. To use const just replace `var` with `const`:

```typescript
const foo = 123;
```


[[Error_TS2588]]
[[Error_Const]]

```typescript
// Declare a variable called constValue with a type of string and assign it the value "this should not be changed"
const constValue = "this should not be changed";

// Attempt to assign a new value "updated" to constValue
constValue = "updated";
```

> The syntax is much better (IMHO) than other languages that force the user to type something like `let constant foo` i.e. a variable + behavior specifier.

`const` is a good practice for both readability and maintainability and avoids using *magic literals* e.g.

```typescript
// Low readability
if (x > 10) {
}

// Better!
const maxRows = 10;
if (x > maxRows) {
}
```

## const declarations must be initialized
The following is a compiler error:

[[Error_TS7005]]

```typescript
const foo; // ERROR: const declarations must be initialized
```

## Left hand side of assignment cannot be a constant
Constants are immutable after creation, so if you try to assign them to a new value it is a compiler error:

[[Error_TS2588]]

```typescript
const foo = 123;
foo = 456; // ERROR: Left-hand side of an assignment expression cannot be a constant
```

## Block Scoped
A `const` is block scoped like we saw with [`let`](./let.md):

```typescript
const foo = 123;
if (true) {
    const foo = 456; // Allowed as its a new variable limited to this `if` block
}
```

## Deep immutability
A `const` works with object literals as well, as far as protecting the variable *reference* is concerned:
What can you do in Typescript to ensure that a property isn’t mutated?Add readonly

```typescript
const foo = { bar: 123 };
foo = { bar: 456 }; // ERROR : Left hand side of an assignment expression cannot be a constant
```

However, it still allows sub properties of objects to be mutated, as shown below:

```typescript
const foo = { bar: 123 };
foo.bar = 456; // Allowed!
console.log(foo); // { bar: 456 }
```

## Prefer const

Always use `const`, unless you plan to either lazily initialization of a variable, or do a reassignment (use `let` for those cases).
