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
delayedResponsePromise().then(() => {
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