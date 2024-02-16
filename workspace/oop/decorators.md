## Decorators
Decorators, however, allow us to inject code into the actual definition of a class **before a class instance has been created**. They are similar to **attributes** in C# or annotations in Java.
Angular, where they are primarily used for dependency injection, or Vue, where they are used to inject functions into a class definition.
Decorators provide **a mechanism to add metadata, modify behavior, validate, or extend the functionality** of the target element. They are functions that execute at runtime. Multiple decorators can be applied to a declaration.

Decorators are experimental features, and the following examples are only compatible with TypeScript version 5 or above using ES6.

A decorator is a function that is called with a specific set of parameters. These parameters are automatically populated by the JavaScript runtime and contain information about the class, method, or property to which the decorator has been applied. The number of parameters, and their types, determine where a decorator can be applied. 

- [x] logs a message to the console, indicating that it has been invoked.
- [x] Decorators are only invoked once when a class is defined.
- [x] Decorators are **called in the reverse order** of their appearance within our code.

To illustrate this syntax, let’s define a class decorator as follows:

```typescript
function simpleDecorator(constructor: Function) {
 console.log('simpleDecorator called');
}
function secondDecorator(constructor: Function) {
 console.log(`secondDecorator called`);
}

@simpleDecorator
@secondDecorator
class ClassWithSimpleDecorator {
}
let instance_1 = new ClassWithSimpleDecorator();
let instance_2 = new ClassWithSimpleDecorator();
console.log(`instance_1 : ${JSON.stringify(instance_1)}`);
console.log(`instance_2 : ${JSON.stringify(instance_2)}`);
```

`> Output:`

```md
secondDecorator called
simpleDecorator called
instance_1 : {}
instance_2 : {}
```

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

Let’s take a quick look at the types of decorators, which are:

- [x] Class decorators: These are decorators that can be applied to a class definition.
- [x] Property decorators: These are decorators that can be applied to a property within a class.
- [x] Method decorators: These are decorators that can be applied to a method on a class.
- [x] Parameter decorators: These are decorators that can be applied to a parameter of a method within a class.

```typescript
// Define a function called classDecorator which takes a constructor function as input
function classDecorator(
  constructor: Function
) {}

// Define a function called propertyDecorator which takes an object and a string property key as input
function propertyDecorator(
  target: any,
  propertyKey: string
) {}

// Define a function called methodDecorator which takes an object, a string method name, and an optional property descriptor object as input
function methodDecorator(
  target: any,
  methodName: string,
  descriptor?: PropertyDescriptor
) {}

// Define a function called parameterDecorator which takes an object, a string method name, and a number representing a parameter index as input
function parameterDecorator(
  target: any,
  methodName: string,
  parameterIndex: number
) {}

// Define a class called ClassWithAllTypesOfDecorators and apply the classDecorator to it
@classDecorator
class ClassWithAllTypesOfDecorators {
  // Apply the propertyDecorator to the id property of the class
  @propertyDecorator
  id: number = 1;

  // Apply the methodDecorator to the print method of the class
  @methodDecorator
  print() { }

  // Apply the parameterDecorator to the id parameter of the setId method of the class
  setId(@parameterDecorator id: number) { }
}

```

## Decorator factories

We can see that the anonymous function returned by the decoratorFactory function is invoked with the string "testName" as the value of the name argument.

There are two things to note regarding decorator factory functions.

- [x] Firstly, they must return a function that has the correct number of parameters and types of parameters, depending on what type of decorator they are.
- [x] Secondly, the parameters defined for the decorator factory function can be used anywhere within the function definition, which includes within the anonymous decorator function itself.

```typescript
function decoratorFactory(name: string) {
  // Return a decorator function that takes a constructor function as input and logs the name parameter to the console
  return (constructor: Function) => {
    console.log(`decorator function called with : ${name}`);
  }
}
// Apply the decorator generated by decoratorFactory function to the ClassWithDecoratorFactory class
@decoratorFactory('testName')
class ClassWithDecoratorFactory {
}
```

