var x;
x = { a: 'a', b: 'b' }; // Freshness check: Invalid assignment
var y;
y = { a: 'a', bx: 'bx' }; // Freshness check: Invalid assignment
var fn = function (x) { return console.log(x.a); };
fn(x);
fn(y); // Widening: No errors, structurally type compatible
//fn({ a: 'a', bx: 'b' }); // Freshness check: Invalid argument
var x = { a: 'a' };
var y = { a: 'a', b: '' };
x = y; // Widening: No Freshness check
