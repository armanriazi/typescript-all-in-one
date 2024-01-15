
### Type Widening

Type widening is the process in which TypeScript assigns a type to a variable initialized when no type annotation was provided. It allows narrow to wider types but not vice versa.
In the following example:

<!-- skip -->
```typescript
let x = 'x'; // TypeScript infers as string, a wide type
let y: 'y' | 'x' = 'y'; // y types is a union of literal types
y = x; // Invalid Type 'string' is not assignable to type '"x" | "y"'.
```

TypeScript assigns `string` to `x` based on the single value provided during initialization (`x`), this is an example of widening.

TypeScript provides ways to have control of the widening process, for instance using "const".

`>tags:` [[Const]]

### Const

Using the `const` keyword when declaring a variable results in a narrower type inference in TypeScript.

For example:

```typescript
const x = 'x'; // TypeScript infers the type of x as 'x', a narrower type
let y: 'y' | 'x' = 'y';
y = x; // Valid: The type of x is inferred as 'x'
```

By using `const` to declare the variable x, its type is narrowed to the specific literal value 'x'. Since the type of x is narrowed, it can be assigned to the variable y without any error.
The reason the type can be inferred is because `const` variables cannot be reassigned, so their type can be narrowed down to a specific literal type, in this case, the literal type 'x'.

#### Const Modifier on Type Parameters

From version 5.0 of TypeScript, it is possible to specify the `const` attribute on a generic type parameter. This allows for inferring the most precise type possible. Let's see an example without using `const`:

```typescript
function identity<T>(value: T) {
    // No const here
    return value;
}
const values = identity({ a: 'a', b: 'b' }); // Type infered is: { a: string; b: string; }
```

As you can see, the properties `a` and `b` are inferred with a type of `string`   .

Now, let's see the difference with the `const` version:

```typescript
function identity<const T>(value: T) {
    // Using const modifier on type parameters
    return value;
}
const values = identity({ a: 'a', b: 'b' }); // Type infered is: { a: "a"; b: "b"; }
```

Now we can see that the properties `a` and `b` are inferred as `const`, so `a` and `b` are treated as string literals rather than just `string` types.

#### Const assertion

This feature allows you to declare a variable with a more precise literal type based on its initialization value, signifying to the compiler that the value should be treated as an immutable literal. Here are a few examples:

On a single property:

```typescript
const v = {
    x: 3 as const,
};
v.x = 3;
```

On an entire object:

```typescript
const v = {
    x: 1,
    y: 2,
} as const;
```

This can be particularly useful when defining the type for a tuple:

```typescript
const x = [1, 2, 3]; // number[]
const y = [1, 2, 3] as const; // Tuple of readonly [1, 2, 3]
```



