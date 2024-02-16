/// `>tags:` #Important #Call #Apply #Bind #Function
class MyBoundClass {
    name: string = "defaultNameValue";

    printName(index: number, description: string) {
        console.log(`this.name : ${this.name}`);
        console.log(`index: ${index}`);
        console.log(`description : ${description}`);
    }
}
let testBoundClass = new MyBoundClass();
testBoundClass.printName.call(
    { name: `overridden name property` }, 1, `whoa !`
);
console.log(`\n`);
testBoundClass.printName.apply(
    { name: `apply override` },
    [1, 'whoa !!']
);
console.log(`\n`);
let boundThis = {
    name: `boundThis`
};

let boundPrintNameFunction = testBoundClass.printName.bind(
    boundThis, 1, `testDescription`
);

boundPrintNameFunction();