## Asynchronous Language Features

As TypeScript is a superset of JavaScript, it has built-in asynchronous language features of JavaScript as:

Promises:

Promises are a way to handle asynchronous operations and their results using methods like `.then()` and `.catch()` to handle success and error conditions.

To learn more: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise>

`Async/await:`

Async/await keywords are a way to provide a more synchronous-looking syntax for working with Promises. The `async` keyword is used to define an asynchronous function, and the `await` keyword is used within an async function to pause execution until a Promise is resolved or rejected.

How does async work?
This function takes a callback function as a parameter.
we are using two callback functions, namely afterWait and executeAfterTimeout, there is only one asynchronous call in this example.This asynchronous call is the call to the setTimeout function.

```ts
function delayedResponseWithCallback(callback: () => void) {
    function executeAfterTimeout() {
      console.log(`5. executeAfterTimeout()`);
      // This line calls the callback function passed in as a parameter
      callback();
    }
  
    console.log(`2. calling setTimeout`)
  
    // This line schedules the executeAfterTimeout function to be called after 1000 ms
    setTimeout(executeAfterTimeout, 1000);
  
    console.log(`3. after calling setTimeout`)
  }
  
  function callDelayedAndWait() {

    // Define another function called afterWait
    function afterWait() {
      console.log(`6. afterWait()`);
    }
  
    // Log message to console indicating that delayedResponseWithCallback will be called
    console.log(`1. calling delayedResponseWithCallback`);
  
    // Call delayedResponseWithCallback function, passing in the afterWait function as an argument
    delayedResponseWithCallback(afterWait);
  
    // Log message to console indicating that delayedResponseWithCallback has been called
    console.log(`4. after calling delayedResponseWithCallback`);
  }
  
  // Call the callDelayedAndWait function
  callDelayedAndWait();
```  

what is known as callback hell, where we have so many callbacks that are nested in other callbacks that the code becomes increasingly difficult to read and maintain.

e.g.,

```ts
// Import the 'fs' module and use it to read the contents of different text files.
import * as fs from "fs";
// The 'readFile' function is used to read the contents of the first text file, 'test1.txt'.
fs.readFile("./test1.txt", (err, data) => {
  if (err) {
    console.log(`an error occurred : ${err}`);
  } else {
    console.log(`test1.txt contents : ${data}`);
    // The 'readFile' function is used to read the contents of the second text file, 'test1.txt'.
    fs.readFile("./test2.txt", (err, data) => {
      if (err) {
        console.log(`an error occurred : ${err}`);
      } else {
        console.log(`test2.txt contents : ${data}`);
        // The 'readFile' function is used to read the contents of the third text file, 'test1.txt'.
        fs.readFile("./test3.txt", (err, data) => {
          if (err) {
            console.log(`an error occurred : ${err}`);
          } else {
            console.log(`test3.txt contents
                : ${data}`);
          }
        });
      }
    });
  }
});
```

`To learn more:`
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function>
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await>

The following API are well supported in TypeScript:

`Fetch API:`
<https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API>

`Web Workers:`
<https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API>

`Shared Workers:`
<https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker>

`WebSocket:`
<https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API>


## Promise
To make asynchronous code a lot simpler and to **eliminate callback hell**, many different JavaScript libraries implemented similar design patterns to make the syntax of callbacks easier to work with.
The Promise mechanism also allows us to **chain multiple asynchronous calls** one after another, and this technique is known as **fluent syntax**. Another technique is known as async and await, where we mark certain functions as asynchronous, and we can then use the await keyword to pause the execution flow of our code until the asynchronous function returns.

Note: A Promise-based asynchronous call is also referred to as being thenable, meaning that we can attach a then function to the original function call.

```ts
// Use the promises version of the fs module to read test1.txt
fs.promises.readFile("./test1.txt")
  // Once test1.txt is read, log the contents to the console and then read test2.txt
  .then((value) => {
    console.log(`ps test1.txt read : ${value}`);
    return fs.promises.readFile("./test2.txt");
  })
  // Once test2.txt is read, log the contents to the console and then read test3.txt
  .then((value) => {
    console.log(`ps test2.txt read : ${value}`);
    return fs.promises.readFile("./test3.txt");
  })
  // Once test3.txt is read, log the contents to the console
  .then((value) => {
    console.log(`ps test3.txt read : ${value}`);
  })
  // If an error occurs at any point in the chain, log the error to the console
  .catch((error) => {
    console.log(`an error occurred : ${error}`);
  });

```

`Writing Promises`

A Promise is an instance of a new Promise class whose constructor requires a function signature that accepts two callback functions, generally named resolve and reject.

- [x] Firstly, to use a Promise, we must return a new Promise object.
- [x] Secondly, a Promise object is constructed with a function that takes two callback arguments, generally named resolve and reject.

We can clearly see from the output the sequence of events that our code is executing from the logged output:

- [x] Our first console log occurs just before we call the errorPromise function.
- [x] The second log output occurs within our Promise itself, just before we call the reject callback on the Promise.
- [x] The third log output message occurs within our catch block.


Consider the following function definition:

