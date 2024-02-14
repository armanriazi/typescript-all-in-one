///
/// ```bash
/// pnpm ts-node src/oop/generic/generic-ex7.ts --keyofStringsOnly --outfile  ./dist/generic-ex7.js
/// ```
///
///`>tags:` #Important #Keyof #Generic #Lib #keyofStringsOnly #tsconfig

// Define a function named printProperty that takes two generic type parameters
function printProperty<T, K extends keyof T>
 (object: T, key: K) {
 let propertyValue = object[key];
 console.log(`object[${key}] = ${propertyValue}`);
}
let obj1 = {
    id: 1,
    name: "myName",
    print() { console.log(`${this.id}`) }
}   
printProperty(obj1, "id");
printProperty(obj1, "name");
printProperty(obj1, "print"); //This code does not invoke the function; it simply logs the value of the property, which happens to be a function.
//printProperty(obj1, "surname");