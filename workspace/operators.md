
# Type checkers

## Optional chain ?

```TypeScript
// optional chain will be checking undefined and null
/*
if (obj?.nestedProperty?.name) is equal with:
if (obj != undefined
    && obj.nestedProperty != undefined
    && obj.nestedProperty.name)
*/    
if (obj?.nestedProperty?.name) {
    // If the above check passes, log the value of the "name" property
    console.log(`name = ${obj.nestedProperty.name}`)
  } else {
    console.log(`name not found or undefined`);
}
```

## Nullish coalescing ??

```TypeScript
console.log(`a : ${a ?? `undefined or null`}`);
```

## Definite assignment for global varible(!)


```TypeScript
// Log the current value of the "globalString" variable to the console, using the definite assignment assertion syntax to indicate that the variable has been assigned a value before this point.
console.log(`globalString = ${globalString!}`);
```
// Alternative way

```TypeScript
// Declare a variable named "globalString" with the type of "string" and with a definite assignment assertion operator (!) 
var globalString!: string;
```