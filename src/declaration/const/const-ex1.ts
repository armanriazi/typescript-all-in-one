/*const foo = 123;
if (true) {
    const foo = 456; // Allowed as its a new variable limited to this `if` block. cost is akin let when we talk about block scope
}
//Succeed
*/

/*
const foo = { bar: 123 };
foo = { bar: 456 }; // ERROR : Left hand side of an assignment expression cannot be a constant
//Error
*/
/// `>tags:` #important #const
const foo = { bar: 123 };
foo.bar = 456; // Allowed!
console.log(foo); // { bar: 456 }

