/// `>tags:` #important #keyof  #type_mapping #assertion
//Valid
var r = {
    prefix_a: 'a',
    prefix_b: 2,
    prefix_c: function () { console.log("Prefix Assigned"); },
};
console.log("".concat(r.prefix_a, ",").concat(r.prefix_b, ",").concat(r.prefix_c));
//
/*Invalid
const r = {
    a: 'a',
    b: 2,
} as unknown as Y;

console.log(`${r.a},${r.b}`);
*/ 
