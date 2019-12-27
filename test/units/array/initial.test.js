const { initial } = require("../../../src/array/initial");

describe("取值除最后一个", () => {
  test("一般情况", () => {
    const array = [1, 2, 3];
    const result = initial(array);
    const expected = [1, 2];
    const expectedLength = expected.length;
    const cull = 3;
    expect(result).toHaveLength(expectedLength);
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result).not.toContain(cull);
  });
  test("一个元素的数组", () => {
    const array = [2];
    const result = initial(array);
    expect(result).toHaveLength(0);
  });
});
