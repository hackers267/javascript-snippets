const { similarity } = require("../../../src/array/similarity");

describe("数组交集", () => {
  test("一般交集", () => {
    const firstArray = [1, 2, 3, 4, 5];
    const secondArray = [1, 3, 5];
    const result = similarity(firstArray, secondArray);
    const expected = [1, 3, 5];
    expect(result.length).toEqual(3);
    expect(result).toEqual(expect.arrayContaining(expected));
  });
});
