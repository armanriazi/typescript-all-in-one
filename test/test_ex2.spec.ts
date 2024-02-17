/// we often want to run only a specific test or a specific group of tests. This act is known as forcing tests because we are forcing the entire test suite to only run specific tests.
/// We also use the fit function on line 5 instead of just the it function to force the test named "second test" to be run.
describe("a group of tests", () => {
    test.only("first test", () => {
      expect("string value").toEqual("string value");
    });
    fit("second test", () => {
      expect("abc").not.toEqual("def");
    });
  });
  