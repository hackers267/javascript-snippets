const { take } = require("../../../../src/array/beginner/take");

describe("取值", () => {
  test("默认取值", () => {
    const array = [1, 2, 3, 4];
    const result = take(array);
    const expected = [1];
    const expectedLength = expected.length;
    expect(result).toHaveLength(expectedLength);
    expect(result).toEqual(expect.arrayContaining(expected));
  });
  test("取值大于1小于长度", () => {
    const array = [1, 2, 3, 4];
    const n = 3;
    const result = take(array, n);
    const expected = [1, 2, 3];
    const expectedLength = expected.length;
    const cull = 4;
    expect(result).toHaveLength(expectedLength);
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result).not.toContain(cull);
  });
  test("取值大于长度", () => {
    const array = [1, 2, 3, 4];
    const n = 5;
    const result = take(array, n);
    const expected = [1, 2, 3, 4];
    const expectedLength = expected.length;
    expect(result).toHaveLength(expectedLength);
    expect(result).toEqual(expect.arrayContaining(expected));
  });
});
