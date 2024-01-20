
type X = { a: string };
type Y = { a: string; b: string };

let x: X;
//x = { a: 'a', b: 'b' }; // Freshness check: Invalid assignment
var y: Y;
//y = { a: 'a', bx: 'bx' }; // Freshness check: Invalid assignment
//y = { a: 'a', b: 'bx' }; // Freshness check: Invalid assignment

const fn = (x: X) => console.log(x.a);

//fn(x);
//fn(y); // Widening: No errors, structurally type compatible