// Define a variable named objPrec1 of type object with properties id and name
let objPrec1: object = { id: 1, name: "obj1 name" };

// Define a variable named objPrec2 of type object with properties id and desc
let objPrec2: object = { id: 1001, desc: "obj2 description" };

// Use the object spread syntax to merge the properties of objPrec1 and objPrec2 into a new object, objPrec3
let objPrec3 = { ...objPrec1, ...objPrec2 };

// Log the contents of objPrec3 to the console using JSON.stringify() with 4 spaces of indentation
console.log(`objPrec3 : ${JSON.stringify(objPrec3, null, 4)}`);
