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