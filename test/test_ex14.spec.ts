/// `>tags:` [[Important]] [[Test]] #Mock #Spy
///  we have used the mockImplementation function on our spy to provide an implementation of the function that will be called during the test. This mock implementation will log a message to the console showing that it will be called instead of the class method.
/// When we run the test, we can see that the mock implementation of the testFunction method was invoked instead of the actual implementation of the testFunction method.
class MySpiedClass {
  testFunction() {
    console.log(`testFunction() called`);
    this.testSpiedFunction();
  }
  testSpiedFunction() {
    console.log(`testSpiedFunction called`);
  }
}

it("should call mock of testFunction", () => {
  let mySpiedClass = new MySpiedClass();
  const testFunctionSpy = jest.spyOn(
  mySpiedClass, 'testFunction')
  .mockImplementation(() => {
  console.log(`mockImplementation called`);
  });
  mySpiedClass.testFunction();
  expect(testFunctionSpy).toHaveBeenCalled();
 });