---

`Can a class decorator be used to modify the constructor of a class in TypeScript?`

Yes, by defining a new constructor function and assigning it to the constructor property of the class.
ref.to decorator-ex-11(ex-13).ts

`Can a method decorator modify the behavior of the method it is decorating in TypeScript?`
Yes, a method decorator can modify the method’s behavior by wrapping the method in a new function or modifying its implementation directly.

`Can a property decorator be used to modify the type of a property in TypeScript?`
No, the type of a property can’t be modified by a decorator.


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

we will need to set the emitDecoratorMetadata flag in our tsconfig.json file to true as follows:

```json
{
 "compilerOptions": {
 // other compiler options
 "experimentalDecorators": true,
 "emitDecoratorMetadata": true
 }
}
```            

For example

```typescript
function metadataParameterDec(
 target: any,
 methodName: string,
 parameterIndex: number
) {}
// Define a class called `ClassWithMetadata`.
class ClassWithMetadata {
 // Define a method called `print`.
 print(
  // Apply `metadataParameterDec` decorator on `id` parameter.
  @metadataParameterDec id: number, name: string
 ) {}
}

```            

If the emitDecoratorMetadata flag of our tsconfig.json file is **set to false** or is not present, then the compiler will emit the following JavaScript:

```typescript
function metadataParameterDec(target, methodName, parameterIndex) {
}
var ClassWithMetadata = /** @class */ (function () {
    function ClassWithMetadata() {
    }
    ClassWithMetadata.prototype.print = function (id, name) {
    };
    __decorate([
        __param(0, metadataParameterDec)
    ], ClassWithMetadata.prototype, "print", null);
    return ClassWithMetadata;
}());
```

Generated JS will show more info with inject code of __decorate because we enable the feature of **emitDecoratorMetadata=true**


```js
function metadataParameterDec(target, methodName, parameterIndex) {
}
var ClassWithMetadata = /** @class */ (function () {
    function ClassWithMetadata() {
    }
    ClassWithMetadata.prototype.print = function (id, name) {
    };
    __decorate([
        __param(0, metadataParameterDec),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, String]),
        __metadata("design:returntype", void 0)
    ], ClassWithMetadata.prototype, "print", null);
    return ClassWithMetadata;
}());
```

The information that is recorded by the TypeScript compiler when using the emitDecoratorMetadata compiler flag can be read and interpreted at runtime.

`Note:` **As reflect-metadata is a third-party** library, we need to install it using npm install reflect-metadata when using on a local machine.

We can now start to use this metadata by calling the Reflect.getMetadata function that this library provides, as follows:

```typescript
import 'reflect-metadata';

function reflectParameterDec(target: any,
 methodName: string,
 parameterIndex: number)
{
 let designType = Reflect.getMetadata(
 "design:type", target, methodName);
 console.log(`design type: ${designType.name}`)
 let designParamTypes = Reflect.getMetadata(
 "design:paramtypes", target, methodName);
 for (let paramType of designParamTypes) {
 console.log(`param type : ${paramType.name}`);
 }
 let designReturnType = Reflect.getMetadata(
 "design:returntype", target, methodName);
 console.log(`return types : ${designReturnType.name}`);
}

class ClassWithReflectMetaData {
 print(
 @reflectParameterDec
 id: number,
 name: string
 ): number
 {
 return 1000;
 }
}

```

When we run this code snippet, we get the following output:

```md
design type: Function
param type : Number
param type : String
return types : Number
```

`>tags:` [[Important]] [[Debug]] [[Serialization]] [[Dependency_Injection]] [[Decorator]]

Using decorator metadata allows us to retain some of this type of information and opens the door to using this type of information to **generate code analysis tools**, for example, or to write frameworks for dependency injection.

> Metadata can be used for various purposes, such as debugging, serialization, or dependency injection with decorators.

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
