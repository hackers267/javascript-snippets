const { findLast } = require("../../../../src/array/beginner/findLast");

describe("寻找最后一个元素", () => {
  test("最后一个元素", () => {
    const array = [1, 2, 3, 4, 5];
    const predicate = n => n % 2 === 1;
    const result = findLast(array, predicate);
    const expected = 5;
    expect(result).toEqual(expected);
  });
  test("找到NaN", () => {
    const array = [1, 2, NaN];
    const predicate = n => Number.isNaN(n);
    const result = findLast(array, predicate);
    expect(result).toBeNaN();
  });
});
