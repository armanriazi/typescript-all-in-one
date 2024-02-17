interface Person {
    hello(): void;
}

function sayHello(person: Person | undefined) {
    person!.hello(); // no errors! because of using ! as a unsafe code that developer will guaranty
}