const { deduplicate } = require("../../../src/array/deduplicate");

describe("数组去重", () => {
  test("不含NaN去重", () => {
    const array = [1, 2, 2, 3, 3, 4];
    const result = deduplicate(array);
    const expected = [1, 2, 3, 4];
    const expectedLength = expected.length;
    expect(result).toHaveLength(expectedLength);
    expect(result).toEqual(expect.arrayContaining(expected));
  });
  test("含有NaN去重", () => {
    const array = [1, 1, NaN, NaN, 3, 4, 4];
    const result = deduplicate(array);
    const expected = [1, NaN, 3, 4];
    const expectedLength = expected.length;
    expect(result).toHaveLength(expectedLength);
    expect(result).toEqual(expect.arrayContaining(expected));
  });
});
