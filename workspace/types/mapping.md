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