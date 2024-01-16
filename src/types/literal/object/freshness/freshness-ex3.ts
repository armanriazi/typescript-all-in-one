///
/// ```bash
/// pnpm tsc ./src/types/literal/object/freshness/freshness-ex3.ts
/// ```
///
type X = { a: string };
type Y = { a: string; b: string };
/*
let x: X;
x = { a: 'a', b: 'b' }; // Freshness check: Invalid assignment
var y: Y;
y = { a: 'a', bx: 'bx' }; // Freshness check: Invalid assignment

const fn = (x: X) => console.log(x.a);

fn(x);
fn(y); // Widening: No errors, structurally type compatible

//fn({ a: 'a', bx: 'b' }); // Freshness check: Invalid argument

let x: { a: string } = { a: 'a' };
let y: { a: string; b: string } = { a: 'a', b: '' };
x = y; // Widening: No Freshness check
*/