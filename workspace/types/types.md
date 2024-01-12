

# Any
TypeScript introduces the **:any** type for such occasions. Specifying that an object has a type of any will, in essence, **remove the TypeScript strict type checking**. Used for **backward compatibility with JavaScript**. In short, avoid the any type at any cost.

# S.F.I.A.T
meaning that **using the any type, in most cases, is unnecessary**. We use an acronym within our programming teams, which is Simply Find an Interface for the Any Type, pronounced sveat or sweat.

# Inferred typing
Is a feature of TypeScript that allows the type of a variable or expression to be **determined based on the context** in which it appears rather than being explicitly specified with a type annotation.

# Duck typing
Checks the compatibility of an object with a particular type based on **the presence of certain properties or methods rather than the object’s actual type.**
In TypeScript, objects are considered compatible based on their shape rather than the order of their properties.

# Explicit casting
uses the angled bracket syntax, that is, **< type >**, surrounding the name of the type.  `<any>{ id: 1, name: "item1" }`

# Let vs var vs const
TypeScript uses the *const keyword*, **which was introduced in ES6**, in order to accomplish this.
Tip: It is best practice to use the let keyword to define variables and not to use the var keyword at all. By using *let keyword*, we are being **more explicit** about the intended use of these variables, which will help the compiler to pick up any mistakes in our code **where these rules are broken.**

## Strong Type vs Dynamic Type
**JavaScript is not strongly typed.** It is a language that is very dynamic, as it allows objects to change their types, properties, and behavior on the fly. **TypeScript, however, is strongly typed** and, as such, will enforce rules that govern how we use variables, functions, and objects.

**TypeScript introduces a simple notation using the colon ( : )** symbol to indicate what type a variable should be.

## Var

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

`> Output:`

```md
index = 2
index = 2
```

## Let

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

`> Output:`

```md
index = 2
index = 0
```


# Type Aliases

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

# Comparison Rules

The TypeScript comparison process is recursive and executed on types nested at any level.

A type "X" is compatible with "Y" if "Y" has at least the same members as "X".

```typescript
type X = {
    a: string;
};
type Y = {
    a: string;
    b: string;
};
const y = { a: 'A', b: 'B' }; // Valid, as it has at least the same members as X
const r: X = y;
```

