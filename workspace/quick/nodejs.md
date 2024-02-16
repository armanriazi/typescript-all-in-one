# TypeScript with Node.js
TypeScript has had *first class* support for Node.js since inception. Here's how to setup a quick Node.js project:

> Note: many of these steps are actually just common practice Node.js setup steps

1. Setup a Node.js project `package.json`. Quick one : `npm init -y`
2. Add TypeScript (`npm install typescript --save-dev`)
3. Add `node.d.ts` (`npm install @types/node --save-dev`)
4. Init a `tsconfig.json` for TypeScript options with a few key options in your tsconfig.json (`npx tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom  --module commonjs`)

That's it! Fire up your IDE (e.g. `code .`) and play around. Now you can use all the built in node modules (e.g. `import * as fs from 'fs';`) with all the safety and developer ergonomics of TypeScript! 

All your TypeScript code goes in `src` and the generated JavaScript goes in `lib`. 

## Bonus: Live compile + run

- [x] Add `ts-node` which we will use for live compile + run in node (`npm install ts-node --save-dev`)
- [x] Add `nodemon` which will invoke `ts-node` whenever a file is changed (`npm install nodemon --save-dev`)

> Now just add a `script` target to your `package.json` based on your application entry e.g. assuming its `index.ts`:

```json
  "scripts": {
    "start": "npm run build:live",
    "build": "tsc -p .",
    "build:live": "nodemon --watch 'src/**/*.ts' --exec \"ts-node\" src/index.ts"
  },
```

So you can now run `npm start` and as you edit `index.ts`:

- [x] nodemon reruns its command (ts-node)
- [x] ts-node transpiles automatically picking up tsconfig.json and the installed TypeScript version,
- [x] ts-node runs the output JavaScript through Node.js.

And when you are ready to deploy your JavaScript application run `npm run build`.

## Node style callbacks
Node style callback functions (e.g. `(err,somethingElse)=>{ /* something */ }`) are generally called with `err` set to `null` if there isn't an error. You generally just use a truthy check for this anyways:

```typescript
fs.readFile('someFile', 'utf8', (err,data) => {
  if (err) {
    // do something
  } else {
    // no error
  }
});
```
When creating your own APIs it's *okay* to use `null` in this case for consistency. In all sincerity for your own APIs you should look at promises, in that case you actually don't need to bother with absent error values (you handle them with `.then` vs. `.catch`).

## Bonus points

Such NPM modules work just fine with browserify (using tsify) or webpack (using ts-loader).

[Nodejs-projects](https://github.com/armanriazi/nodejs-projects)