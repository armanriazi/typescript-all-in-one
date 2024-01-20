## Decorators

Decorators provide **a mechanism to add metadata, modify behavior, validate, or extend the functionality** of the target element. They are functions that execute at runtime. Multiple decorators can be applied to a declaration.

Decorators are experimental features, and the following examples are only compatible with TypeScript version 5 or above using ES6.

For TypeScript versions prior to 5, they should be enabled using the `experimentalDecorators` property in your `tsconfig.json` or by using `--experimentalDecorators` in your command line (but the following example won't work).

**Some of the common use cases for decorators include**:

- [x] Watching property changes.
- [x] Watching method calls.
- [x] Adding extra properties or methods.
- [x] Runtime validation.
- [x] Automatic serialization and deserialization.
- [x] Logging.
- [x] Authorization and authentication.
- [x] Error guarding.

Note: Decorators for version 5 do not allow decorating parameters.

Types of decorators:

#### Class Decorators

Class Decorators are useful for extending an existing class, such as adding properties or methods, or collecting instances of a class. In the following example, we add a `toString` method that converts the class into a string representation.

```typescript
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
/*- [x]* Logs:
{"name":"Simon"}
{"kind":"class","name":"Person"}
*/
```


#### Property Decorator

Property decorators are useful for modifying the behavior of a property, such as changing the initialization values. In the following code, we have a script that sets a property to always be in uppercase:

```typescript
function upperCase<T>(
    target: undefined,
    context: ClassFieldDecoratorContext<T, string>
) {
    return function (this: T, value: string) {
        return value.toUpperCase();
    };
}

class MyClass {
    @upperCase
    prop1 = 'hello!';
}

console.log(new MyClass().prop1); // Logs: HELLO!
```

#### Method Decorator

Method decorators allow you to change or enhance the behavior of methods. Below is an example of a simple logger:

```typescript
function log<This, Args extends any[], Return>(
    target: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext<
        This,
        (this: This, ...args: Args) => Return
    >
) {
    const methodName = String(context.name);

    function replacementMethod(this: This, ...args: Args): Return {
        console.log(`LOG: Entering method '${methodName}'.`);
        const result = target.call(this, ...args);
        console.log(`LOG: Exiting method '${methodName}'.`);
        return result;
    }

    return replacementMethod;
}

class MyClass {
    @log
    sayHello() {
        console.log('Hello!');
    }
}

new MyClass().sayHello();
```

It logs:

```bash
LOG: Entering method 'sayHello'.
Hello!
LOG: Exiting method 'sayHello'.
```


#### Getter and Setter Decorators

Getter and setter decorators allow you to change or enhance the behavior of class accessors. They are useful, for instance, for validating property assignments. Here's a simple example for a getter decorator:

```typescript
function range<This, Return extends number>(min: number, max: number) {
    return function (
        target: (this: This) => Return,
        context: ClassGetterDecoratorContext<This, Return>
    ) {
        return function (this: This): Return {
            const value = target.call(this);
            if (value < min || value > max) {
                throw 'Invalid';
            }
            Object.defineProperty(this, context.name, {
                value,
                enumerable: true,
            });
            return value;
        };
    };
}

class MyClass {
    private _value = 0;

    constructor(value: number) {
        this._value = value;
    }
    @range(1, 100)
    get getValue(): number {
        return this._value;
    }
}

const obj = new MyClass(10);
console.log(obj.getValue); // Valid: 10

const obj2 = new MyClass(999);
console.log(obj2.getValue); // Throw: Invalid!
```

#### Decorator Metadata

Decorator Metadata simplifies the process for decorators to apply and utilize metadata in any class. They can access a new metadata property on the context object, which can serve as a key for both primitives and objects.
Metadata information can be accessed on the class via `Symbol.metadata`.

Metadata can be used for various purposes, such as debugging, serialization, or dependency injection with decorators.

```typescript
//@ts-ignore
Symbol.metadata ??= Symbol('Symbol.metadata'); // Simple polify

type Context =
    | ClassFieldDecoratorContext
    | ClassAccessorDecoratorContext
    | ClassMethodDecoratorContext; // Context contains property metadata: DecoratorMetadata

function setMetadata(_target: any, context: Context) {
    // Set the metadata object with a primitive value
    context.metadata[context.name] = true;
}

class MyClass {
    @setMetadata
    a = 123;

    @setMetadata
    accessor b = 'b';

    @setMetadata
    fn() {}
}

const metadata = MyClass[Symbol.metadata]; // Get metadata information

console.log(JSON.stringify(metadata)); // {"bar":true,"baz":true,"foo":true}
```
