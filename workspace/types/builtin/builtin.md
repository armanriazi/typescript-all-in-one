
# Utility Types

Several built-in utility types can be used to manipulate types, below a list of the most common used:

# Unwrap

## Awaited\<T\>

Constructs a type recursively unwrap Promises.

```typescript
type A = Awaited<Promise<string>>; // string
```

# Type

## Partial\<T\>

Constructs a type with all properties of T set to optional.

```typescript
type Person = {
    name: string;
    age: number;
};

type A = Partial<Person>; // { name?: string | undefined; age?: number | undefined; }
```

## Required\<T\>

Constructs a type with all properties of T set to required.

```typescript
type Person = {
    name?: string;
    age?: number;
};

type A = Required<Person>; // { name: string; age: number; }
```

## Readonly\<T\>

Constructs a type with all properties of T set to readonly.

<!-- skip -->
```typescript
type Person = {
    name: string;
    age: number;
};

type A = Readonly<Person>;

const a: A = { name: 'Simon', age: 17 };
a.name = 'John'; // Invalid
```

## Record\<K, T\>

Constructs a type with a set of properties K of type T.

```typescript
type Product = {
    name: string;
    price: number;
};

const products: Record<string, Product> = {
    apple: { name: 'Apple', price: 0.5 },
    banana: { name: 'Banana', price: 0.25 },
};

console.log(products.apple); // { name: 'Apple', price: 0.5 }
```

## Pick\<T, K\>

Constructs a type by picking the specified properties K from T.

```typescript
type Product = {
    name: string;
    price: number;
};

type Price = Pick<Product, 'price'>; // { price: number; }
```

## Omit\<T, K\>

Constructs a type by omitting the specified properties K from T.

```typescript
type Product = {
    name: string;
    price: number;
};

type Name = Omit<Product, 'price'>; // { name: string; }
```

## Exclude\<T, U\>

Constructs a type by excluding all values of type U from T.

```typescript
type Union = 'a' | 'b' | 'c';
type MyType = Exclude<Union, 'a' | 'c'>; // b
```

## Extract\<T, U\>

Constructs a type by extracting all values of type U from T.

```typescript
type Union = 'a' | 'b' | 'c';
type MyType = Extract<Union, 'a' | 'c'>; // a | c
```

# Empty

## NonNullable\<T\>

Constructs a type by excluding null and undefined from T.

```typescript
type Union = 'a' | null | undefined | 'b';
type MyType = NonNullable<Union>; // 'a' | 'b'
```

# Class

## InstanceType\<T\>

Extracts the instance type of a class type T.

```typescript
class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}!`);
    }
}

type PersonInstance = InstanceType<typeof Person>;

const person: PersonInstance = new Person('John');

person.sayHello(); // Hello, my name is John!
```




# Function


## Parameters\<T\>

Extracts the parameter types of a function type T.

```typescript
type Func = (a: string, b: number) => void;
type MyType = Parameters<Func>; // [a: string, b: number]
```

## ConstructorParameters\<T\>

Extracts the parameter types of a constructor function type T.

```typescript
class Person {
    constructor(
        public name: string,
        public age: number
    ) {}
}
type PersonConstructorParams = ConstructorParameters<typeof Person>; // [name: string, age: number]
const params: PersonConstructorParams = ['John', 30];
const person = new Person(...params);
console.log(person); // Person { name: 'John', age: 30 }
```

## ReturnType\<T\>

Extracts the return type of a function type T.

```typescript
type Func = (name: string) => number;
type MyType = ReturnType<Func>; // number
```

## ThisType\<T\>

Servers as a market for a contextual `this` type.

<!-- skip -->
```typescript
type Logger = {
    log: (error: string) => void;
};

let helperFunctions: { [name: string]: Function } & ThisType<Logger> = {
    hello: function () {
        this.log('some error'); // Valid as "log" is a part of "this".
        this.update(); // Invalid
    },
};
```

## ThisParameterType\<T\>

Extracts the type of 'this' parameter from a function type T.

```typescript
interface Person {
    name: string;
    greet(this: Person): void;
}
type PersonThisType = ThisParameterType<Person['greet']>; // Person
```

## OmitThisParameter\<T\>

Removes the 'this' parameter from a function type T.

```typescript
function capitalize(this: String) {
    return this[0].toUpperCase + this.substring(1).toLowerCase();
}

type CapitalizeType = OmitThisParameter<typeof capitalize>; // () => string
```

# String

## Uppercase\<T\>

Make uppercase the name of the input type T.

```typescript
type MyType = Uppercase<'abc'>; // "ABC"
```

## Lowercase\<T\>

Make lowercase the name of the input type T.

```typescript
type MyType = Lowercase<'ABC'>; // "abc"
```

## Capitalize\<T\>

Capitalize the name of the input type T.

```typescript
type MyType = Capitalize<'abc'>; // "Abc"
```

## Uncapitalize\<T\>

Uncapitalize the name of the input type T.

```typescript
type MyType = Uncapitalize<'Abc'>; // "abc"
```
