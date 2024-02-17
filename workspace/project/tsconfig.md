### Basic
A tsconfig.json file is used to configure the TypeScript Compiler (tsc). Usually, it is added to the root of the project, together with the `package.json` file.

Notes:

- [x] tsconfig.json accepts comments even if it is in json format.
- [x] It is advisable to use this configuration file instead of the command-line options.

At the following link you can find the complete documentation and its schema:

<https://www.typescriptlang.org/tsconfig>

<http://json.schemastore.org/tsconfig>

The following represents a list of the common and useful configurations:
It is extremely easy to get started with tsconfig.json as the basic file you need is:

```json
{}
```

i.e. an empty JSON file at the *root* of your project. This way TypeScript will include *all* the `.ts` files in this directory (and sub directories) as a part of the compilation context. It will also select a few sane default compiler options.

### ES6 Modules

TypeScript does support ES6 (ECMAScript 2015) and many subsequent versions. This means you can use ES6 syntax, such as arrow functions, template literals, classes, modules, destructuring, and more.

To enable ES6 features in your project, you can specify the `target` property in the tsconfig.json.

A configuration example:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "es6",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist"
  },
  "include": ["src"]
}
```

## Compilation Context
The compilation context is basically just a fancy term for grouping of the files that TypeScript will parse and analyze to determine what is valid and what isn't. Along with the information about which files, the compilation context contains information about *which compiler options* are in use. A great way to define this logical grouping (we also like to use the term *project*) is using a `tsconfig.json` file.


### compilerOptions
You can customize the compiler options using `compilerOptions`:

```json
{
  "compilerOptions": {

    /* Basic Options */                       
    "target": "es5",                       /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'. */
    "module": "commonjs",                  /* Specify module code generation: 'commonjs', 'amd', 'system', 'umd' or 'es2015'. */
    "lib": [],                             /* Specify library files to be included in the compilation:  */
    "allowJs": true,                       /* Allow JavaScript files to be compiled. */
    "checkJs": true,                       /* Report errors in .js files. */
    "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    "sourceMap": true,                     /* Generates corresponding '.map' file. */
    "outFile": "./",                       /* Concatenate and emit output to single file. */
    "outDir": "./",                        /* Redirect output structure to the directory. */
    "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    "removeComments": true,                /* Do not emit comments to output. */
    "noEmit": true,                        /* Do not emit outputs. */
    "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
    "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */
                                              
    /* Strict Type-Checking Options */     
    /// As an example, these strict options can determine if a variable could be undefined at the time of use or if the variable itself is never used.   
    "strict": true,                        /* Enable all strict type-checking options. */
    "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. For new projects use TypeScript configuration **noImplicitAny** which enables TypeScript to issue errors where any is used or inferred. */
    "strictNullChecks": true,              /* Enable strict null checks. */
    "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */
                                              
    /* Additional Checks */                   
    "noUnusedLocals": true,                /* Report errors on unused locals. */
    "noUnusedParameters": true,            /* Report errors on unused parameters. */
    "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */
                                              
    /* Module Resolution Options */           
    "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
    "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    "typeRoots": [],                       /* List of folders to include type definitions from. */
    "types": [],                           /* Type declaration files to be included in compilation. */
    "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
                                              
    /* Source Map Options */                  
    "sourceRoot": "./",                    /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    "mapRoot": "./",                       /* Specify the location where debugger should locate map files instead of generated locations. */
    "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */
                                              
    /* Experimental Options */                
    "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    "emitDecoratorMetadata": true          /* Enables experimental support for emitting type metadata for decorators. */
  }
}
```

These (and more) compiler options will be discussed later.

### TypeScript compiler
Good IDEs come with built in support for on the fly `ts` to `js` compilation. However, if you want to run the TypeScript compiler manually from the command line when using `tsconfig.json`, you can do it in a few ways:
* Just run `tsc` and it will look for `tsconfig.json` in the current as well as all parent folders till it finds it.
* Run `tsc -p ./path-to-project-directory`. Of course the path can be absolute or relative to the current directory.

You can even start the TypeScript compiler in *watch* mode using `tsc -w` and it will watch your TypeScript project files for changes.

#### target

The "target" property is used to specify which version of JavaScript ECMAScript version your TypeScript should emit/compile into. For modern browsers ES6 is a good option, for older browsers, ES5 is recommended.

#### lib

The "lib" property is used to specify which library files to include at compilation time. TypeScript automatically includes APIs for features specified in the "target" property, but it is possible to omit or pick specific libraries for particular needs. For instance, if you are working on a server project, you could exclude the "DOM" library, which is useful only in a browser environment.

### The declaration option

The final TypeScript compilation option that we will discuss here is the declaration option, which will generate declaration files from our source TypeScript or our source JavaScript files.

We can turn this option on by uncommenting it in the tsconfig.js file as follows:

```json
    "outDir": "dist",  
    "allowJs":true,
    "declaration": true,   
    "declarationMap": true,
