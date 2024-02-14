
# Inheritance

TypeScript does not support multiple inheritance in the traditional sense and instead allows inheritance from a single base class.
TypeScript supports multiple interfaces. An interface can define a contract for the structure of an object, and a class can implement multiple interfaces. This allows a class to inherit behavior and structure from multiple sources.

```typescript
interface Flyable {
    fly(): void;
}

interface Swimmable {
    swim(): void;
}

class FlyingFish implements Flyable, Swimmable {
    fly() {
        console.log('Flying...');
    }

    swim() {
        console.log('Swimming...');
    }
}

const flyingFish = new FlyingFish();
flyingFish.fly();
flyingFish.swim();
```

The `class` keyword in TypeScript, similar to JavaScript, is often referred to as syntactic sugar. It was introduced in ECMAScript 2015 (ES6) to offer a more familiar syntax for creating and working with objects in a class-based manner. However, it's important to note that TypeScript, being a superset of JavaScript, ultimately compiles down to JavaScript, which remains prototype-based at its core.

### Implements with Extends

```ts
// This is the BaseClass implementation that implements the IBase interface
// The `id` property is set to a default value of 0
class BaseClass implements IBase {
  id: number = 0;
}

// This is the DerivedFromBaseClass that extends the BaseClass
// and implements the IDerivedFromBase interface
// The `name` property is set to a default value of "nameString"
class DerivedFromBaseClass
  extends BaseClass
  implements IDerivedFromBase {
  name: string = "nameString";
}
```