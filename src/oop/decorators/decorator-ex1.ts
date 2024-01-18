type Constructor<T = {}> = new (...args: any[]) => T;
function toString<Class extends Constructor>(
    Value: Class,
    context: ClassDecoratorContext<Class>
) {
    return class extends Value {
        constructor(...args: any[]) {
            super(...args);
            console.log(JSON.stringify(this));
            console.log(JSON.stringify(context));
        }
    };
}

@toString
class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet() {
        return 'Hello, ' + this.name;
    }
}
const person = new Person('Simon');
console.log(`${person.name}`);
console.log(`${person.greet()}`);
// Logs:
/*{"name":"Simon"}
{"kind":"class","name":"Person"}
*/