### Structural Typing

TypeScript is based on a structural type system. This means that the compatibility and equivalence of types are determined by the type's actual structure or definition, rather than its name or place of declaration, as in nominative type systems like C# or C.

TypeScript's structural type system was designed based on how JavaScript's dynamic duck typing system works during runtime.

The following example is valid TypeScript code. As you can observe, "X" and "Y" have the same member "a," even though they have different declaration names. The types are determined by their structures, and in this case, since the structures are the same, they are compatible and valid.

```typescript
type X = {
    a: string;
};
type Y = {
    a: string;
};
const x: X = { a: 'a' };
const y: Y = x; // Valid
```

## Structuring

These simple rules also work in the presence of **structuring** (object literal creation). For example in the following case the type of `foo` is inferred to be `{a:number, b:number}`

```typescript
let foo = {
    a: 123,
    b: 456
};
// foo.a = "hello"; // Would Error: cannot assign `string` to a `number`
```

Similarly for arrays:

```typescript
const bar = [1,2,3];
// bar[0] = "hello"; // Would error: cannot assign `string` to a `number`
```

And of course any nesting:

```typescript
let foo = {
    bar: [1, 3, 4]
};
// foo.bar[0] = 'hello'; // Would error: cannot assign `string` to a `number`
```


## Erased Structural Types

In TypeScript, objects do not have to match a specific, exact type. For instance, if we create an object that fulfills an interface's requirements, we can utilize that object in places where that interface is required, even if there was no explicit connection between them.
Example:

```typescript
type NameProp1 = {
    prop1: string;
};

function log(x: NameProp1) {
    console.log(x.prop1);
}

const obj = {
    prop2: 123,
    prop1: 'Origin',
};

log(obj); // Valid
```