```ts
// This function takes two arguments, both of which are functions.
function fnDelayedPromise(
    resolve: () => void, // This function will be called when the promise is resolved.
    reject: () => void   // This function will be called when the promise is rejected.
) {
    // This function will be called after a timeout of 1000ms (1 second).
    function afterTimeout() {
        resolve();
    }
    // Set a timeout of 1000ms and call the afterTimeout function when the timeout expires.
    setTimeout(afterTimeout, 1000);
}
// This function returns a Promise that resolves after a delay.
function delayedResponsePromise(): Promise<void> {
    // Create a new Promise object that takes a function as an argument.
    return new Promise<void>(fnDelayedPromise);
}
delayedPromise().then(() => {
  console.log(`delayed promise returned`);
});
function errorPromise(): Promise<void> {
 return new Promise<void>(
 ( // constructor
 resolve: () => void,
 reject: () => void
 ) => {
 // function definition
 console.log(`2. calling reject()`);
 reject();
 }
 )
}
console.log(`1. calling errorPromise()`);
errorPromise().then(() => { })
 .catch(() => { console.log(`3. caught an error`) });
```

## Async Await

> [A PRO egghead video course that covers the same material](https://egghead.io/courses/async-await-using-typescript)

As a thought experiment imagine the following: a way to tell the JavaScript runtime to pause the executing of code on the `await` keyword when used on a promise and resume *only* once (and if) the promise returned from the function is settled:

```ts
// Not actual code. A thought experiment
async function foo() {
    try {
        var val = await getMeAPromise();
        console.log(val);
    }
    catch(err) {
        console.log('Error: ', err.message);
    }
}
```

When the promise settles execution continues,

- [x] if it was fulfilled then await will return the value,
- [x] if it's rejected an error will be thrown synchronously which we can catch.

This suddenly (and magically) makes asynchronous programming as easy as synchronous programming.  Three things needed for this thought experiment are:

- [x] Ability to **pause function** execution.
- [x] Ability to **put a value inside** the function.
- [x] Ability to **throw an exception inside** the function.

This is exactly what generators allowed us to do! The thought experiment *is actually real* and so is the `async`/`await` implementation in TypeScript / JavaScript. Under the covers it just uses generators.

### Generated JavaScript

You don't have to understand this, but it's fairly simple if you've [read up on generators](../generators). The function `foo` can be simply wrapped up as follows:

```ts
const foo = wrapToReturnPromise(function* () {
    try {
        var val = yield getMeAPromise();
        console.log(val);
    }
    catch(err) {
        console.log('Error: ', err.message);
    }
});
```

where the `wrapToReturnPromise` just executes the generator function to get the `generator` and then use `generator.next()`, if the value is a `promise` it would `then`+`catch` the promise and depending upon the result call `generator.next(result)` or `generator.throw(error)`. That's it!


### Async Await Support in TypeScript
**Async - Await** has been supported by [TypeScript since version 1.7](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html). Asynchronous functions are prefixed with the *async* keyword; *await* suspends the execution until an asynchronous function **return promise** is fulfilled and **unwraps the value from the Promise** returned.
It was only supported for **target es6** transpiling directly to **ES6 generators**.

**TypeScript 2.1** [added the capability to ES3 and ES5 run-times](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html), meaning you’ll be free to take advantage of it no matter what environment you’re using. It's important to notice that we can use async / await with TypeScript 2.1 and many browsers are supported, of course, having globally added a **polyfill for Promise**.

Let's see this example and take a look at this code to figure out how TypeScript async / await notation works: 

```ts
function delay(milliseconds: number, count: number): Promise<number> {
    return new Promise<number>(resolve => {
            setTimeout(() => {
                resolve(count);
            }, milliseconds);
        });
}

// async function always returns a Promise
async function dramaticWelcome(): Promise<void> {
    console.log("Hello");

    for (let i = 0; i < 5; i++) {
        // await is converting Promise<number> into number
        const count: number = await delay(500, i);
        console.log(count);
    }

    console.log("World!");
}

dramaticWelcome();
```

**Transpiling to ES6 (--target es6)**

```js
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function delay(milliseconds, count) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(count);
        }, milliseconds);
    });
}
// async function always returns a Promise
function dramaticWelcome() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Hello");
        for (let i = 0; i < 5; i++) {
            // await is converting Promise<number> into number
            const count = yield delay(500, i);
            console.log(count);
        }
        console.log("World!");
    });
}
dramaticWelcome();
```

You can see full example [here](https://cdn.rawgit.com/armanriazi/typescript-all-in-one/705e4496/code/async-await/es6/asyncAwaitES6.js).


**Transpiling to ES5 (--target es5)**

```js
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function delay(milliseconds, count) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(count);
        }, milliseconds);
    });
}
// async function always returns a Promise
function dramaticWelcome() {
    return __awaiter(this, void 0, void 0, function () {
        var i, count;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Hello");
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < 5)) return [3 /*break*/, 4];
                    return [4 /*yield*/, delay(500, i)];
                case 2:
                    count = _a.sent();
                    console.log(count);
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4:
                    console.log("World!");
                    return [2 /*return*/];
            }
        });
    });
}
dramaticWelcome();
```

You can see full example [here](https://cdn.rawgit.com/armanriazi/typescript-all-in-one/705e4496/code/async-await/es5/asyncAwaitES5.js).


**Note**: for both target scenarios, we need to make sure our run-time has an ECMAScript-compliant Promise available globally. That might involve grabbing a polyfill for Promise. We also need to make sure that TypeScript knows Promise exists by setting our lib flag to something like "dom", "es2015" or "dom", "es2015.promise", "es5". 
**We can see what browsers DO have Promise support (native and polyfilled) [here](https://kangax.github.io/compat-table/es6/#test-Promise).**


