type X = (a: number, b?: number, c?: number) => undefined;
let z:X=(a: number, b?: number, c?: number) => undefined;
console.log(`${z}`);


type Y = (a: number) => undefined;
let x: X = a => undefined;
let y: Y = a => undefined;
y = x; // Valid
x = y; //Valid
console.log(`${y}`);


