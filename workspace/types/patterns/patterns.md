`>tags:` [[readonly]] [[extend]]


### Defaulted declarations

Defaulted declarations are used when a variable or parameter is assigned a default value. This means that if no value is provided for that variable or parameter, the default value will be used instead.

```typescript
function greet(name: string = 'Anonymous'): void {
    console.log(`Hello, ${name}!`);
}
greet(); // Hello, Anonymous!
greet('John'); // Hello, John!
```

### Optional Chaining

The optional chaining operator `?.` works like the regular dot operator (`.`) for accessing properties or methods. However, it gracefully handles null or undefined values by terminating the expression and returning `undefined`, instead of throwing an error.

```typescript
type Person = {
    name: string;
    age?: number;
    address?: {
        street?: string;
        city?: string;
    };
};

const person: Person = {
    name: 'John',
};

console.log(person.address?.city); // undefined
```

### Nullish coalescing operator (??)

The nullish coalescing operator `??` returns the right-hand side value if the left-hand side is `null` or `undefined`; otherwise, it returns the left-hand side value.

```typescript
const foo = null ?? 'foo';
console.log(foo); // foo

const baz = 1 ?? 'baz';
const baz2 = 0 ?? 'baz';
console.log(baz); // 1
console.log(baz2); // 0
```