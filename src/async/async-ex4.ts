/// The await keyword will pause execution of our code block until the Promise has returned. If we need to use the await keyword, then we must mark the function that it is used in with the async keyword.
function promiseWithValues(): Promise<string[]> {
    return new Promise<string[]>(
      // The Promise constructor takes a callback function with two arguments: resolve and reject.
      // In this case, the Promise will always resolve, so we don't need to use the reject argument.
      (
        resolve: (values: string[]) => void,
        reject: (error: string) => void
      ) => {
        // We call the resolve function with an array of strings.
        resolve(["first", "second"]);
      }
    );
  }
  async function getValuesFromPromise() {
    // The await keyword is used to wait for the promiseWithValues function to resolve before continuing execution.
    let values = await promiseWithValues();
    for (let value of values) {
      console.log(`value: ${value}`);
    }
  }
  
  // Call the function to trigger its execution and log its output.
  getValuesFromPromise();
  