/// `>tags:` [[Important]] [[Test]] #Callback #Async #Async_Test
/// Note: When using done, the beforeEach function will wait until the done function is actually called before continuing with the test run. This done function is only called once the 1 second delay is up, and the executeSlowFunction invokes the callback that we provided.
class MockAsync {
  executeSlowFunction(complete: (value: string) => void) {
    setTimeout(() => {
      complete(`completed`);
    }, 1000);
  }
}
describe("failing async tests", () => {
  it("should wait for callback to complete", () => {
    let mockAsync = new MockAsync();
    console.log(`1. calling executeSlowFunction`);
    let returnedValue!: string;
    mockAsync.executeSlowFunction((value: string) => {
      console.log(`2. complete called`);
      returnedValue = value;
      //done(); //uncomment will make a success example. attention next example
    });
    console.log(`3. checking return value`);
    expect(returnedValue).toBe("completed");
  });
});
