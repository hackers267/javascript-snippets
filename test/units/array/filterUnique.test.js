const { filterUnique } = require("../../../src/array/filterUnique");

describe("去除数组中的唯一值", () => {
  test("唯一值", () => {
    const array = [1, 2, 2, 3, 4, 4, 5];
    const result = filterUnique(array);
    const expected = [1, 3, 5];
    const expectedLength = expected.length;
    expect(result).toHaveLength(expectedLength);
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  test("数组中含有NaN", () => {
    const array = [1, 2, 2, 3, NaN, NaN, 4];
    const result = filterUnique(array);
    const expected = [1, 3, 4];
    const expectedLength = expected.length;
    expect(result).toHaveLength(expectedLength);
    expect(result).toEqual(expect.arrayContaining(expected));
  });
});
