/// toThrowError matcher
function throwsError() {
  throw new Error("this is an error");
}

it("should throw an error", () => {
  expect(() => {
    throwsError();
  }).toThrowError(new Error("this is an error"));
});
