type Mutable<T> = {
    readonly [P in keyof T]: T[P];
};
type Person = {
    name: string;
    age: number;
};
type ImmutablePerson = Mutable<Person>; // Properties become read-only

let x:ImmutablePerson= {name: "arman", age: 33};
//x.age=50;
console.log(`${x.age}`);