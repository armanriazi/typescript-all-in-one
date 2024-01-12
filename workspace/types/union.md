## Union types
They use the **pipe symbol (|)** to list all of the types that will make up this new type.

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

`> Output:`

```md
obj = 1
obj = string value
```