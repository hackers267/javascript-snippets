const { offset } = require("../../../src/array/offset");

describe("数组内元素移动", () => {
  test("正向移动", () => {
    const array = [1, 2, 3, 4, 5];
    const offsetNumber = 2;
    const expected = [3, 4, 5, 1, 2];
    const number = Math.floor(Math.random() * array.length);
    const result = offset(array, offsetNumber);
    expect(result.length).toEqual(array.length);
    expect(result[number]).toEqual(expected[number]);
  });
});
