var nameNumber: [string, number];

// Okay
nameNumber = ['Jenny', 8675309];

// Error!
//nameNumber = ['Jenny', '867-5309'];


//Combine this with the destructuring support in TypeScript, tuples feel fairly first class despite being arrays underneath:


var nameNumber: [string, number];
nameNumber = ['Jenny', 8675309];

var [name, num] = nameNumber;