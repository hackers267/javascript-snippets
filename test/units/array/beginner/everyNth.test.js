const { everyNth } = require("../../../../src/array/beginner/everyNth");

describe("每间隔n个元素，从数组中选择一个元素组成数组", () => {
  test("间隔2个元素", () => {
    const array = [1, 2, 3, 4, 5, 6];
    const n = 2;
    const expected = [2, 4, 6];
    const expectedLength = expected.length;
    const result = everyNth(array, n);
    expect(result).toHaveLength(expectedLength);
    expect(result).toEqual(expect.arrayContaining(expected));
  });
});
