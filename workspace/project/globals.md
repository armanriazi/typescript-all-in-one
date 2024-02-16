# global.d.ts
Note that over time, some JavaScript libraries have begun to include declaration files within their main package, and therefore, we do not even need to install an @types package in order to use it.

`declare module 'underscore';`

Here, we declare that there is a module named 'underscore' that we wish to use, but we don’t provide a declaration file for it. This solution is really the last resort and should be avoided when possible.

The reason for this is that we will not have any types declared *for this library*, and it will just be of **type any**.

> `Sample project` Ref.To project of typescript-all-in-one-projects-> ts-declare-global, ReadME

We discussed *global* vs. *file* modules when covering [projects](./modules.md) and recommended using file based modules and not polluting the global namespace.

Nevertheless, if you have beginner TypeScript developers you can give them a `global.d.ts` file to put interfaces / types in the global namespace to make it easy to have some *types* just *magically* available for consumption in *all* your TypeScript code.

Another use case for a `global.d.ts` file is to declare compile-time constants that are being injected into the source code by Webpack via the standard [DefinePlugin](https://webpack.js.org/plugins/define-plugin/) plugin.

```typescript
declare const BUILD_MODE_PRODUCTION: boolean; // can be used for conditional compiling
declare const BUILD_VERSION: string;
```

> For any code that is going to generate *JavaScript* we highly recommend using *file modules*, and only use `global.d.ts` to declare compile-time constants and/or to extend standard type declarations declared in `lib.d.ts`.

* Bonus: The `global.d.ts` file is also good for quick `declare module "some-library-you-dont-care-to-get-defs-for";` when doing JS to TS migrations.
