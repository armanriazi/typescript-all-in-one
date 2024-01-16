class Person {
    firstName: string = "John";
    lastName: string = "Doe";
    
    get fullName() {
        return this.firstName + this.lastName;
    }
}

const person = new Person();
console.log(person.fullName); // John Doe
//person.fullName = "Dear Reader"; // Error! fullName is readonly