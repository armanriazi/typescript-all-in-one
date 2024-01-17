///`>tags:` #Intersection
type A = {
    a: number;
};
type B = {
    b: number;
};
type C = A & B; 

let x:C={a:10, b:20};

console.log(`${x.a},${x.b}`);