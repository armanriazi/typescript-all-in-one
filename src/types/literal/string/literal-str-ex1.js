var o = {
    x: 'a', // This is a wider string
};
var fn = function (x) { return "".concat(x, "-foo"); };
/// `>tags:` #Error_TS2345 #Error_assignable : Argument of type 'string' is not assignable to parameter of type 'X'
/// As you can see the code throws an error when passing o.x to fn as X is a narrower type.
//console.log(fn(o.x));
///We can solve this issue by using type assertion using const or the X type:
var oo = {
    x: 'a',
};
console.log(fn(oo.x));
