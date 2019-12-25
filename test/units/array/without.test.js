const { without } = require("../../../src/array/without");

describe("挑选数组中不一样的元素", () => {
  test("正常挑选", () => {
    const array = [1, 2, 3, 4];
    const result = without(array, 1, 3);
    const expected = [2, 4];
    expect(result).toHaveLength(2);
    expect(result).toEqual(expect.arrayContaining(expected));
  });
});
