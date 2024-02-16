# Common Errors
In this section we explain a number of common error codes that users experience in the real world.


# Object and Type

## S1

```TypeScript
// Declare a variable 'nameIdObject' and initialize it with an object that has a 'name' property, an 'id' property, and a 'print' method
var nameIdObject = { name: "myName", id: 1, print() {} };
// Assign a new object to 'nameIdObject'. This object has a 'name' property and an 'id' property, but it does not have the 'print' method
// that the original object had.
nameIdObject = { id: 3, name: "thirdName" };
```

> `Output`

```md
index.ts(5,1): error TS2741: Property 'print' is missing in type '{ id: number; name: string; }' but required in type '{ name: string; id: number; print(): void; }'.
```
> `Solution`

```TypeScript
// Declare a variable called item1 with a type of any and assign to it an object literal that has properties id and name
var item1: any = { id: 1, name: "item1" }

// Assign a new object literal to item1 with only an id property
item1 = { id: 2 };
```

## S2

```TypeScript
// Declare a variable 'obj1' and initialize it with an object that has an 'id' property and a 'print' method
var obj1 = { id: 1, print() { } };

// Declare a variable 'obj2' and initialize it with an object that has an 'id' property, a 'print' method, and a 'select' method
var obj2 = { id: 2, print() { }, select() { } }

// Attempt to assign 'obj2' to 'obj1'. This won't cause a type error because 'obj2' has all of the methods that are present in the type of 'obj1'
obj1 = obj2;

// Attempt to assign 'obj1' to 'obj2'. This will cause a type error because 'obj1' is missing the 'select' method that is present in the type of 'obj2'
obj2 = obj1;
```

> `Notice`

The duck typing examples used here are also using inferred typing, so the type of an object is inferred from when it is first assigned.

> `Output`

```md
index.ts(11,1): error TS2741: Property 'select' is missing in type '{ id: number; print(): void; }' but required in type '{ id: number; print(): void; select(): void; }'.
```

## S3

```TypeScript
// Declare a function called addWithUnion that takes in two parameters, arg1 and arg2, with types of string or number
function addWithUnion(
  arg1: string | number,
  arg2: string | number
) {
  // Return the sum of arg1 and arg2
  return arg1 + arg2;
}
```

> `Output`

```md
index.ts(7,10): error TS2365: Operator '+' cannot be applied to types 'string | number' and 'string | number'.
```

> `Solution`
Adding guards

```TypeScript
// Declare a function called addWithTypeGuard that takes in two parameters, arg1 and arg2, with types of string or number
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

console.log(` "1", "2" = ${addWithTypeGuard("1", "2")}`);
console.log(` 1 , 2 = ${addWithTypeGuard(1, 2)}`);
console.log(` 1 , "2" = ${addWithTypeGuard(1, "2")}`);
```

`Output`
    :arg1 is of type string
 "1", "2" = 12
arg1 and arg2 are numbers
 1 , 2 = 3
default return treat both as strings
 1 , "2" = 12

## S4

```TypeScript
// This line logs the value of the variable "lValue" to the console, before it has been defined
console.log(`lValue = ${lValue}`);
// This line declares the variable "lValue" and assigns it the value of 2
let lValue = 2;
```

`Output`
    :index.ts(2,25): error TS2448: Block-scoped variable 'lValue' used before its declaration.

`Solution`    
    :The compiler is letting us know that we have possibly made a logic error by using the value of a variable before we have declared the variable itself.

## S5

Definite assignment or !

```TypeScript
// Declare a variable named "globalString" with the type of "string"
var globalString: string;

// Call the function "setGlobalString" and pass in the argument "this string is set"
setGlobalString("this string is set");

// Log the current value of the "globalString" variable to the console
console.log(`globalString = ${globalString}`);

// Define a function named "setGlobalString" that takes in a parameter named "value" with the type "string"
function setGlobalString(value: string) {
  // Assign the value of the "value" parameter to the "globalString" variable
  globalString = value;
}
```

`Output`
    :index.ts(8,31): error TS2454: Variable 'globalString' is used before being assigned.

`Solution`
    :Using Definite assignment
    

## TS2448

```typescript
// This line logs the value of the variable "lValue" to the console, before it has been defined
console.log(`lValue = ${lValue}`);

// This line declares the variable "lValue" and assigns it the value of 2
let lValue = 2;
```

`> Output:`

`index.ts(2,25): error TS2448: Block-scoped variable 'lValue' used before its declaration.`


## TS2304
Samples:
> `Cannot find name ga`
> `Cannot find name $`
> `Cannot find module jquery`

You are probably using a third party library (e.g. google analytics) and don't have it `declare`d. TypeScript tries to save you from *spelling mistakes* and *using variables without declaring them* so you need to be explicit on anything that is *available at runtime* because of you including some external library ([more on how to fix it][ambient]).

## TS2307
Samples:
> `Cannot find module 'underscore'`

You are probably using a third party library (e.g. underscore) as a *module* ([more on modules][modules]) and don't have the ambient declaration file for it ([more on ambient declarations][ambient]).

## TS1148
Sample:
> Cannot compile modules unless the '--module' flag is provided

Checkout the [section on modules][modules].

## Catch clause variable cannot have a type annotation
Sample:
```js
try { something(); }
catch (e: Error) { // Catch clause variable cannot have a type annotation
}
```
TypeScript is protecting you from JavaScript code in the wild being wrong. Use a type guard instead:
```js
try { something(); }
catch (e) {
  if (e instanceof Error){
    // Here you go.
  }
}
```

## Interface `ElementClass` cannot simultaneously extend types `Component` and `Component`
This happens when you have two `react.d.ts` (`@types/react/index.d.ts`) in the compilation context.

**Fix**:
* Delete `node_modules` and any `package-lock` (or yarn lock) and `npm install` again.
* If it doesn't work, find the invalid module (all modules used by your project should have `react.d.ts` as a `peerDependency` and not a hard `dependency`) and report it on their project.


[ambient]: ../types/ambient/d.ts.md
[modules]: ../project/modules.md
