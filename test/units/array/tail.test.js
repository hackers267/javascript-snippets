const { tail } = require("../../../src/array/tail");

describe("取值", () => {
  test("数组长度大于1", () => {
    const array = [1, 2, 3, 4];
    const result = tail(array);
    const expected = [2, 3, 4];
    const expectedLength = expected.length;
    const cull = 1;
    expect(result).toHaveLength(expectedLength);
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result).not.toContain(cull);
  });
  test("数组长度等于1", () => {
    const array = [1];
    const result = tail(array);
    const expected = [1];
    const expectedLength = expected.length;
    expect(result).toHaveLength(expectedLength);
    expect(result).toEqual(expect.arrayContaining(expected));
  });
});
