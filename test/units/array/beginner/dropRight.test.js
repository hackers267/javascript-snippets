const { dropRight } = require("../../../../src/array/beginner/dropRight");

describe("从数组尾部剔除值", () => {
  test("默认剔除一个值", () => {
    const array = [1, 2, 3, 4];
    const result = dropRight(array);
    const expected = [1, 2, 3];
    const expectedLength = expected.length;
    const cull = 4;
    expect(result).toHaveLength(expectedLength);
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result).not.toContainEqual(cull);
  });
  test("剔除2个值", () => {
    const array = [1, 2, 3, 4];
    const n = 2;
    const result = dropRight(array, n);
    const expected = [1, 2];
    const expectedLength = expected.length;
    const cullArray = [3, 4];
    expect(result).toHaveLength(expectedLength);
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result).not.toContain(cullArray[0]);
    expect(result).not.toContain(cullArray[1]);
  });
  test("剔除所有元素,n值大于数组长度", () => {
    const array = [1, 2, 3, 4];
    const n = 6;
    const result = dropRight(array, n);
    expect(result).toHaveLength(0);
  });
});
