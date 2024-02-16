// Define a function called propertyDec which takes an object and a string property name as input and logs them to the console
function propertyDec(target: any, propertyName: string) {
    console.log(`target : ${target}`);
    console.log(`target.constructor : ${target.constructor}`);
    console.log(`propertyName : ${propertyName}`);
  }
  // Define a ClassWithPropertyDec class and apply the propertyDec decorator to its nameProperty property
class ClassWithPropertyDec {
    @propertyDec
    nameProperty: string | undefined;
  }
  