/// `>tags:` [[Important]] [[Lib]] #Generic #New #Ins
/// ```bash
/// pnpm tsc src/oop/generic/generic-ex9.ts --outfile  ./dist/generic-ex9.js
/// ```
///
class ClassA {
    constructor(){
        console.log(new.target);
    }
 }
class ClassB { 
    constructor(){
        console.log(new.target);
    }
}

/*function createClassInstance<T>
 (arg1: T): T {
 return new arg1(); // error : see below
}*/
function createClassInstance<T>
 (arg1: { new(): T }): T {
 return new arg1();
}
let classAInstance = createClassInstance(ClassA);
let classBInstance = createClassInstance(ClassB);
console.log(`${classAInstance}, ${classBInstance}`);