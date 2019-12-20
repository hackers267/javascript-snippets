const { remove } = require("../../../src/array/remove");

describe("The remove of Array", () => {
  let arr;
  let predicate;
  beforeEach(() => {
    arr = [0, 1, 2, 3, 4, 5];
    predicate = n => n > 1;
  });
  test("should has 2 items", () => {
    const result = remove(arr, predicate);
    const expected = 2;
    expect(result).toHaveLength(expected);
  });
  test("should includes 0 and 1", () => {
    const result = remove(arr, predicate);
    const expected = [0, 1];
    expect(result).toEqual(expect.arrayContaining(expected));
  });
});
