# Ambient Declarations

`@types`

A major design goal of TypeScript was to make it possible for you to safely and easily use existing JavaScript libraries in TypeScript. TypeScript does this by means of **declaration**.
Packages under the @types organization are special package naming conventions used to **provide type definitions for existing JavaScript libraries or modules**. For instance using:

```shell
npm install --save-dev @types/lodash
```

Ambient declarations allow you to **safely use existing popular JavaScript libraries** and *incrementally migrate your JavaScript/CoffeeScript/Other-Compile-To-Js-Language project to TypeScript*.

Studying patterns in ambient declarations for *third party JavaScript code* is good practice for annotating *your* TypeScript code base as well. This is why we present it so early on.
Ambient declarations are files that describe types for JavaScript code, they have a file name format as `.d.ts.`. They are usually imported and used to annotate existing JavaScript libraries or to add types to existing JS files in your project.

Many common libraries types can be found at [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) and can be installed using:

```shell
npm install --save-dev @types/library-name
```

For your defined Ambient Declarations, you can import using the "triple-slash" reference:

<!-- skip -->
```typescript
/// <reference path="./library-types.d.ts" />
```

You can use Ambient Declarations even within JavaScript files using `// @ts-check`.


[Definitely Typed](https://github.com/DefinitelyTyped/DefinitelyTyped) is definitely one of TypeScript's greatest strengths. The community has effectively gone ahead and **documented** the nature of nearly 90% of the top JavaScript projects out there.

This means that you can use these projects in a very interactive and exploratory manner, no need to have the docs open in a separate window and making sure you don't make a typo.

If you want you can build on this basic definition and provide more information to help protect you from errors:

```ts
declare var $: {
    (selector:string): any;
};
$('.awesome').show(); // Okay!
$(123).show(); // Error: selector needs to be a string
```

We will discuss the details of creating TypeScript definitions for existing JavaScript in detail later once you know more about TypeScript (e.g. stuff like `interface` and the `any`).


## Using `@types`

Installation is fairly simple as it just works on top of `npm`. So as an example you can install type definitions for `jquery` simply as:

```bash
npm install @types/jquery --save-dev
```

`@types` supports both *global* and *module* type definitions.


### Global `@types`

By default any definitions that support global consumption are included automatically. E.g. for `jquery` you should be able to just start using `$` *globally* in your project.

However, for *libraries*  (like `jquery`) I generally **recommend using modules**:

### Module `@types`

After installation, no special configuration is required really. You just use it like a module e.g.:

```ts
import * as $ from "jquery";

// Use $ at will in this module :)
```

A major design goal of TypeScript was to make it possible for you to safely and easily use existing JavaScript libraries in TypeScript. TypeScript does this by means of *declaration*. TypeScript provides you with a sliding scale of how much or how little effort you want to put in your declarations, the more effort you put the more type safety + code intelligence you get. Note that definitions for most of the popular JavaScript libraries have already been written for you by the [DefinitelyTyped community](https://github.com/borisyankov/DefinitelyTyped) so for most purposes either:

1. The definition file already exists.
2. Or at the very least, you have a vast list of well reviewed TypeScript declaration templates already available

As a quick example of how you would author your own declaration file, consider a trivial example of [jquery](https://jquery.com/). By default (as is to be expected of good JS code) TypeScript expects you to declare (i.e. use `var` somewhere) before you use a variable

```ts
$('.awesome').show(); // Error: cannot find name `$`
```

> As a quick fix *you can tell TypeScript* that there is indeed something called `$`:

```ts
declare var $: any;
$('.awesome').show(); // Okay!
```

## Controlling Globals

As can be seen, having a definition that allows global leak-in automatically can be a problem for some teams. So you can choose to *explicitly* only bring in the types that make sense using the `tsconfig.json` `compilerOptions.types` e.g.:

```json
{
    "compilerOptions": {
        "types" : [
            "jquery"
        ]
    }
}
```

The above shows a sample where only `jquery` will be allowed to be used. Even if the person installs another definition like `npm install @types/node` its globals (e.g. [`process`](https://nodejs.org/api/process.html)) will not leak into your code until you add them to the `tsconfig.json` types option.
