e can generate this JavaScript using TypeScript. In simple terms, TypeScript is a superset of JavaScript. It includes all of the features of JavaScript and adds a few additional features like Generics and Interfaces.

 JavaScript is an interpreted language, and as such has benefits but also drawbacks. Interpreted languages do not have a compilation step and therefore can’t check that all code written has no minor mistakes in spelling or syntax before it is actually run. TypeScript is a strongly typed, object-oriented language that uses a compiler to generate JavaScript. The compiler will identify errors within the code base even before it is run in an interpreter.

 When we run a TypeScript file, the TypeScript compiler is responsible for transpiling it into a corresponding JavaScript file. This process is known as transpiling, allowing us to run our TypeScript code in environments that only support JavaScript, such as a web browser or a Node server.

 The use of the **backtick (`)** to delineate strings gives us the ability to inject values directly into the string, as follows:
 
 ```TypeScript
 var version = `ES6`;
console.log(`Hello ${version} TypeScript`);
 ```

 ## TypeScript project configuration ans TSC commands
 This --init option will automatically generate the tsconfig.json file within the current directory.
 ```TypeScript
 tsc --init
 ```
> `Output`

```json
{
 "compilerOptions": {
 "target": "ES3",
 "module": "commonjs",
 "strict": true,
 "esModuleInterop": true,
 "skipLibCheck": true,
 "forceConsistentCasingInFileNames": true
 }
}
```

Now that we have changed the target version of JavaScript that we wish to generate for, which is now ES6( "target": "ES6",), let’s take a look at the output of the compiler in the file hello_typescript.js, as follows:

 ```TypeScript
 "use strict";
 var version = `ES6`;
console.log(`Hello ${version} TypeScript`);
 ```

Ignoring the **"use strict"** line at the top of this file, we can see that the generated JavaScript has not changed from our original TypeScript file.

This shows that the compiler is correctly **generating ES6-compatible JavaScript**, even though we have not modified our original TypeScript file.

```bash
tsc -w hello.ts
```

## Strong Type vs Dynamic Type

JavaScript is not strongly typed. It is a language that is very dynamic, as it allows objects to change their types, properties, and behavior on the fly. TypeScript, however, is strongly typed and, as such, will enforce rules that govern how we use variables, functions, and objects.

TypeScript introduces a simple notation using the colon ( : ) symbol to indicate what type a variable should be, as follows:

```TypeScript
// Declare a string variable named 'myString' and initialize it with the value "Hello"
var myString: string = `Hello`;

// Declare a boolean variable named 'myBoolean' and initialize it with the value true
var myBoolean: boolean = true;

// Declare a number variable named 'myNumber' and initialize it with the value 1234
var myNumber: number = 1234;

// Declare an array of strings named 'myStringArray' and initialize it with the values ["first", "second", "third"]
var myStringArray: string[] = [`first`, `second`, `third`];

// This line sets the value of the `myString` variable to the string representation of the value of the `myBoolean` variable.
myString = myBoolean.toString()

// This line sets the value of the `myBoolean` variable to a boolean value that represents
// whether the value of the `myNumber` variable is equal to 456.
myBoolean = myNumber === 456;

// This line sets the value of the `myStringArray` variable to an array with two elements:
// 1. The string representation of the value of the `myNumber` variable.
// 2. The string '5678'.
myStringArray = [myNumber.toString(), `5678`];

// This line sets the value of the `myNumber` variable to the length of the `myStringArray` array.
myNumber = myStringArray.length;

// These lines log the current values of the `myString`, `myBoolean`, `myStringArray`, and `myNumber` variables
// to the console.
console.log(`myString = ${myString}`);
console.log(`myBoolean = ${myBoolean}`);
console.log(`myStringArray = ${myStringArray}`);
console.log(`myNumber = ${myNumber}`);

```

> `Output`

```md
myString = true
myBoolean = false
myStringArray = 1234,5678
myNumber = 2
```

# NPM Third Party

the package-lock.json file must also be committed to source control.

## Semantic versioning

- [x] Patch releases: 1.0 or 1.0.x or ~1.0.4
- [x] Minor releases: 1 or 1.x or ^1.0.4
- [x] Major releases: * or x

Also, the caret (^) at the start of the package version number in the package.json file. This is used to indicate what can be done if new versions of the package are found during an npm install step. If we use the caret (^), this means that npm will upgrade the package if a new minor version or patch version is found. So "^7.1.0" will upgrade if a minor version number "7.2.0" is found or if a new patch version "7.1.1" is found.

If we use the tilde ( ~ ) character at the start of the version number, as in "~7.1.0", then only patch versions will be used if a new version is found. So, "~7.1.0" will upgrade if a new patch version "7.1.1" is found, but will not upgrade if a new minor version is found, as in "7.2.0".

If we do not use a preceding character, and simply leave the version at "7.1.0", then npm will not attempt to upgrade packages and will leave the version as stated.
