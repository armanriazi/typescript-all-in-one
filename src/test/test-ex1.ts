/// Test Data-Driven 
function testUsing<T>
    (values: T[], func: Function) {
    for (let value of values) {
        func.apply(Object, [value]);
    }
}

// it("should call testFunction with argument using mock", () => {
//     let mock = jest.fn();
    
//     let myCallbackClass = new MyCallbackClass();
//     myCallbackClass.executeCallback("argument_1", mock);
//     expect(mock).toHaveBeenCalledWith("argument_1");
//   });

/// Spy testing
// it("should call testSpiedFunction", () => {
//     let mySpiedClass = new MySpiedClass();
//     const testFunctionSpy = jest.spyOn(mySpiedClass, "testSpiedFunction");
//     mySpiedClass.testFunction();
//     expect(testFunctionSpy).toHaveBeenCalled();
//   });