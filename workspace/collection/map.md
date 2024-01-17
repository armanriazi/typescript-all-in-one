
## Mapped Types

Mapped Types in TypeScript allow you to create new types based on an existing type by transforming each property using a mapping function. By mapping existing types, you can create new types that represent the same information in a different format. To create a mapped type, you access the properties of an existing type using the `keyof` operator and then alter them to produce a new type.
In the following example:

```typescript
type MyMappedType<T> = {
    [P in keyof T]: T[P][];
};
type MyType = {
    foo: string;
    bar: number;
};
type MyNewType = MyMappedType<MyType>;
const x: MyNewType = {
    foo: ['hello', 'world'],
    bar: [1, 2, 3],
};
```

we define MyMappedType to map over T's properties, creating a new type with each property as an array of its original type. Using this, we create MyNewType to represent the same info as MyType, but with each property as an array.

## Mapped Type Modifiers

Mapped Type Modifiers in TypeScript enable the transformation of properties within an existing type:

- [x] `readonly` or `+readonly`: This renders a property in the mapped type as read-only.
- [x] `-readonly`: This allows a property in the mapped type to be mutable.
- [x] `?`: This designates a property in the mapped type as optional.

`>tags:` [[Important]] [[Map]] [[modifier]] [[readonly]]

Examples:

```typescript
type ReadOnly<T> = { readonly [P in keyof T]: T[P] }; // All properties marked as read-only

type Mutable<T> = { -readonly [P in keyof T]: T[P] }; // All properties marked as mutable

type MyPartial<T> = { [P in keyof T]?: T[P] }; // All properties marked as optional
```
