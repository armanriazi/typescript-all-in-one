// function withInnerFunction(outer) {
//     return function ourInnerFunction(inner) {
//         console.log(`Outer function received ${outer}, inner got ${inner}`);
//     };
// }

// const returnedFunction = withInnerFunction('a');

// // some time later in our program, we actually need to call returnedFunction 
// returnedFunction('b');


// Convert to closure
const withInnerFunction = (outer) => (inner) => console.log(`Outer function received ${outer}, inner ${inner}`);
const returnedFunction = withInnerFunction('a');
returnedFunction('b');