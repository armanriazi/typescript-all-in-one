class AsyncWithPromise {
  delayedPromise(): Promise<string> {
    return new Promise<string>(
      (resolve: (str: string) => void, reject: (str: string) => void) => {
        setTimeout(() => {
          console.log(`2. returning success`);
          resolve("success");
        }, 1000);
      }
    );
  }
}
describe("async test", () => {
  it("should wait 1 second for promise to resolve", async () => {
    let asyncWithPromise = new AsyncWithPromise();
    console.log(`1. calling delayedPromise`);
    let returnValue = await asyncWithPromise.delayedPromise();
    console.log(`3. after await`);
    expect(returnValue).toEqual("success");
  });
});
