## Creating a namespace

Let’s take a look at the first version of a declaration file for our ErrorHelper JavaScript class in the file named globals.d.ts:

```typescript
declare module ErrorHelper {
 function containsErrors(response: any): boolean; // checks if response contains any errors
 function trace(message: any): void; // logs a message for debugging purposes
}

```

This module declaration is acting as a namespace, meaning that we need to reference each of these functions by their fully qualified names, that is, **ErrorHelper.containsErrors, and ErrorHelper.trace.**

### Defining interfaces

Note that even though we have declared the two functions that are available on the ErrorHelper class, we are still missing some crucial information about them.

```typescript
// This code defines TypeScript interfaces and a module for error handling

interface IResponse {
 responseText: IFailureMessage;
}
interface IFailureMessage {
 failure: boolean | string;
 errorMessage?: string;
}
declare module ErrorHelper {
  function containsErrors(response: IResponse): boolean; // checks if response contains any errors
  function trace(message: IResponse | string): void; // logs a message for debugging purposes
}

```