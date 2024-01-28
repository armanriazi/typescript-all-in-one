
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
//dogs = animals; // Invalid: Type 'Animal[]' is not assignable to type 'Dog[]'
