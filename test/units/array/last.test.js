const { last } = require("../../../src/array/last");

describe("The last of Array", () => {
  it("The object is a Array", () => {
    const array = [1, 2, 3];
    const result = last(array);
    const expected = 3;
    expect(result).toEqual(expected);
  });
  it("The object is a empty Array", () => {
    const array = [];
    const result = last(array);
    expect(result).toBeUndefined();
  });
  it("The object is null", () => {
    const result = last(null);
    expect(result).toBeUndefined();
  });
  it("The object is undefined", () => {
    const result = last(undefined);
    expect(result).toBeUndefined();
  });
});
