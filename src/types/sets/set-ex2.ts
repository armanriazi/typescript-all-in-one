type X = {
    a: string;
};
type Y = {
    b: string;
};
type XY = X & Y;
const r: XY = { a: 'a', b: 'x' }; // Valid

console.log(`${r.a}, ${r.b}`);