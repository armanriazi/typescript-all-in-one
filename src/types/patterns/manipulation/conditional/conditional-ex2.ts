// The type takes in a generic parameter T and checks whether T is of type number or string.
// If T is a number, then NumberOrString<T> is of type number. Otherwise, it's of type string.
type NumberOrString<T> = T extends number ? number : string;

function logNumberOrString<T>(input: NumberOrString<T>) {
 console.log(`logNumberOrString : ${input}`);
}

// Calls to the logNumberOrString function with different input types.
logNumberOrString<number>(1);
logNumberOrString<string>("test");
//logNumberOrString<boolean>(true);//Invalid
