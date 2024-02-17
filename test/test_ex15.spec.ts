/// `>tags:` [[Important]] [[Test]] #Mock #Spy
///  When we wish to mock out the return value of a function, we can easily just return a value from a mock implementation.
class MyMockedClass {
  functionToBeMocked(): number {
    return 5;
  }
}

it("should return value from mocked", () => {
  let myMockedClass = new MyMockedClass();
  jest
    .spyOn(myMockedClass, "functionToBeMocked")
    .mockImplementation((): number => {
      return 10;
    });
  expect(myMockedClass.functionToBeMocked()).toEqual(10);
});