```    

For example:

```typescript
// Interface defining filterable object
interface IFilterable {
  name?: string;
}

// Function to filter undefined values in an array of filterable objects
function filterUndefined<T extends IFilterable>
  (input: Array<T>): Array<T> 
{
  let output: Array<T> = [];
  for (let item of input) {
    // Check if name property exists and is not null or undefined
    if (item.name?.length) {
      output.push(item);
    }
  }
  return output;
}
```

Generated declaration file

```typescript
// Interface defining filterable object
interface IFilterable {
  name?: string;
}

// Function signature to filter undefined values in an array of filterable objects
declare function filterUndefined<T extends IFilterable>(input: Array<T>): Array<T>;

// Caption: Declare function signature to filter undefined values in an array of filterable objects based on name property.

```


### Subdirectory tsconfig.json
Let’s take a look at the tsconfig.json file in the sub1 directory:

```typescript
{
 "extends": "../tsconfig", // point to the parent config file
 "compilerOptions": {
 /* Strict Type-Checking Options */
 "outDir": "../dist",
 "allowJs": true,
 "strict": false
 }
}
```

#### strict

The "strict" property enables stronger guarantees and enhances type safety. It is advisable to always include this property in your project's tsconfig.json file. Enabling the "strict" property allows TypeScript to:

- [x] Emit code using "use strict" for each source file.
- [x] Consider "null" and "undefined" in the type checking process.
- [x] Disable the usage of the "any" type when no type annotations are present.
- [x] Raise an error on the usage of the "this" expression, which would otherwise imply the "any" type.

#### strictNullChecks

`strictNullChecks` is a TypeScript compiler option that enforces strict null checking. When this option is enabled, variables and parameters can only be assigned `null` or `undefined` if they have been explicitly declared to be of that type using the union type `null` | `undefined`. If a variable or parameter is not explicitly declared as nullable, TypeScript will generate an error to prevent potential runtime errors. 
This means that when the variable is actually used if it **has not been properly initialized**, the compiler will generate an error message.

```typescript
let a: number;
let b = a;
```

`>tags:` [[Error_TS2454]] [[Error_strictNullChecks]]

```md
error TS2454: Variable 'a' is used before being assigned.
```

`> Solution:`

```typescript
let a: number | undefined;
let b = a;
```

### strictNullChecks 
Back to strictNullChecks. The definition says that when the flag is not enabled, null and undefined values are in the domain of every type. In other words, null and undefined values belong to sets corresponding to every type. It means we can have null , undefined in domain types of string, number, or pipes. but when strictNullChecks to be true, it means null, undefined are known singleton type so they will categorize in different type of string, number, or pipes.

### strictPropertyInitialization 

The strictPropertyInitialization compiler option will check that all properties within a class have been initialized correctly.
Ensure non-undefined class properties are initialized in the constructor.
The concept is similar to the strictNullChecks option that we just discussed, but it extends into class properties.

Note: In order to use the strictPropertyInitialization option, we also need to enable the strictNullChecks option at the same time, or the compiler will return an error stating this.

Consider the following class definition:

`>tags:` [[Error_ TS2564]] [[Error_strictPropertyInitialization]] [[Error_constructor]]

```typescript
class WithoutInit {
    a: number;
    b: string;
}
```


`> Solution:`

Firstly, we can use a type union, as we did with strictNullChecks, as follows:

```typescript
class WithoutInit {
    a: number | undefined;
    b: string | undefined;
}
```
OR:

```typescript
class WithoutInit {
    a!: number;
    b!: string;
}
```

OR:

```typescript
class WithoutInit {
    a: number = 1;
    b: string = "test";
}
```

OR:

```typescript
class WithoutInit {
    a: number;
    b: string;
    constructor(a: number) {
        this.a = a;
        this.b = "test";
    }
}
```

### strictBindCallApply 
JavaScript provides the bind, call, and apply functions that are used to override the value of the this variable inside a function. When using the bind, call, and apply functions, we essentially provide a particular version of the object that the function should use as the value for this and then invoke the function with the parameters it requires. The strictBindCallApply option ensures that we provide these function parameters with the correct types.


### strictFunctionTypes

When we define types in TypeScript and then attempt to assign them to each other, the compiler makes sure that the types are consistent. Unfortunately, this strict typing rule did not apply correctly in some circumstances when dealing with functions.

The strictFunctionTypes option corrects this behavior.

`>tags:` [[Error_TS2322]] [[Error_TS2345]] [[Error_strictFunctionTypes]] 

```typescript
// Error TS2322
let numberOrString: number | string;
let numberOnly: number = numberOrString;
//OR Error TS2345
function withCallback(
    fn: (a: number | string) => void
) {
    fn("test");
}
function withNumberOnly(a: number) {
    console.log(`a : ${a}`);
}
withCallback(withNumberOnly);
```
### no Keys

There are also a number of compiler options that are prefixed with the word `no`. These options are similar to the strict options in that they further **guard our code** *against things like unused parameters, implicit returns, and implicit any.*

In this lesson, we will take a look at these compiler options and how they can detect potential errors within our code. These parameters are similar in nature to strict parameters in that they can be turned on or off and can be introduced into a code base gradually.

Note: *If the strict compiler option has been set to true, then all of these options will be enabled as well.*

`>tags:` [[Error_TS5055]] [[Error_noImplicitAny]]

```ts
declare function testImplicityAny();
//OR
function testNoParamType(value) { }

