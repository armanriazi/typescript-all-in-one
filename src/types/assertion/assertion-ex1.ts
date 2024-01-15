/// `>tags:` #important #keyof  #type_mapping #assertion

type PREFIX<Type> = {
    [prop in keyof Type as `prefix_${string & prop}`]: () => Type[prop];
};
type X = {
    a: string;
    b: number;
    c: ()=>{}
};
type Y = PREFIX<X>;

//Valid
const r = {
    prefix_a: 'a',
    prefix_b: 2,
    prefix_c: ()=>{console.log(`Prefix Assigned`);},
} as unknown as Y;

console.log(`${r.prefix_a},${r.prefix_b},${r.prefix_c}`);
//

/*Invalid
const r = {
    a: 'a',
    b: 2,
} as unknown as Y;

console.log(`${r.a},${r.b}`);
*/