type X = (a: number, ...rest: number[]) => undefined;
let x: X = a => undefined; //valid

console.log(`${x}`);
