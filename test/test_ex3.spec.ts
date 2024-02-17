/// Force a group of tests
fdescribe("a group of tests", () => {
    test("first test", () => {
      expect("string value").toEqual("string value");
    });
    it("second test", () => {
      expect("abc").not.toEqual("def");
    });
  });
  