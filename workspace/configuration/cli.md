
 # Getting Started With TypeScript

TypeScript compiles into JavaScript. JavaScript is what you are actually going to execute (either in the browser or on the server). So you are going to need the following:

* TypeScript compiler (OSS available [in source](https://github.com/Microsoft/TypeScript/) and on [NPM](https://www.npmjs.com/package/typescript))
* A TypeScript editor (you can use notepad if you want but I use [vscode 🌹](https://code.visualstudio.com/) with an [extension I wrote](https://marketplace.visualstudio.com/items?itemName=armanriazi.god). Also [lots of other IDES support it as well]( https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support))

 
 # Configuration


## NPM Security
The public `npm` packages are scanned by security team worldwide and issues get reported to npm team. They then release security advisories detailing the issue and potential fixes. Commonly the fix is simply updating the package. 

You can run an audit on your node project by simply running `npm audit`. This will highlight any vulnerabilities that might exist in the package / dependencies of the package. e.g. 

```
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ Low           │ Regular Expression Denial of Service                         │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ debug                                                        │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ jest [dev]                                                   │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ jest > jest-cli > istanbul-lib-source-maps > debug           │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://nodesecurity.io/advisories/534                       │
└───────────────┴──────────────────────────────────────────────────────────────┘
```

Note that commonly the issues are found in *development* dependencies (e.g. jest in this case). Since these aren't are a part of your production deployments, most likely your production application is not vulnerable. But still good practice to keep vulnerabilities to `0`.

Simply add `npm audit` (the command exist with error code `1` in case of error) as a part of your deployment to ensure the projects stay up to date.

## NPM Scripts 

### What is with `--` in scripts 
You can build a base script with a limited set of command line arguments e.g. here is a script target that runs `tsc` for the TypeScript compiler: 

```json
{
  "scripts": {
    "build": "tsc -p ."
  }
}
```

You can create a `build:watch` target to run `tsc -p . -w` or alternatively asking npm to run `build` with the additional `-w` flag like so: 

```json
{
  "scripts": {
    "build": "tsc -p .",
    "build:watch": "npm run build -- -w"
  }
}
```
You can pass in as many flags as you want after `--` e.g. in the following example `build:more` has the same effect as `something --foo -f -d --bar`

```json
{
  "scripts": {
    "build": "something --foo",
    "build:more": "npm run build -- -f -d --bar"
  }
}
```

 
 ## TypeScript project configuration and TSC commands
 This --init option will automatically generate the tsconfig.json file within the current directory.

 ```bash
 tsc --init
 ```

`> Output:`

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

 ```typescript
 "use strict";
 var version = `ES6`;
console.log(`Hello ${version} TypeScript`);
 ```

Ignoring the **"use strict"** line at the top of this file, we can see that the generated JavaScript has not changed from our original TypeScript file.

This shows that the compiler is correctly **generating ES6-compatible JavaScript**, even though we have not modified our original TypeScript file.

```bash
tsc -w hello.ts
```

* [Getting Started with TypeScript](#getting-started-with-typescript)
* [TypeScript Version](#typescript-version)



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

## NPM Third Party

the package-lock.json file must also be committed to source control.

### Semantic versioning

- [x] Patch releases: 1.0 or 1.0.x or ~1.0.4
- [x] Minor releases: 1 or 1.x or ^1.0.4
- [x] Major releases: * or x

Also, the caret (^) at the start of the package version number in the package.json file. This is used to indicate what can be done if new versions of the package are found during an npm install step. If we use the caret (^), this means that npm will upgrade the package if a new minor version or patch version is found. So "^7.1.0" will upgrade if a minor version number "7.2.0" is found or if a new patch version "7.1.1" is found.

If we use the tilde ( ~ ) character at the start of the version number, as in "~7.1.0", then only patch versions will be used if a new version is found. So, "~7.1.0" will upgrade if a new patch version "7.1.1" is found, but will not upgrade if a new minor version is found, as in "7.2.0".

If we do not use a preceding character, and simply leave the version at "7.1.0", then npm will not attempt to upgrade packages and will leave the version as stated.

When executing the `tsc` command locally, TypeScript will compile the code using the configuration specified in the nearest tsconfig.json file.

Here are some examples of CLI commands that run with the default settings:

```shell
tsc main.ts // Compile a specific file (main.ts) to JavaScript
tsc src/*.ts // Compile any .ts files under the 'src' folder to JavaScript
tsc app.ts util.ts --outfile index.js // Compile two TypeScript files (app.ts and util.ts) into a single JavaScript file (index.js)
```

