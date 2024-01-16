var foo = [1, 2, 3];
console.log(foo[0]); // Okay
//foo.push(4);           // Error: `push` does not exist on ReadonlyArray as it mutates the array
foo = foo.concat([4]); // Okay: create a copy
console.log("".concat(foo));
