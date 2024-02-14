# Assertion: Type mapping

`>tags:` [[Map]] [[Macro]]

```ts
type PREFIX<Type> = {
    [Property in keyof Type as `prefix_${string &
        Property}`]: () => Type[Property];
};
type X = {
    a: string;
    b: number;
};
type Y = PREFIX<X>;
```

In this example, the type J<Type> uses a mapped type with a template literal to remap the keys of Type. It creates new properties with a “prefix_” added to each key, and their corresponding values are functions returning the original property values.
Type mapping is akin macro in Rust Programming.
It is worth noting that when using a type assertion, TypeScript will not execute excess property checking. Therefore, it is generally preferable to use a Type Declaration when the structure of the object is known in advance.

Add in the keyof keyword, and we can create new types based on the properties of another type.
`transform properties`

`>tags:` [[Important]] [[map]]

```ts
interface IAbRequired {
  a: number;
  b: string;
}

// Create a variable ab that conforms to the IAbRequired interface
let ab: IAbRequired = {
  a: 1,
  b: "test",
};

// Define a generic type WeakInterface that makes all properties of a given type optional
type WeakInterface<T> = {
  [K in keyof T]?: T[K];
};

// Create a variable allOptional of type WeakInterface<IAbRequired> and initialize it as an empty object
let allOptional: WeakInterface<IAbRequired> = {};

```

## Partial, Required, and Readonly mapped types
Using mapped types that transform properties is seen as so fundamental that their definitions have been included in the standard TypeScript type definitions.

The WeakType type alias that we created earlier is actually called Partial, which can be seen from the type definition in lib.es5.d.ts as follows:

```ts
/**
 * Make all properties in T optional
 */
type Partial<T> = {
 [P in keyof T]?: T[P];
};
```

```ts
/**
 * Make all properties in T required
 */
type Required<T> = {
    [P in keyof T]-?: T[P];
};
```

```ts
/**
 * Make all properties in T readonly
 */
type Readonly<T> = {
 readonly [P in keyof T]: T[P];
};
```

## The Pick mapped type

The Pick mapped type is used to construct a type based on a subset of properties of another type.

```ts
interface IAbc {
  a: number;
  b: string;
  c: boolean;
}

// Define a new type PickAb using the Pick utility type to select only the "a" and "b" properties from the IAbc interface.
type PickAb = Pick<IAbc, "a" | "b">;
let pickAbObject: PickAb = {
  a: 1,
  b: "test",
};

console.log(pickAbObject);
```

## The Record mapped type

The final mapped type that we will explore is the Record mapped type, which is used to construct a type on the fly.

It is almost the opposite of the Pick mapped type and uses a **provided list of properties** as a string literal to define what properties the type must have.

Consider the following example:

```ts
type RecordedCd = Record<"c" | "d", number>;

// Declare a variable of type RecordedCd and assign it an object with properties "c" and "d"
let recordedCdVar: RecordedCd = {
  c: 1,
  d: 1,
};
```