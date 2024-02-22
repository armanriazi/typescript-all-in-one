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
      });
      console.log(`3. checking return value`);
      expect(returnedValue).toBe("completed");
    });
  });
  