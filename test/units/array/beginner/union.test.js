const { union } = require("../../../../src/array/beginner/union");

describe("合集", () => {
  test("有相同元素的两个数组的合集", () => {
    const source1 = [1, 2, 3, 4];
    const source2 = [2, 3, 4, 5];
    const result = union(source1, source2);
    const expected = [1, 2, 3, 4, 5];
    const expectedLength = expected.length;
    expect(result).toHaveLength(expectedLength);
    expect(result).toEqual(expect.arrayContaining(expected));
  });
  test("无相同元素的两个数组的合集", () => {
    const source1 = [1, 2, 3];
    const source2 = [false, undefined, null, NaN];
    const result = union(source1, source2);
    const expected = [1, 2, 3, false, undefined, null, NaN];
    const expectedLength = expected.length;
    expect(result).toHaveLength(expectedLength);
    expect(result).toEqual(expect.arrayContaining(expected));
  });
});
