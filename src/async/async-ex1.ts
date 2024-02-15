
/// `>tags:` [[Important]] #async #TimeOut #Promise
/// ```bash
/// pnpm tsc src/async/async-ex1.ts --outfile  ./dist/async-ex1.js
/// ```
///
// How does async work?
// This function takes a callback function as a parameter
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
  