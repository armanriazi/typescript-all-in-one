//Note: Decorators are only invoked once when a class is defined.
//Note: Decorators are called in the reverse order of their appearance within our code.
function simpleDecorator(constructor: Function) {
    console.log('simpleDecorator called');
   }
   function secondDecorator(constructor: Function) {
    console.log(`secondDecorator called`);
   }
   
   @simpleDecorator
   @secondDecorator
   class ClassWithSimpleDecorator {
   }
   let instance_1 = new ClassWithSimpleDecorator();
   let instance_2 = new ClassWithSimpleDecorator();
   console.log(`instance_1 : ${JSON.stringify(instance_1)}`);
   console.log(`instance_2 : ${JSON.stringify(instance_2)}`);