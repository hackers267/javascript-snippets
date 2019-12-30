const { nthElement } = require("../../../../src/array/beginner/nthElement");

describe("取第n个元素", () => {
  test("默认值", () => {
    const array = [1, 2, 3, 4];
    const result = nthElement(array);
    expect(result).toEqual(1);
  });
  test("n not equal -1", () => {
    const array = [1, 2, 3, 4];
    const n = 2;
    const result = nthElement(array, n);
    expect(result).toEqual(3);
  });
  test(" n equal -1", () => {
    const array = [1, 2, 3, 4];
    const n = -1;
    const result = nthElement(array, n);
    expect(result).toEqual(4);
  });
});
