const { difference } = require("../../../src/array/difference");

describe("数组差集", () => {
  test("一般差集", () => {
    const firstArray = [1, 2, 4, 5];
    const secondArray = [2, 4];
    const expected = [1, 5];
    const result = difference(firstArray, secondArray);
    expect(result.length).toEqual(2);
    expect(result).toEqual(expect.arrayContaining(expected));
  });
  test("差集为空", () => {
    const firstArray = [2, 4];
    const secondArray = [1, 2, 4, 5];
    const expected = [];
    const result = difference(firstArray, secondArray);
    expect(result.length).toEqual(0);
    expect(result).toEqual(expect.arrayContaining(expected));
  });
});
