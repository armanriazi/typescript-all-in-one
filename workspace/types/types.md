
`What is the advantage of using the as keyword in a type assertion?`
    :It provides a way to override the inferred type of a variable. `{ id: 1, name: "item1" } as any;`

## Any
TypeScript introduces the **:any** type for such occasions. Specifying that an object has a type of any will, in essence, remove the TypeScript strict type checking. Used for backward compatibility with JavaScript. In short, avoid the any type at any cost.

## S.F.I.A.T
meaning that using the any type, in most cases, is unnecessary. We use an acronym within our programming teams, which is Simply Find an Interface for the Any Type, pronounced sveat or sweat.

# Inferred typing
Is a feature of TypeScript that allows the type of a variable or expression to be determined based on the context in which it appears rather than being explicitly specified with a type annotation.

# Duck typing
checks the compatibility of an object with a particular type based on the presence of certain properties or methods rather than the object’s actual type.
We will explore these concepts in greater detail and see how they can be used in practice.  In TypeScript, objects are considered compatible based on their shape rather than the order of their properties.

## Explicit casting
uses the angled bracket syntax, that is, < and >, surrounding the name of the type.  `<any>{ id: 1, name: "item1" }`

## Let vs var vs const
TypeScript uses the const keyword, which was introduced in ES6, in order to accomplish this.
Tip: It is best practice to use the let keyword to define variables and not to use the var keyword at all. By using let, we are being more explicit about the intended use of these variables, which will help the compiler to pick up any mistakes in our code where these rules are broken.

### Var

```typescript
// Declare a variable called index with a type of number and assign it the value 0
var index: number = 0;

// If index is equal to 0, create a new block scope with a new variable also called index, but with a type of number and value of 2, and log its value
if (index == 0) {
  var index: number = 2;
  console.log(`index = ${index}`);
}

// Log the value of index
console.log(`index = ${index}`);

```

> `Output`

```md
index = 2
index = 2
```

### Let

```typescript
// Declare a variable called index with a type of number and assign it the value 0
let index: number = 0;

// If index is equal to 0, create a new block scope with a new variable also called index, but with a type of number and value of 2, and log its value
if (index == 0) {
  let index: number = 2;
  console.log(`index = ${index}`);
}

// Log the value of index
console.log(`index = ${index}`);

```

> `Output`

```md
index = 2
index = 0
```

### Const

```typescript
// Declare a variable called constValue with a type of string and assign it the value "this should not be changed"
const constValue = "this should not be changed";

// Attempt to assign a new value "updated" to constValue
constValue = "updated";

```

> `Output`

```md
index.ts(5,1): error TS2588: Cannot assign to 'constValue' because it is a constant.
```

## Union types
They use the pipe symbol (|) to list all of the types that will make up this new type.

```typescript
// Declare a function called printObject that takes in a parameter called obj with a type of string or number
function printObject(obj: string | number) {
  // Log the value of obj
  console.log(`obj = ${obj}`);
}

// Call printObject with a number value
printObject(1);

// Call printObject with a string value
printObject("string value");

```

> `Output`

```md
obj = 1
obj = string value
```

## Type guard
A type guard is an expression that performs a check on our type and then guarantees that type within its scope. Let’s rewrite our previous function with a type guard as follows:

```ts
// Declare a function called addWithTypeGuard that takes in two parameters, arg1 and arg2, with types of string or number
function addWithTypeGuard(
  arg1: string | number,
  arg2: string | number
) {
  // Check if arg1 is a string
  if (typeof arg1 === "string") {
    // If it is, log that it is a string and return the sum of arg1 and arg2 as a string
    console.log(`arg1 is of type string`);
    return arg1 + arg2;
  }
  // Check if both arg1 and arg2 are numbers
  if (typeof arg1 === "number" && typeof arg2 === "number") {
    // If they are, log that they are numbers and return the sum of arg1 and arg2 as a number
    console.log(`arg1 and arg2 are numbers`);
    return arg1 + arg2;
  }
  // If arg1 and arg2 are not both numbers, log that they are being treated as strings and return their concatenation as a string
  console.log(`default return treat both as strings`)
  return arg1.toString() + arg2.toString();
}

```

> `Output` Succeeded

## Type Aliases

```typescript
// Define a type alias for a string or number
type StringOrNumber = string | number;

// Declare a function that takes two arguments, both of type 'StringOrNumber'
function addWithTypeAlias(
  arg1: StringOrNumber,
  arg2: StringOrNumber
) {
  // Convert both arguments to strings and return the concatenation
  return arg1.toString() + arg2.toString();
}

console.log(addWithTypeAlias(1, 2)); // Output: '12'
console.log(addWithTypeAlias('Hello', ' World')); // Output: 'Hello World'

```

## Primitive types

### undefined

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

`Output`
    :invalid array element
valid array element : 456
valid array element : 789

### null
Along with undefined, JavaScript also allows values to be set to null. Setting a value to null is intended to indicate that the variable is known but has no value, as opposed to undefined, where the variable has not been defined in the current scope.  undefined is often seen as something that happens automatically or by default.

```typescript
// function that takes a parameter of type `number` or `null`
function printValues(a: number | null) {
  console.log(`a = ${a}`);  // log the value of a
}

printValues(1); // call the function with a number value of 1
printValues(null); // call the function with a null value

```

`Output`
    :a = 1
a = null

### number
### string
### boolean
### never
### unknown


### Structural Typing

TypeScript is based on a structural type system. This means that the compatibility and equivalence of types are determined by the type's actual structure or definition, rather than its name or place of declaration, as in nominative type systems like C# or C.

TypeScript's structural type system was designed based on how JavaScript's dynamic duck typing system works during runtime.

The following example is valid TypeScript code. As you can observe, "X" and "Y" have the same member "a," even though they have different declaration names. The types are determined by their structures, and in this case, since the structures are the same, they are compatible and valid.

```typescript
type X = {
    a: string;
};
type Y = {
    a: string;
};
const x: X = { a: 'a' };
const y: Y = x; // Valid
```

### TypeScript Fundamental Comparison Rules

The TypeScript comparison process is recursive and executed on types nested at any level.

A type "X" is compatible with "Y" if "Y" has at least the same members as "X".

```typescript
type X = {
    a: string;
};
const y = { a: 'A', b: 'B' }; // Valid, as it has at least the same members as X
const r: X = y;
```

