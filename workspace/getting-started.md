* [Getting Started with TypeScript](#getting-started-with-typescript)
* [TypeScript Version](#typescript-version)

# Getting Started With TypeScript

TypeScript compiles into JavaScript. JavaScript is what you are actually going to execute (either in the browser or on the server). So you are going to need the following:

* TypeScript compiler (OSS available [in source](https://github.com/Microsoft/TypeScript/) and on [NPM](https://www.npmjs.com/package/typescript))
* A TypeScript editor (you can use notepad if you want but I use [vscode 🌹](https://code.visualstudio.com/) with an [extension I wrote](https://marketplace.visualstudio.com/items?itemName=armanriazi.god). Also [lots of other IDES support it as well]( https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support))


## TypeScript Version

Instead of using the *stable* TypeScript compiler we will be presenting a lot of new stuff in this book that may not be associated with a version number yet. I generally recommend people to use the nightly version because **the compiler test suite only catches more bugs over time**.

You can install it on the command line as

```
npm install -g typescript@next
```

And now the command line `tsc` will be the latest and greatest. Various IDEs support it too, e.g.

* You can ask vscode to use this version by creating `.vscode/settings.json` with the following contents:

```json
{
  "typescript.tsdk": "./node_modules/typescript/lib"
}
```

## Getting the Source Code
The source for this book is available in the books github repository https://github.com/armanriazi/typescript-all-in-one/tree/master/code most of the code samples can be copied into vscode and you can play with them as is. For code samples that need additional setup (e.g. npm modules), we will link you to the code sample before presenting the code. e.g.

`this/will/be/the/link/to/the/code.ts`
```ts
// This will be the code under discussion
```
# TypeScript Features

TypeScript can compile code to any released version of JavaScript since ECMAScript 3 (1999). This means that TypeScript can transpile code from the latest JavaScript features to older versions, a process known as Downleveling. This allows the usage of modern JavaScript while maintaining maximum compatibility with older runtime environments.

It's important to note that during transpilation to an older version of JavaScript, TypeScript may generate code that could incur a performance overhead compared to native implementations.

Here are some of the modern JavaScript features that can be used in TypeScript:

- [x] ECMAScript modules instead of AMD-style "define" callbacks or CommonJS "require" statements.
- [x] Classes instead of prototypes.
- [x] Variables declaration using "let" or "const" instead of "var".
- [x] "for-of" loop or ".forEach" instead of the traditional "for" loop.
- [x] Arrow functions instead of function expressions.
- [x] Destructuring assignment.
- [x] Shorthand property/method names and computed property names.
- [x] Default function parameters.

By leveraging these modern JavaScript features, developers can write more expressive and concise code in TypeScript.