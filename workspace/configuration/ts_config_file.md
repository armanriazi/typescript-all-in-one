
### TypeScript Configuration File ​​tsconfig.json

A tsconfig.json file is used to configure the TypeScript Compiler (tsc). Usually, it is added to the root of the project, together with the `package.json` file.

Notes:

- [x] tsconfig.json accepts comments even if it is in json format.
- [x] It is advisable to use this configuration file instead of the command-line options.

At the following link you can find the complete documentation and its schema:

<https://www.typescriptlang.org/tsconfig>

<http://json.schemastore.org/tsconfig>

The following represents a list of the common and useful configurations:

#### target

The "target" property is used to specify which version of JavaScript ECMAScript version your TypeScript should emit/compile into. For modern browsers ES6 is a good option, for older browsers, ES5 is recommended.

#### lib

The "lib" property is used to specify which library files to include at compilation time. TypeScript automatically includes APIs for features specified in the "target" property, but it is possible to omit or pick specific libraries for particular needs. For instance, if you are working on a server project, you could exclude the "DOM" library, which is useful only in a browser environment.

#### strict

The "strict" property enables stronger guarantees and enhances type safety. It is advisable to always include this property in your project's tsconfig.json file. Enabling the "strict" property allows TypeScript to:

- [x] Emit code using "use strict" for each source file.
- [x] Consider "null" and "undefined" in the type checking process.
- [x] Disable the usage of the "any" type when no type annotations are present.
- [x] Raise an error on the usage of the "this" expression, which would otherwise imply the "any" type.

#### strictNullChecks

`strictNullChecks` is a TypeScript compiler option that enforces strict null checking. When this option is enabled, variables and parameters can only be assigned `null` or `undefined` if they have been explicitly declared to be of that type using the union type `null` | `undefined`. If a variable or parameter is not explicitly declared as nullable, TypeScript will generate an error to prevent potential runtime errors.

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