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
