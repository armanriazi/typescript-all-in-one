
### Type Inference

TypeScript can infer types when no annotation is provided during:

- [x] Variable initialization.
- [x] Member initialization.
- [x] Setting defaults for parameters.
- [x] Function return type.

For example:

```typescript
let x = 'x'; // The type inferred is string
```

The TypeScript compiler analyzes the value or expression and determines its type based on the available information.

Quite commonly you get an error like `Type string is not assignable to type "foo"`. The following example demonstrates this.

```typescript
function iTakeFoo(foo: 'foo') { }
const test = {
  someProp: 'foo'
};
iTakeFoo(test.someProp); // Error: Argument of type string is not assignable to parameter of type 'foo'
```

This is because `test` is inferred to be of type `{someProp: string}`. The fix here is to use a simple type assertion to tell TypeScript the literal you want it to infer as shown below: 

```typescript
function iTakeFoo(foo: 'foo') { }
const test = {
  someProp: 'foo' as 'foo'
};
iTakeFoo(test.someProp); // Okay!
```

or use a type annotation that helps TypeScript infer the correct thing at the point of declaration: 

```typescript
function iTakeFoo(foo: 'foo') { }
type Test = {
  someProp: 'foo',
}
const test: Test = { // Annotate - inferred someProp is always === 'foo'
  someProp: 'foo' 
}; 
iTakeFoo(test.someProp); // Okay!
```

### Use cases
Valid use cases for string literal types are string based enum.


## Literal Inference

Literal Inference is a feature in TypeScript that allows the type of a variable or parameter to be inferred based on its value.

In the following example we can see that TypeScript considers `x` a literal type as the value cannot be changed any time later, when instead `y` is inferred as string as it can be modified any time later.

```typescript
const x = 'x'; // Literal type of 'x', because this value cannot be changed
let y = 'y'; // Type string, as we can change this value
```

In the following example we can see that `o.x` was inferred as a `string` (and not a literal of `a`) as TypeScript considers that the value can be changed any time later.

`>tags:` [[Error_TS2345]] [[Error_assignable]] : Argument of type 'string' is not assignable to parameter of type 'X'

As you can see the code throws an error when passing o.x to fn as X is a narrower type.

We can solve this issue by using type assertion using const or the X type:

```typescript
let oo = {
    x: 'a' as X,// as const,
};
console.log(fn(oo.x));
```

<!-- skip -->
```typescript
type X = 'a' | 'b';

let o = {
    x: 'a', // This is a wider string
};

const fn = (x: X) => `${x}-foo`;

console.log(fn(o.x)); // Argument of type 'string' is not assignable to parameter of type 'X'
```

As you can see the code throws an error when passing `o.x` to `fn` as X is a narrower type.

We can solve this issue by using type assertion using `const` or the `X` type:

<!-- skip -->
```typescript
let o = {
    x: 'a' as const,
};
```

or:

<!-- skip -->
```typescript
let o = {
    x: 'a' as X,
};
```


