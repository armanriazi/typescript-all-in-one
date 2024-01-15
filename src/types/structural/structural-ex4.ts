type X = { a: string };
type Y = { a: string; b: string };


const fn = (x: X) => console.log(x.a);


fn({ a: 'a', bx: 'b' }); // Freshness check: Invalid argument

let x: { a: string } = { a: 'a' };
let y: { a: string; b: string } = { a: 'a', b: '' };
x = y; // Widening: No Freshness check