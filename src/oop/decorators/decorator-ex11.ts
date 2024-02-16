// Define a StaticClassWithPropertyDec class and apply the propertyDec decorator to its staticProperty property
class StaticClassWithPropertyDec {
    @propertyDec
    static staticProperty: string;
  }
  
  // Define a ClassWithPropertyDec class and apply the propertyDec decorator to its nameProperty property
  class ClassWithPropertyDec {
    @propertyDec
    nameProperty: string | undefined;
  }


   function propertyDec(target: any, propertyName: string) {
    if (typeof (target) === 'function') {
      console.log(`class name : ${target.name}`);
    } else {
      console.log(`class name2 : ${target.constructor.name}`);
    }
    console.log(`propertyName : ${propertyName}`);
  }