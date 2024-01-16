# String based enums

[TypeScript enums are number based](../enums.md). You can use string literals with union types to mock a string based enum as we did in the `CardinalDirection` example above. You can even generate a `Key:Value` structure using the following function: 

Generate the literal type union using `keyof typeof`. Here is a complete example:

`>tags:` #Important [[Inference]] [[Literal]] [[Type]] [[Enum]]

```ts
/** Utility function to create a K:V from a list of strings */
function strEnum<T extends string>(o: Array<T>): {[K in T]: K} {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}

/**
  * Sample create a string enum
  */

/** Create a K:V */
const Direction = strEnum([
  'North',
  'South',
  'East',
  'West'
])
/** Create a Type */
type Direction = keyof typeof Direction;

/** 
  * Sample using a string enum
  */
let sample: Direction;

sample = Direction.North; // Okay
sample = 'North'; // Okay
sample = 'AnythingElse'; // ERROR!
```
