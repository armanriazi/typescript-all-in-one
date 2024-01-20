### Private and Protected Constructors

In TypeScript, constructors can be marked as private or protected, which restricts their accessibility and usage.

Private Constructors:
Can be called only within the class itself. Private constructors are often used in scenarios where you want to enforce a singleton pattern or restrict the creation of instances to a factory method within the class

Protected Constructors:
Protected constructors are useful when you want to create a base class that should not be instantiated directly but can be extended by subclasses.

```typescript
class BaseClass {
    protected constructor() {}
}

class DerivedClass extends BaseClass {
    private value: number;

    constructor(value: number) {
        super();
        this.value = value;
    }
}

// Attempting to instantiate the base class directly will result in an error
// const baseObj = new BaseClass(); // Error: Constructor of class 'BaseClass' is protected.

// Create an instance of the derived class
const derivedObj = new DerivedClass(10);
```

### Access Modifiers

Access Modifiers `private`, `protected`, and `public` are used to control the visibility and accessibility of class members, such as properties and methods, in TypeScript classes. These modifiers are essential for enforcing encapsulation and establishing boundaries for accessing and modifying the internal state of a class.

The `private` modifier restricts access to the class member only within the containing class.

The `protected` modifier allows access to the class member within the containing class and its derived classes.

The `public` modifier provides unrestricted access to the class member, allowing it to be accessed from anywhere."

### Get & Set

Getters and setters are special methods that allow you to define custom access and modification behavior for class properties. They enable you to encapsulate the internal state of an object and provide additional logic when getting or setting the values of properties.
In TypeScript, getters and setters are defined using the `get` and `set` keywords respectively. Here's an example:

```typescript
class MyClass {
    private _myProperty: string;

    constructor(value: string) {
        this._myProperty = value;
    }
    get myProperty(): string {
        return this._myProperty;
    }
    set myProperty(value: string) {
        this._myProperty = value;
    }
}
```

### Auto-Accessors in Classes

TypeScript version 4.9 adds support for auto-accessors, a forthcoming ECMAScript feature. They resemble class properties but are declared with the "accessor" keyword.

```typescript
class Animal {
    accessor name: string;

    constructor(name: string) {
        this.name = name;
    }
}
```

Auto-accessors are "de-sugared" into private `get` and `set` accessors, operating on an inaccessible property.

<!-- skip -->
```typescript
class Animal {
    #__name: string;

    get name() {
        return this.#__name;
    }
    set name(value: string) {
        this.#__name = name;
    }

    constructor(name: string) {
        this.name = name;
    }
}
```

### Abstract Classes

Abstract Classes are used in TypeScript mainly for inheritance, they provide a way to define common properties and methods that can be inherited by subclasses.
This is useful when you want to define common behavior and enforce that subclasses implement certain methods. They provide a way to create a hierarchy of classes where the abstract base class provides a **shared interface and common functionality for the subclasses**.

```typescript
abstract class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract makeSound(): void;
}

class Cat extends Animal {
    makeSound(): void {
        console.log(`${this.name} meows.`);
    }
}

const cat = new Cat('Whiskers');
cat.makeSound(); // Output: Whiskers meows.
```

### With Generics

Classes with generics allow you to define reusable classes which can work with different types.

```typescript
class Container<T> {
    private item: T;

    constructor(item: T) {
        this.item = item;
    }

    getItem(): T {
        return this.item;
    }

    setItem(item: T): void {
        this.item = item;
    }
}

const container1 = new Container<number>(42);
console.log(container1.getItem()); //  42

const container2 = new Container<string>('Hello');
container2.setItem('World');
console.log(container2.getItem()); // World
```