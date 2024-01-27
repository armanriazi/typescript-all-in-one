
## Assertion Functions

In TypeScript, assertion functions are functions that indicate the verification of a specific condition based on their return value. In their simplest form, an assert function examines a provided predicate and raises an error when the predicate evaluates to false.

```typescript
function isNumber(value: unknown): asserts value is number {
    if (typeof value !== 'number') {
        throw new Error('Not a number');
    }
}
```

Or can be declared as function expression:

```typescript
type AssertIsNumber = (value: unknown) => asserts value is number;
const isNumber: AssertIsNumber = value => {
    if (typeof value !== 'number') {
        throw new Error('Not a number');
    }
};
```

Assertion functions share similarities with type guards. **Type guards were initially introduced to perform runtime checks** and ensure the type of a value within a specific scope.
Specifically, a type guard is a function that **evaluates a type predicate and returns a boolean value indicating whether the predicate is true or false**. 

This differs slightly from **assertion functions,where the intention is to throw an error** rather than returning false when the predicate is not satisfied.

Example of type guard:

```typescript
const isNumber = (value: unknown): value is number => typeof value === 'number';
```