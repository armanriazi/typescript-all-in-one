
 ## TypeScript project configuration ans TSC commands
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


# NPM Third Party

the package-lock.json file must also be committed to source control.

## Semantic versioning

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

