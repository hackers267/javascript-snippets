const { differenceBy } = require("@/array/intermediate/differenceBy");

describe("取差集", () => {
  test("根据函数取差集", () => {
    const array = [
      { x: 1, y: 2 },
      { x: 2, y: 1 }
    ];
    const array2 = [{ x: 1, y: 3 }];
    const fn = obj => obj.x;
    const result = differenceBy(array, array2, fn);
    const expected = [{ x: 2, y: 1 }];
    expect(result).toEqual(expect.arrayContaining(expected));
  });
  test("根据函数取差集2", () => {
    const array = [1.2, 3.2, 4.2];
    const array2 = [2.2, 3.4, 5.1];
    const result = differenceBy(array, array2, Math.floor);
    const expected = [1.2, 4.2];
    expect(result).toHaveLength(expected.length);
    expect(result).toEqual(expect.arrayContaining(expected));
  });
});
