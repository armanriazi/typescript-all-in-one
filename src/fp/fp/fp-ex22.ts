/// createPerson is a curried function
/// Unfortunately, the second element in the array prints [Function (anonymous)]. This is because we failed to pass in the gender parameter.
const createPerson = (name) => (age) => (gender) => {
    return {
        name,
        age,
        gender,
    }
}

function printPeople(people) {
    people.forEach(p => console.log(p));
}

const personA = createPerson('firstExampleName')(20)('M');
const personB = createPerson('thisIsAnother')(24);

printPeople([personA, personB]);
