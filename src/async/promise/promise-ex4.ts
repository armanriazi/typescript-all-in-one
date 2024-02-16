// A function that returns a promise that resolves with a string
// or rejects with an error code if `throwError` is true
function promiseReturningString(throwError: boolean): Promise<string> {
    return new Promise<string>(
      // The promise constructor takes a function that receives two callbacks:
      // `resolve` and `reject`
      (
        resolve: (outputValue: string) => void, // The `resolve` callback accepts a single string argument
        reject: (errorCode: number) => void // The `reject` callback accepts a single number argument
      ) => {
        if (throwError) {
          reject(101); // If `throwError` is true, reject with error code 101
        }
        resolve(`resolve with message`); // Otherwise, resolve with the given string message
      }
    );
  }
  // Log a message indicating that we're about to call `promiseReturningString`
console.log(`1. calling promiseReturningString`);

// Call `promiseReturningString` with `throwError` set to `false`
promiseReturningString(true)
  // If the promise resolves successfully, log the resolved value to the console
  .then((returnValue: string) => {
    console.log(`2. returnedValue : ${returnValue}`);
  })
  // If the promise is rejected, log an error message to the console
  .catch((errorCode: number) => {
    console.log(`2. caught : ${errorCode}`);
  });
