//When generics do not have their type argument specified, all the unspecified arguments are treated as types with “any”:
type X = <T>(x: T) => T;
type Y = <K>(y: K) => K;
let x: X = x => x;
let y: Y = y => y;
x = y; // Valid