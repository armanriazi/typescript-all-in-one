class MockAsync {
  executeSlowFunction(complete: (value: string) => void) {
    setTimeout(() => {
      complete(`completed`);
    }, 1000);
  }
}
describe("async test with done ", () => {
  let returnedValue!: string;
  beforeEach((done: jest.DoneCallback) => {
    let mockAsync = new MockAsync();
    console.log(`1. calling executeSlowFunction`);
    mockAsync.executeSlowFunction((value: string) => {
      console.log(`2. executeSlowFunction returned`);
      returnedValue = value;
      done();
    });
  });
  it("should return value after 1 second", () => {
    console.log(`3. checking returnedValue`);
    expect(returnedValue).toEqual("completed");
  });
});
