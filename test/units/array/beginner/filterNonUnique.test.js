const { filterNonUnique } = require("../../../../src/array/beginner/fitlerNonUnique");

describe("过滤出数组中的非唯一值", () => {
  test("过滤", () => {
    const array = [1, 2, 2, 3, 4, 4, 5];
    const result = filterNonUnique(array);
    const expected = [2, 4];
    const expectedLength = expected.length;
    expect(result).toHaveLength(expectedLength);
    expect(result).toEqual(expect.arrayContaining(expected));
  });
});
