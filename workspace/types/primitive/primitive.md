## Primitive Types

TypeScript supports 7 primitive types. A primitive data type refers to a type that is not an object and does not have any methods associated with it. In TypeScript, all primitive types are immutable, meaning their values cannot be changed once they are assigned.

### Symbols

Symbols are a primitive data type that represents an immutable value which is guaranteed to be globally unique throughout the lifetime of the program.

Symbols can be used as keys for object properties and provide a way to create non-enumerable properties.

```typescript
const key1: symbol = Symbol('key1');
const key2: symbol = Symbol('key2');

const obj = {
    [key1]: 'value 1',
    [key2]: 'value 2',
};

console.log(obj[key1]); // value 1
console.log(obj[key2]); // value 2
```

In WeakMaps and WeakSets, symbols are now permissible as keys.

Symbols are unique identifiers that can be used as property keys in objects to prevent naming conflicts.

```typescript
type Obj = {
    [sym: symbol]: number;
};

const a = Symbol('a');
const b = Symbol('b');
let obj: Obj = {};
obj[a] = 123;
obj[b] = 456;

console.log(obj[a]); // 123
console.log(obj[b]); // 456
```

### string

The `string` primitive type stores textual data, and the value is always double or single-quoted.

```typescript
const x: string = 'x';
const y: string = 'y';
```

Strings can span multiple lines if surrounded by the backtick (`) character:

```typescript
let sentence: string = `xxx,yyy`;
```

### boolean

The `boolean` data type in TypeScript stores a binary value, either `true` or `false`.

```typescript
const isReady: boolean = true;
```

### number

A `number` data type in TypeScript is represented with a 64-bit floating point value. A `number` type can represent integers and fractions.
TypeScript also supports hexadecimal, binary, and octal, for instance:

```typescript
const decimal: number = 10;
const hexadecimal: number = 0xa00d; // Hexadecimal starts with 0x
const binary: number = 0b1010; // Binary starts with 0b
const octal: number = 0o633; // Octal starts with 0o
```

### bigInt

A `bigInt` represents numeric values that are very large (253 – 1) and cannot be represented with a `number`.

A `bigInt` can be created by calling the built-in function `BigInt()` or by adding `n` to the end of any integer numeric literal:

```typescript
const x: bigint = BigInt(9007199254740991);
const y: bigint = 9007199254740991n;
```

Notes:

- [x] `bigInt` values cannot be mixed with `number` and cannot be used with built-in `Math`, they must be coerced to the same type.
- [x] `bigInt` values are available only if target configuration is ES2020 or higher.