class TestAny {
    id;
}
```

`> Solution:`

```ts
declare function testImplicityAny(): void;
//
function testNoParamType(value: string) { }

class TestAny {
    id : any;
}
```

### noImplicitAny 

In the example below, the **return type of getName is inferred as any**. This means that you can break type safety not only inside the function but also in the places it’s being used.

```ts
function getName(person) {
  return person.name;
}
```

### The noUnusedLocals and noUnusedParameters options

The noUnusedLocals and noUnusedParameter compiler options are used to detect variables or parameters that are not used and are, therefore, superfluous.

`>tags:` [[Error_TS5055]] [[Error_noUnusedLocals]] [[Error_noUnusedParameters]]

Consider the following code:

```ts
function testFunction(input: string): boolean {
    let test;
    return false;
}
```

When we run the code, we can see that the compiler is detecting that we have an unused parameter and that we have an unused local variable.

- The parameter named input of type string is defined in the function definition but is never actually used within the function body.

- In a similar manner, the variable named test is defined within the function body, but it is never assigned a value and is also never used.

Note that while this is a trivial example and we can clearly see that these local variables and parameters are never used in this code, it may not be so easily spotted in a larger code base or larger functions, so it is best left for the compiler to find these unused variables for us.

### The noImplicitReturns option#

If a function has declared that it will return a value, then the noImplicitReturns compiler option will ensure that it does.
Running the compiler, however, with the noImplicitReturns option set to true will now generate an error. We can see the compiler is detecting that the isLargeNumber function may not return a value if the false code path is taken.

`>tags:` [[Error_TS5055]] [[Error_noImplicitReturns]]

Consider the following code:

```ts
function isLargeNumber(value: number): boolean {
    if (value > 1_000_000)
        return true;
}

console.log(`isLargeNumber(1) : ${isLargeNumber(1)}`);
```

`> Solution:`

```ts
function isLargeNumber(value: number): boolean {
    if (value > 1_000_000)
        return true;
    return false;
}
```

### noFallthroughCasesInSwitch 
The TypeScript compiler option named noFallthroughCasesInSwitch is used to trap a particular logic error within switch statements.

Consider the following code:

```ts
    switch (value) {
        case SwitchEnum.ONE:
            returnValue = "One";
            break; //comment this line will expose an error
        case SwitchEnum.TWO:
            returnValue = "Two";
    }
```

### noImplicitThis 
The noImplicitThis compiler option is used to detect logic errors when the this variable is accessed incorrectly.

`>tags:` [[Error_TS5055]] [[Error_noImplicitThis]]

Consider the following code:

```ts
class NoImplicitThisClass {
    id: number = 1;
    printAfterWait() {
        let callback = function () {
            console.log(`this.id : ${this.id}`);
        }
        setTimeout(callback, 1000);
    }
}

