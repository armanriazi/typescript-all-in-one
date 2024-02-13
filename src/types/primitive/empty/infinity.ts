console.log(Number.MAX_VALUE);  // 1.7976931348623157e+308
console.log(-Number.MAX_VALUE); // -1.7976931348623157e+308

console.log(Number.MAX_VALUE + 1 == Number.MAX_VALUE);   // true!
console.log(-Number.MAX_VALUE - 1 == -Number.MAX_VALUE); // true!

console.log(Number.MAX_VALUE + 1e292);  // Infinity
console.log(-Number.MAX_VALUE - 1e292); // -Infinity

console.log( 1 / 0); // Infinity
console.log(-1 / 0); // -Infinity

console.log(Number.POSITIVE_INFINITY === Infinity);  // true
console.log(Number.NEGATIVE_INFINITY === -Infinity); // true

console.log( Infinity >  1); // true
console.log(-Infinity < -1); // true

console.log('\n'); 

console.log(Number.MIN_VALUE);  // 5e-324
//Values smaller than MIN_VALUE (“underflow values”) are converted to 0.
console.log(Number.MIN_VALUE / 10);  // 0