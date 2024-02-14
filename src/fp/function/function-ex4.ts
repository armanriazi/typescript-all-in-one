// Declare a function "myCallback" that takes a string argument "text" and returns nothing
function myCallback(text: string): void {
    // Log the message "myCallback called with" followed by the input "text" using template literals
    console.log(`myCallback called with ${text}`);
  }
  
  // Declare a function "withCallbackArg" that takes two arguments:
  // - "message" of type string
  // - "callbackFn" of type function that takes a string argument and returns nothing
  function withCallbackArg(
   message: string,
   callbackFn: (text: string) => void
  ) {
    // Log the message "withCallback called, message :" followed by the input "message" using template literals
    console.log(`withCallback called, message : ${message}`);
    // Call the callback function "callbackFn" with the message "message + " from withCallback" as an argument
    callbackFn(`${message} from withCallback`);
  }
  
  withCallbackArg("initial text", myCallback);
//withCallbackArg("text", "this is not a function");