let classInstance = new NoImplicitThisClass();
classInstance.printAfterWait();
```

The compiler correctly identifies that our reference to this.id within the callback function is not referencing the this property of the NoImplicitThisClass class. The this property within the callback function, therefore, has a type of any, hence the error.

There are two ways that we could correct this code.
- Using a callback function

```ts
class NoImplicitThisClass {
    id: number = 1;
    printAfterWait() {
    let callback = function (_this) {
        console.log(`this.id : ${_this.id}`);
    }
    setTimeout(callback, 1000, this);
    }
```

- Using an arrow function

```ts
    let callback = () => {
        console.log(`this.id : ${this.id}`);
    }
    setTimeout(callback, 1000);
```

#### module

The "module" property sets the module system supported for the compiled program. During runtime, a module loader is used to locate and execute dependencies based on the specified module system.

The most common module loaders used in JavaScript are Node.js CommonJS for server-side applications and RequireJS for AMD modules in browser-based web applications. TypeScript can emit code for various module systems, including UMD, System, ESNext, ES2015/ES6, and ES2020.

Note: The module system should be chosen based on the target environment and the module loading mechanism available in that environment.

#### moduleResolution

The "moduleResolution" property specifies the module resolution strategy. Use "node" for modern TypeScript code, the "classic" strategy is used only for old versions of TypeScript (before 1.6).

#### esModuleInterop

The "esModuleInterop" property allows import default from CommonJS modules that did not export using the "default" property, this property provides a shim to ensure compatibility in the emitted JavaScript. After enabling this option we can use `import MyLibrary from "my-library"` instead of `import - [x] as MyLibrary from "my-library"`.

#### jsx

The "jsx" property applies only to .tsx files used in ReactJS and controls how JSX constructs are compiled into JavaScript. A common option is "preserve" which will compile to a .jsx file keeping unchanged the JSX so it can be passed to different tools like Babel for further transformations.

#### skipLibCheck

The "skipLibCheck'' property will prevent TypeScript from type-checking the entire imported third-party packages. This property will reduce the compile time of a project. TypeScript will still check your code against the type definitions provided by these packages.

#### files

The "files" property indicates to the compiler a list of files that must always be included in the program.

#### include

<!-- markdownlint-disable MD049 -->
The "include" property indicates to the compiler a list of files that we would like to include. This property allows glob-like patterns, such as "\*_" for any subdirectory, "_" for any file name, and "?" for optional characters.
<!-- markdownlint-enable MD049 -->

#### exclude

The "exclude" property indicates to the compiler a list of files that should not be included in the compilation. This can include files such as "node_modules" or test files.
Note: tsconfig.json allows comments.

### importHelpers

TypeScript uses helper code when generating code for certain advanced or down-leveled JavaScript features. By default, these helpers are duplicated in files using them. The `importHelpers` option imports these helpers from the `tslib` module instead, making the JavaScript output more efficient.

### Migration to TypeScript Advice

For large projects, it is recommended to adopt a gradual transition where TypeScript and JavaScript code will initially coexist. Only small projects can be migrated to TypeScript in one go.

The first step of this transition is to introduce TypeScript into the build chain process. This can be done by using the "allowJs" compiler option, which permits .ts and .tsx files to coexist with existing JavaScript files. As TypeScript will fall back to a type of "any" for a variable when it cannot infer the type from JavaScript files, it is recommended to disable "noImplicitAny" in your compiler options at the beginning of the migration.

The second step is to ensure that your JavaScript tests work alongside TypeScript files so that you can run tests as you convert each module. If you are using Jest, consider using `ts-jest`, which allows you to test TypeScript projects with Jest.

The third step is to include type declarations for third-party libraries in your project. These declarations can be found either bundled or on DefinitelyTyped. You can search for them using <https://www.typescriptlang.org/dt/search> and install them using:

```shell
npm install --save-dev @types/package-name or yarn add --dev @types/package-name.
```

The fourth step is to migrate module by module with a bottom-up approach, following your Dependency Graph starting with the leaves. The idea is to start converting Modules that do not depend on other Modules. To visualize the dependency graphs, you can use the "madge" tool.

Good candidate modules for these initial conversions are utility functions and code related to external APIs or specifications. It is possible to automatically generate TypeScript type definitions from Swagger contracts, GraphQL or JSON schemas to be included in your project.

When there are no specifications or official schemas available, you can generate types from raw data, such as JSON returned by a server. However, it is recommended to generate types from specifications instead of data to avoid missing edge cases.

During the migration, refrain from code refactoring and focus only on adding types to your modules.

The fifth step is to enable "noImplicitAny," which will enforce that all types are known and defined, providing a better TypeScript experience for your project.

During the migration, you can use the `@ts-check` directive, which enables TypeScript type checking in a JavaScript file. This directive provides a loose version of type checking and can be initially used to identify issues in JavaScript files. When `@ts-check` is included in a file, TypeScript will try to deduce definitions using JSDoc-style comments. However, consider using JSDoc annotations only at a very early stage of the migration.

Consider keeping the default value of `noEmitOnError` in your tsconfig.json as false. This will allow you to output JavaScript source code even if errors are reported.

## Exploring the Type System

### The TypeScript Language Service

The TypeScript Language Service, also known as tsserver, offers various features such as error reporting, diagnostics, compile-on-save, renaming, go to definition, completion lists, signature help, and more. It is primarily used by integrated development environments (IDEs) to provide IntelliSense support. It seamlessly integrates with Visual Studio Code and is utilized by tools like Conquer of Completion (Coc).

Developers can leverage a dedicated API and create their own custom language service plugins to enhance the TypeScript editing experience. This can be particularly useful for implementing special linting features or enabling auto-completion for a custom templating language.

<!-- markdownlint-disable MD044 -->
An example of a real-world custom plugin is "typescript-styled-plugin", which provides syntax error reporting and IntelliSense support for CSS properties in styled components.
<!-- markdownlint-enable MD044 -->

For more information and quick start guides, you can refer to the official TypeScript Wiki on GitHub: <https://github.com/microsoft/TypeScript/wiki/>