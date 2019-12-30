const { head } = require("../../../../src/array/beginner/head");

describe("The head of Array", () => {
  it("The object is Array", () => {
    const array = [1, 2, 3];
    const expected = 1;
    const result = head(array);
    expect(result).toEqual(expected);
  });
  it("The object is a empty Array", () => {
    const result = head([]);
    expect(result).toBeUndefined();
  });
  it("The object is null", () => {
    const result = head(null);
    expect(result).toBeUndefined();
  });
  it("The object is undefined", () => {
    const result = head(undefined);
    expect(result).toBeUndefined();
  });
});
