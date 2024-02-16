# TypeScript Module Resolution

TypeScript's module resolution tries to model and support the real world modules systems / loaders there (commonjs/nodejs, amd/requirejs, ES6/systemjs etc.). The most simplest lookup is relative file path lookup. After that things become a bit complex *because of the nature of magical module loading done by various module loaders*.

### ECMAScript Module Support in Node.js

Node.js added support for ECMAScript Modules starting from version 15.3.0, and TypeScript has had ECMAScript Module Support for Node.js since version 4.7. This support can be enabled by using the `module` property with the value `nodenext` in the tsconfig.json file. Here's an example:

```json
{
  "compilerOptions": {
    "module": "nodenext",
    "outDir": "./lib",
    "declaration": true
  }
}
```

Node.js supports two file extensions for modules: **`.mjs` for ES modules and `.cjs` for CommonJS modules**. The equivalent file extensions in **TypeScript are `.mts` for ES modules and `.cts` for CommonJS modules**. 

**When the TypeScript compiler transpiles these files to JavaScript, it will create `.mjs` and `.cjs` files.**

*If you want to use ES modules in your project, you can set the `type` property to "module" in your package.json file. This instructs Node.js to treat the project as an ES module project.*

Additionally, TypeScript also supports type declarations in .d.ts files. These declaration files provide type information for libraries or modules written in TypeScript, allowing other developers to utilize them with TypeScript's type checking and auto-completion features.

## File Extensions

You import modules like `foo` or `./foo`. For any file path lookup TypeScript automatically checks for a `.ts` or `.d.ts` or `.tsx` or `.js` (optionally) or `.jsx` (optionally) file in the right order depending upon context. You should **not provide a file extension** *with the module name (no `foo.ts`, just `foo`).*

## Relative File Module

An import with a relative path e.g.:

```typescript
import foo = require('./foo');
```

Tells the TypeScript compiler to look for a TypeScript file at the relative location e.g. `./foo.ts` with respect to the current file. There is no further magic to this kind of import. Of course it can be a longer path e.g. `./foo/bar/bas` or `../../../foo/bar/bas` just like any other *relative paths* you are used to on disk.

## Named Module

The following statement:

```typescript
import foo = require('foo');
```

Tells the TypeScript compiler to look for an external module in the following order:

- [x] A named [module declaration](#module-declaration) from a file already in the compilation context.
- [x] If still not resolved and you are compiling with `--module commonjs`  or have set `--moduleResolution node` then its looked up using the [*node modules*](#node-modules) resolution algorithm.
- [x] If still not resolved and you provided `baseUrl` (and optionally `paths`) then the [*path substitutions*](#path-substitutions) resolution algorithm kicks in.

Note that `"foo"` can be a longer path string e.g. `"foo/bar/bas"`. The key here is that **it does not start with `./` or `../`**.

## Module Declaration

A module declaration looks like:

```typescript
declare module "foo" {

    /// Some variable declarations

    export var bar:number; /*sample*/
}
```

This makes the module `"foo"`, *importable*.

## Node Modules
The node module resolution is actually pretty much the same one used by Node.js / NPM ([official nodejs docs](https://nodejs.org/api/modules.html#modules_all_together)). Here is a simple mental model I have:

- module `foo/bar` will resolve to some file : `node_modules/foo` (the module) + `foo/bar`

## Path Substitutions

TODO.

[//Comment1]:https://github.com/Microsoft/TypeScript/issues/2338
[//Comment2]:https://github.com/Microsoft/TypeScript/issues/5039
[//Comment3ExampleRedirectOfPackageJson]:https://github.com/Microsoft/TypeScript/issues/8528#issuecomment-219172026
[//Coment4ModuleResolutionInHandbook]:https://github.com/Microsoft/TypeScript-Handbook/blob/release-2.0/pages/Module%20Resolution.md#base-url
