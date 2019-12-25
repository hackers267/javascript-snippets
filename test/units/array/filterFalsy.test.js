const { filterFalsy } = require("../../../src/array/filterFalsy");

describe("过滤掉数组中的假值，只剩真值", () => {
  test("过滤假值", () => {
    const array = ["", true, {}, false, "sample", 1, 0];
    const expected = [true, {}, 1, "sample"];
    const expectedLength = expected.length;
    const result = filterFalsy(array);
    expect(result).toHaveLength(expectedLength);
    expect(result).toEqual(expect.arrayContaining(expected));
  });
});
