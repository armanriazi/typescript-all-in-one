/// toEqual matcher
it("should match with toEqual", () => {
  let objA = { id: 1 };
  let objB = { id: 1 };
  expect(objA).toEqual(objB);
});

it("should match with toEqual", () => {
  let objA = { id: 1 };
  let objB = { id: 1 };
  expect(objA).toStrictEqual(objB);
});
