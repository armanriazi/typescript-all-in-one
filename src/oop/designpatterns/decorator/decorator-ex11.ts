// Define a StaticClassWithPropertyDec class and apply the propertyDec decorator to its staticProperty property
// We can see the results of our updated property decorator being applied to a normal class and then being applied to a class with a static property. 
/**
 Can a class decorator be used to modify the constructor of a class in TypeScript?
 Yes, by defining a new constructor function and assigning it to the constructor property of the class.
 Ref.to example 13
 */
class StaticClassWithPropertyDec {
    @propertyDec
    static staticProperty: string; // target == function
  }
  
  // Define a ClassWithPropertyDec class and apply the propertyDec decorator to its nameProperty property
  class ClassWithPropertyDec {
    @propertyDec
    nameProperty: string | undefined; //target == constructor
  }


   function propertyDec(target: any, propertyName: string) {
    if (typeof (target) === 'function') {
      console.log(`class name : ${target.name}`);
    } else {
      console.log(`class name2 : ${target.constructor.name}`);
    }
    console.log(`propertyName : ${propertyName}`);
  }