///
/// ```bash
/// pnpm tsc ./src/types/literal/string/literal-str-ex1.ts
/// ```
///
type X = 'a' | 'b';

let o = {
    x: 'a', // This is a wider string
};

const fn = (x: X) => `${x}-foo`;
/// `>tags:` #Error_TS2345 #Error_assignable : Argument of type 'string' is not assignable to parameter of type 'X'
/// As you can see the code throws an error when passing o.x to fn as X is a narrower type.
//console.log(fn(o.x));

///We can solve this issue by using type assertion using const or the X type:
let oo = {
    x: 'a' as X,// as const,
};
console.log(fn(oo.x));