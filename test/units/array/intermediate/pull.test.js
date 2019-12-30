const { pull } = require("@/array/intermediate/pull");

describe("从原数组剔除元素", () => {
  test("多个参数", () => {
    const array = [1, 1, 2, 3, 5, 5];
    pull(array, 1, 3, 5);
    const expected = [2];
    const expectedLength = expected.length;
    expect(array).toHaveLength(expectedLength);
    expect(array).toEqual(expect.arrayContaining(expected));
  });
  test("要剔除的包含在一个数组中", () => {
    const array = [164, 715, 817, 529, 657, 421, 387];
    const cullArray = [715, 817, 529];
    pull(array, cullArray);
    const expected = [164, 657, 421, 387];
    const expectedLength = expected.length;
    expect(array).toHaveLength(expectedLength);
    expect(array).toEqual(expect.arrayContaining(expected));
  });
});
