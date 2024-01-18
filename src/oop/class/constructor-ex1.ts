/// In TypeScript, it is possible to define multiple constructor overloads, but you can have only one implementation that must be compatible with all the overloads, this can be achieved  by using an optional parameter.
type Sex = 'm' | 'f';

class Person {
    name: string;
    age: number;
    sex: Sex;

    constructor(name: string, age: number, sex?: Sex);
    constructor(name: string, age: number, sex: Sex) {
        this.name = name;
        this.age = age;
        this.sex = sex ?? 'm';
    }
}

const p1 = new Person('Simon', 17);
console.log(`${p1.sex}`);
const p2 = new Person('Alice', 22, 'f');
console.log(`${p2.sex}`);