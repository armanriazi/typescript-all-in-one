///
/// ```bash
/// pnpm tsc src/fp/function/function-ex3.ts --outfile  ./dist/function-ex3.js
/// ```
///
/// Declare a callback function called "myCallback" 

var myCallback = function(text) {
    // Log the message "myCallback called with" followed by the input "text"
    console.log("myCallback called with " + text);
}

// Declare a function "withCallbackArg" that takes two arguments "message" and "callbackFn"
function withCallbackArg(message, callbackFn) {
    // Log the message "withCallback called, message :" followed by the input "message"
    console.log("withCallback called, message : " + message);
    // Call the callback function "callbackFn" with the message "message + " from withCallback" as an argument
    callbackFn(message + " from withCallback");
}

// Call the function "withCallbackArg" with two arguments "initial text" and the callback function "myCallback"
//withCallbackArg("initial text", myCallback);
