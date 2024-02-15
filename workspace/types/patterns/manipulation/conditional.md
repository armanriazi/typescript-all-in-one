
## Conditional Types


Allow you to create types based on some conditions:

```typescript
type ExtractParam<T> = T extends (param: infer P) => any ? P : never;
type MyFunction = (name: string) => number;
type ParamType = ExtractParam<MyFunction>; // string
```


Conditional Types are a way to create a type that depends on a condition, where the type to be created is determined based on the result of the condition. They are defined using the `extends` keyword and a ternary operator to conditionally choose between two types.

```typescript
type IsArray<T> = T extends any[] ? true : false;
const myArray = [1, 2, 3];
const myNumber = 42;
type IsMyArrayAnArray = IsArray<typeof myArray>; // Type true
type IsMyNumberAnArray = IsArray<typeof myNumber>; // Type false
```

## Distributive Conditional Types

Distributive Conditional Types are a feature that allow a type to be distributed over a union of types, by applying a transformation to each member of the union individually.
This can be especially useful when working with mapped types or higher-order types.

```typescript
type Nullable<T> = T extends any ? T | null : never;
type NumberOrBool = number | boolean;
type NullableNumberOrBool = Nullable<NumberOrBool>; // number | boolean | null
```

## infer Type Inference in Conditional Types

The `infer`keyword is used in conditional types to infer (extract) the type of a generic parameter from a type that depends on it. This allows you to write more flexible and reusable type definitions.

```typescript
type ElementType<T> = T extends (infer U)[] ? U : never;
type Numbers = ElementType<number[]>; // number
type Strings = ElementType<string[]>; // string
```

- [x] InferredFromListType
- [x] InferredFromFnParam
- [x] InferredFromFnReturnType
- [x] InferredFromFnReturnType
- [x] InferredTypeFromArray

## Predefined Conditional Types

In TypeScript, Predefined Conditional Types are built-in conditional types provided by the language. They are designed to perform common type transformations based on the characteristics of a given type.

- [x] `Exclude<UnionType, ExcludedType>`: This type removes all the types from Type that are assignable to ExcludedType.
- [x] `Extract<Type, Union>`: This type extracts all the types from Union that are assignable to Type.
- [x] `NonNullable<Type>`: This type removes null and undefined from Type.
- [x] `ReturnType<Type>`: This type extracts the return type of a function Type.
- [x] `Parameters<Type>`: This type extracts the parameter types of a function Type.
- [x] `Required<Type>`: This type makes all properties in Type required.
- [x] `Partial<Type>`: This type makes all properties in Type optional.
- [x] `Readonly<Type>`: This type makes all properties in Type readonly.