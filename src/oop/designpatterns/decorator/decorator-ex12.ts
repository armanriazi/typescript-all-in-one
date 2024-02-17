// Define a methodDec function which logs the target, method name, descriptor, and target method
function methodDec(
    target: any,
    methodName: string,
    descriptor?: PropertyDescriptor
  ) {
    console.log(`target: ${target}`);
    console.log(`methodName : ${methodName}`);
    console.log(`descriptor : ${JSON.stringify(descriptor)}`);
    console.log(`target[methodName] : ${target[methodName]}`);
  }
  // Define a ClassWithMethodDec class and apply the methodDec decorator to its print method
class ClassWithMethodDec {
    @methodDec
    print(output: string) {
      console.log(`ClassWithMethodDec.print(${output}) called.`);
    }
  }
  