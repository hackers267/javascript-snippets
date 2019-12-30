const { drop } = require("../../../../src/array/beginner/drop");

describe("剔除元素", () => {
  test("默认剔除一个元素", () => {
    const array = [1, 2, 3, 4];
    const result = drop(array);
    const expected = [2, 3, 4];
    const expectedLength = expected.length;
    const cull = 1;
    expect(result).toHaveLength(expectedLength);
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result).not.toContain(cull);
  });
  test("剔除2个元素", () => {
    const array = [1, 2, 3, 4];
    const n = 2;
    const result = drop(array, n);
    const expected = [3, 4];
    const expectedLength = expected.length;
    const cullArray = [1, 2];
    expect(result).toHaveLength(expectedLength);
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result).not.toContain(cullArray[0]);
    expect(result).not.toContain(cullArray[1]);
  });
  test("剔除所有数组元素,n大于数组长度", () => {
    const array = [1, 2, 3, 4];
    const n = 6;
    const result = drop(array, n);
    expect(result).toHaveLength(0);
  });
});
