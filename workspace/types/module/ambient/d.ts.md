# Declaration file
A declaration file is a special type of file used by the TypeScript compiler. It is only used during the compilation step and is used as a sort of reference file to describe JavaScript. Declaration files are similar to the header files used in C or C++ or the interfaces used in Java. They simply describe the structure of available functions and properties but do not provide an implementation.

The purpose of a declaration file is to tell the TypeScript **compiler ahead of time** what the structure of a JavaScript library looks like. We have seen that we can use all of the TypeScript keywords and language features within a declaration file.

You can tell TypeScript that you are trying to describe code that exists elsewhere (e.g. written in JavaScript/CoffeeScript/The runtime environment like the browser or Node.js) using the `declare` keyword. As a quick example:

```ts
foo = 123; // Error: `foo` is not defined
```
vs.
```ts
declare var foo: any;
foo = 123; // allowed
```

The first thing to note about this code is that we have used the **TypeScript keyword declare**. The declare keyword tells the compiler that we want to define something but that the implementation of this object (or variable or function) **will be resolved at runtime.**

You have the option of putting these declarations in a `.ts` file or in a `.d.ts` file. We highly recommend that in your real world projects you use a separate `.d.ts` (start with one called something like `global.d.ts` or `vendor.d.ts`).

If a file has the extension `.d.ts` then each root level definition must have the `declare` keyword prefixed to it. This helps make it clear to the author that there will be *no code emitted by TypeScript*. The author needs to ensure that the declared item will exist at runtime.

**Ambient declarations is a promise that you are making with the compiler**. If these do not exist at runtime and you try to use them, things will break without warning.
**Ambient declarations are like docs. If the source changes the docs need to be kept updated**. So you might have new behaviours that work at runtime but no one's updated the ambient declaration and hence you get compiler errors.
