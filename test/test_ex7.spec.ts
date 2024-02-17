///toContain, toContainEqual matcher
it("should contain a value", () => {
  expect("abcde").toContain("cde");
});

it("should contain an array item", () => {
  let objArray = [
      { id: 1 },
      { id: 2 }
  ];
  expect(objArray).toContainEqual({ id: 2 });
});

it("should not contain a value", () => {
  expect("abcde").not.toContain("123");
});
