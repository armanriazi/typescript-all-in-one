/// Matcher toBe
it("should match with toBe", () => {
  expect(1).toBe(2);
});

it("should match with toBe using assignment", () => {
  let objA = { id: 1 };
  let objB = objA;
  expect(objA).toBe(objB);
});

it("should match with toBe", () => {
  let objA = { id: 1 };
  let objB = { id: 1 };
  expect(objA).toBe(objB);
});
