


# Types as Sets

In TypeScript, a type is a set of possible values. This set is also referred to as the domain of the type. Each value of a type can be viewed as an element in a set. A type establishes the constraints that every element in the set must satisfy to be considered a member of that set.
The primary task of TypeScript is to check and verify whether one set is a subset of another.

TypeScript supports various types of sets:

| Set term           | TypeScript                      | Notes                                                                                                              |
| ------------------ | ------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Empty set          | never                           | "never" contains anything apart itself                                                                             |
| Single element set | undefined / null / literal type |                                                                                                                    |
| Finite set         | boolean / union                 |                                                                                                                    |
| Infinite set       | string / number / object        |                                                                                                                    |
| Universal set      | any / unknown                   | Every element is a member of "any" and every set is a subset of it / "unknown" is a type-safe counterpart of "any" |

Here few examples:

| TypeScript            | Set term               | Example                                                                         |
| --------------------- | ---------------------- | ------------------------------------------------------------------------------- |
| never                 | ∅ (empty set)          | const x: never = 'x'; // Error: Type 'string' is not assignable to type 'never' |
|                       |                        |
| Literal type          | Single element set     | type X = 'X';                                                                   |
|                       |                        | type Y = 7;                                                                     |
|                       |                        |
| Value assignable to T | Value ∈ T (member of)  | type XY = 'X' \| 'Y';                                                           |
|                       |                        | const x: XY = 'X';                                                              |
|                       |                        |
| T1 assignable to T2   | T1 ⊆ T2 (subset of)    | type XY = 'X' \| 'Y';                                                           |
|                       |                        | const x: XY = 'X';                                                              |
|                       |                        | const j: XY = 'J'; // Type '"J"' is not assignable to type 'XY'.                |
|                       |                        |                                                                                 |
| T1 extends T2         | T1 ⊆ T2 (subset of)    | type X = 'X' extends string ? true : false;                                     |
|                       |                        |
| T1 \| T2              | T1 ∪ T2 (union)        | type XY = 'X' \| 'Y';                                                           |
|                       |                        | type JK = 1 \| 2;                                                               |
|                       |                        |
| T1 & T2               | T1 ∩ T2 (intersection) | type X = { a: string }                                                          |
|                       |                        | type Y = { b: string }                                                          |
|                       |                        | type XY = X & Y                                                                 |
|                       |                        | const x: XY = { a: 'a', b: 'b' }                                                |
|                       |                        |
| unknown               | Universal set          | const x: unknown = 1                                                            |


## undefined

```typescript
let array = ["123", "456", "789"];  // Initialize an array with 3 elements, "123", "456", and "789"
delete array[0]; // delete the element at index 0 of the array, in this case "123". Using delete leaves a hole in the index and can cause unexpected behavior in many situations. 

// Use a for loop to iterate over the array
for (let i = 0; i < array.length; i++) {
  checkAndPrintElement(array[i]); // call the checkAndPrintElement function with the current element of the array as a parameter
}

// checkAndPrintElement function 
function checkAndPrintElement(arrElement: string | undefined) {
  // check if the passed element is undefined
  if (arrElement === undefined) {
    console.log(`invalid array element`); // If the element is undefined, log the message "invalid array element"
  } else {
    console.log(`valid array element : ${arrElement}`); // Else if the element is defined, log the message "valid array element: " and the element
  }
}
```

`> Output:`
    :invalid array element
valid array element : 456
valid array element : 789

## null
Along with undefined, JavaScript also allows values to be set to null. Setting a value to null is intended to indicate that the variable is known but has no value, as opposed to undefined, where the variable has not been defined in the current scope.  undefined is often seen as something that happens automatically or by default.

```typescript
// function that takes a parameter of type `number` or `null`
function printValues(a: number | null) {
  console.log(`a = ${a}`);  // log the value of a
}

printValues(1); // call the function with a number value of 1
printValues(null); // call the function with a null value

```

`> Output:`
    :a = 1
a = null

## unknown

## never