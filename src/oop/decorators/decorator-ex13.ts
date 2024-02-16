// Define an auditLogDec decorator function that overrides a method on a class to log information
function auditLogDec(target: any, methodName: string, descriptor?: PropertyDescriptor) {
    // Save the original function for later use
    let originalFunction = target[methodName];
    
    // Define a new function to replace the original function
    let auditFunction = function (this: any) {
      console.log(`1. auditLogDec : overide of ${methodName} called`);
      // Log all arguments passed to the function
      for (let i = 0; i < arguments.length; i++) {
        console.log(`2. arg : ${i} = ${arguments[i]}`);
      }
      // Call the original function with the same arguments and 'this' context
      originalFunction.apply(this, arguments);
    }
    // Replace the original function with the new audit function
    target[methodName] = auditFunction;
    return target;
  }
  // Class with the audit logging decorator applied to its method
class ClassWithAuditDec {
    @auditLogDec
    print(arg1: string, arg2: string) {
      console.log(`3. ClassWithMethodDec.print(${arg1}, ${arg2}) called.`);
    }
  }
  
  // Creating an instance of the class and calling the decorated method
  let auditClass = new ClassWithAuditDec();
  auditClass.print("test1", "test2");