/// IDEs such as IntelliJ do their best to help with such issues. Hovering over personA in IntelliJ shows that it’s a person, whereas hovering over personB shows that it’s not a person. 
///Furthermore, when we provide parameters to the createPerson function, it displays the name of the parameter we have to provide. 
type Person = {
    name: string,
    age: number,
    gender?: string,
}

const createPerson = (name) => (age) => (gender): Person => {
    return {
        name,
        age,
        gender,
    }
}

function printPeople(people: Person[]) {
    people.forEach(p => console.log(p));
}

const personA:Person = createPerson('firstExampleName')(20)('M');
//const personB:Person = createPerson('nameB')(24);

//printPeople([personA, personB]);