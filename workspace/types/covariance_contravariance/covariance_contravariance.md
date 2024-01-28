### Covariance and Contravariance in TypeScript

Covariance and Contravariance are used to **describe how relationships** work when dealing with **inheritance or assignment of types**.

Covariance means that a type relationship preserves the direction of inheritance or assignment, so if a type A is a subtype of type B, then an array of type A is also considered a subtype of an array of type B. The important thing to note here is that the subtype relationship is maintained this means that Covariance accept subtype but doesn't accept supertype.

Contravariance means that a type relationship reverses the direction of inheritance or assignment, so if a type A is a subtype of type B, then an array of type B is considered a subtype of an array of type A. The subtype relationship is reversed this means that Contravariance accept supertype but doesn't accept subtype.

`Covariance(accept subtype)`

```md
A(is sub type of)->B
Result:
Array of A(is sub type of)-> Array of B
```

`Contravariance(accept supertype)`

```md
A(is sub type of)->B
Result:
Array of B(is sub type of)-> Array of A
```

```md
Notes: Bivariance means accept both supertype & subtype.
```

> `Example:` Let's say we have a space for all animals and a separate space just for dogs.

In Covariance, you can put all the dogs in the animals space because dogs are a type of animal. But you cannot put all the animals in the dog space because there might be other animals mixed in.

In Contravariance, you cannot put all the animals in the dogs space because the animals space might contain other animals as well. However, you can put all the dogs in the animal space because all dogs are also animals.

<!-- skip -->
```typescript
// Covariance example
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    breed: string;
    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }
}

let animals: Animal[] = [];
let dogs: Dog[] = [];

// Covariance allows assigning subtype (Dog) array to supertype (Animal) array
animals = dogs;
dogs = animals; // Invalid: Type 'Animal[]' is not assignable to type 'Dog[]'

// Contravariance example
type Feed<in T> = (animal: T) => void;

let feedAnimal: Feed<Animal> = (animal: Animal) => {
    console.log(`Animal name: ${animal.name}`);
};

let feedDog: Feed<Dog> = (dog: Dog) => {
    console.log(`Dog name: ${dog.name}, Breed: ${dog.breed}`);
};

// Contravariance allows assigning supertype (Animal) callback to subtype (Dog) callback
feedDog = feedAnimal;
feedAnimal = feedDog; // Invalid: Type 'Feed<Dog>' is not assignable to type 'Feed<Animal>'.
```

`Notice`

In TypeScript, type relationships for arrays are covariant, while type relationships for function parameters are contravariant. This means that TypeScript exhibits both covariance and contravariance, depending on the context.

#### Optional Variance Annotations for Type Parameters

As of TypeScript 4.7.0, we can use the `out` and `in` keywords to be specific about Variance annotation.

For Covariant, use the `out` keyword:

```typescript
type AnimalCallback<out T> = () => T; // T is Covariant here
```

And for Contravariant, use the `in` keyword:

```typescript
type AnimalCallback<in T> = (value: T) => void; // T is Contravariance here
```
