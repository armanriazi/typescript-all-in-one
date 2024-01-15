type X = {
    a: string;
};
const x = {
    a: 'a',
    b: 'b',
} as X;

console.log(`${x.a}`); //Valid
//console.log(`${x.b}`); //invalid
