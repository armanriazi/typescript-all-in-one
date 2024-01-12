# AS
`What is the advantage of using the as keyword in a type assertion?`

It provides a way to override the inferred type of a variable. `{ id: 1, name: "item1" } as any;`

# Conflict TS and JS
TypeScript was designed to detect possible exceptions that can occur at runtime during compilation time by having the developer define the intent with type annotations. In addition, TypeScript can also catch issues if no type annotation is provided. For instance, the following code snippet does not specify any TypeScript types:

<!-- skip -->
```typescript
const items = [{ x: 1 }, { x: 2 }];
const result = items.filter(item => item.y);
```

[[Error_Property]]
In this case, TypeScript detects an error and reports:

```text
Property 'y' does not exist on type '{ x: number; }'.
```

TypeScript's type system is largely influenced by the runtime behavior of JavaScript. For example, the addition operator (+), which in JavaScript can either perform string concatenation or numeric addition, is modeled in the same way in TypeScript:

```typescript
const result = '1' + 1; // Result is of type string
```

The team behind TypeScript has made a deliberate decision to flag unusual usage of JavaScript as errors. For instance, consider the following valid JavaScript code:

<!-- skip -->
```typescript
const result = 1 + true; // In JavaScript, the result is equal 2
```

[[Error_Operator]]
However, TypeScript throws an error:

```text
Operator '+' cannot be applied to types 'number' and 'boolean'.
```

This error occurs because TypeScript strictly enforces type compatibility, and in this case, it identifies an invalid operation between a number and a boolean.

The TypeScript compiler has two main responsibilities: checking for type errors and compiling to JavaScript. These two processes are independent of each other. Types do not affect the execution of the code in a JavaScript engine, as they are completely erased during compilation. TypeScript can still output JavaScript even in the presence of type errors.
Here is an example of TypeScript code with a type error:

<!-- skip -->
```typescript
const add = (a: number, b: number): number => a + b;
const result = add('x', 'y'); // Argument of type 'string' is not assignable to parameter of type 'number'.
```

[[Error_Parameter]]
However, it can still produce executable JavaScript output:

<!-- skip -->
```typescript
'use strict';
const add = (a, b) => a + b;
const result = add('x', 'y'); // xy
```
`> Output:`

```md
error TS7006: Parameter 'b' implicitly has an 'any' type.
```