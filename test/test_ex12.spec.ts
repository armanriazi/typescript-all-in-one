/// `>tags:` [[Important]] [[Test]] #Mock #Spy
/// we use the toHaveBeenCalledWith matcher on line 6 instead of the toHaveBeenCalled matcher because we used it in our previous test. This gives us the ability to check that the function passed in as an argument was called with the correct arguments.
class MyCallbackClass {
    executeCallback(value: string, callbackFn: (value: string) => null) {
      console.log(`executeCallback invoking callbackFn`);
      callbackFn(value);
    }
  }
  
it("should mock callback function", () => {
    let mock = jest.fn();
  
    let myCallbackClass = new MyCallbackClass();
    myCallbackClass.executeCallback("test", mock);
    expect(mock).toHaveBeenCalled();

    /*myCallbackClass.executeCallback("argument_1", mock);
    expect(mock).toHaveBeenCalledWith("argument_1");*/
    //
  });
  