export function delayedPromise(): Promise<void> {
    return new Promise<void>(
      // The Promise constructor takes a callback function with two arguments: resolve and reject.
      // In this case, the Promise will always resolve, so we don't need to use the reject argument.
      (
        resolve: () => void,
        reject: () => void
      ) => {
        // We use setTimeout to delay the resolution of the Promise by 1 second.
        setTimeout(() => {
          console.log(`2. calling resolve()`);
          resolve();
        }, 1000);
      }
    );
  }
  function errorPromise(): Promise<string> {
    return new Promise<string>(
      // The Promise constructor takes a callback function with two arguments: resolve and reject.
      // In this case, the Promise will always reject, so we don't need to use the resolve argument.
      (
        resolve: (result: string) => void,
        reject: (error: string) => void
      ) => {
        // We use setTimeout to delay the rejection of the Promise by 1 second.
        setTimeout(() => {
          console.log(`2. calling reject()`);
          reject("promise rejected");
        }, 1000);
      }
    );
  }
  
  // This async function calls the delayedPromise function and logs messages before and after it is called.
async function callDelayedPromise() {
    console.log(`1. before calling delayedPromise`);
    // The await keyword is used to wait for the delayedPromise function to resolve before continuing execution.
    await delayedPromise();
    console.log(`3. after calling delayedPromise`);
  }
  
  // Call the function to trigger its execution and log its output.
  callDelayedPromise();
  

  async function callErrorPromise() {
    try {
      console.log(`1. calling errorPromise()`);
      // The await keyword is used to wait for the errorPromise function to either resolve or reject before continuing execution.
      await errorPromise();
    } catch (error) {
      console.log(`3. await threw: ${error}`);
    }
  }
  
  // Call the function to trigger its execution and log its output.
  callErrorPromise();
  