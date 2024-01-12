TypeScript is a superset of JavaScript. It includes all of the features of JavaScript and adds a few additional features like Generics and Interfaces.

 **JavaScript is an interpreted language**, and as such has benefits but also drawbacks. **Interpreted languages do not have a compilation step** and therefore can’t check that all code written has no minor mistakes in spelling or syntax before it is actually run. *TypeScript is a strongly typed, object-oriented language that uses a compiler to generate JavaScript. The compiler will identify errors within the code base even before it is run in an interpreter.*

 When we run a TypeScript file, the TypeScript compiler is responsible for transpiling it into a corresponding JavaScript file. This process is known as transpiling, allowing us to run our TypeScript code in environments that only support JavaScript, such as a web browser or a Node server.

 The use of the **backtick (`)** to delineate strings gives us the ability to inject values directly into the string, as follows:
 
 ```typescript
 var version = `ES6`;
console.log(`Hello ${version} TypeScript`);
 ```
