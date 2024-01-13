let a: number = 1;
let b: number = 2;
a = b; // Valid, everything is assignable to itself

let c: any;
c = 1; // Valid, all types are assignable to any

let d: unknown;
d = 1; // Valid, all types are assignable to unknown

let n: null;
 n = 1; // Invalid error TS2322: Type '1' is not assignable to type 'null'.

//let na: NaN; // error TS2749: 'NaN' refers to a value, but is being used as a type here. Did you mean 'typeof NaN'?
//na = 1;

let e: unknown;
let e1: unknown = e; // Valid, unknown is only assignable to itself and any
let e2: any = e; // Valid
//let e3: number = e; // Invalid

let f: never;
//f = 1; // Invalid, nothing is assignable to never

let g: void;
let g1: any;
//g = 1; // Invalid, void is not assignable to or from anything expect any
g = g1; // Valid

/*
Please note that when “strictNullChecks” is enabled, “null” and “undefined” are treated similarly to “void”; otherwise, they are similar to “never”.
*/