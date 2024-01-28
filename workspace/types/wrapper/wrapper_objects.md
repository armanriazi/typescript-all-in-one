## Wapper Objects

### Boxed types

Boxed types refer to the **wrapper objects** that are used to represent **primitive types as objects**. These wrapper objects *provide additional functionality and methods that are not available directly on the primitive values.*

When you access a method like `charAt` or `normalize` on a `string` primitive, JavaScript wraps it in a `String` object, calls the method, and then throws the object away.

Demonstration:

```typescript
const originalNormalize = String.prototype.normalize;
String.prototype.normalize = function () {
    console.log(this, typeof this);
    return originalNormalize.call(this);
};
console.log('\u0041'.normalize());
```

TypeScript represents this differentiation by providing separate types for the primitives and their corresponding object wrappers:

- [x] string => String
- [x] number => Number
- [x] boolean => Boolean
- [x] symbol => Symbol
- [x] bigint => BigInt

> The boxed types are usually not needed. Avoid using boxed types and instead use type for the primitives,  for instance `string` instead of `String`.