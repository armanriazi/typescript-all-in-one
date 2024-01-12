type X = {
    a: string;
};
const y = { a: 'A', b: 'B' }; // Valid, as it has at least the same members as X
const r: X = y;

console.log(`${r.a}`);


type XX = {
    a: string;
};
type YY = {
    a: string;
    b: string;
};
const yy = { a: 'A', b: 'B' }; // Valid, as it has at least the same members as X
const rr: XX = yy;

console.log(`${rr.a}`);