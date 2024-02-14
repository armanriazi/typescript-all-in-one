// Declaring a class named "StaticFunction"
class StaticFunction {
    // Declaring a static function named "printTwo"
    static printTwo() {
      // Logging the value "2" to the console
      console.log(`2`)
    }
      // Declare a static(public) property "count" with value 0
  static count = 0;
  
    // Define a method "updateCount" to increase the value of "count" by 1
    updateCount() {
        StaticFunction.count++;
    }
  }
  
  // Calling the static function "printTwo" without creating an instance of the class
  StaticFunction.printTwo();
  StaticFunction.count++;
  