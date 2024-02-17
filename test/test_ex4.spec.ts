/// Skip a test with using x letter
fdescribe("a group of tests", () => {
  test("first test", () => {
    expect("string value").toEqual("string value");
  });
  xit("second test", () => {
    expect("abc").not.toEqual("def");
  });
});
