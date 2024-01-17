const identity = (value: number) => value;

enum E {
    //A = 2 - [x] 5, // Numeric literal
    B = 'bar', // String literal
    C = identity(42), // Opaque computed
}

console.log(E.C); //42
