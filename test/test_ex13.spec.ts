class MySpiedClass {
  testFunction() {
    console.log(`testFunction() called`);
    this.testSpiedFunction();
  }
  testSpiedFunction() {
    console.log(`testSpiedFunction called`);
  }
}

it("should call testSpiedFunction", () => {
  let mySpiedClass = new MySpiedClass();
  const testFunctionSpy = jest.spyOn(mySpiedClass, "testSpiedFunction");
  mySpiedClass.testFunction();
  expect(testFunctionSpy).toHaveBeenCalled();
});
