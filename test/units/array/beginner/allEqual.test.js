const { allEqual } = require("../../../../src/array/beginner/allEqual");

describe("判断数组内的元素是否全部相等", () => {
  test("相等", () => {
    const array = [1, 1, 1, 1, 1];
    const result = allEqual(array);
    expect(result).toBeTruthy();
  });
  test("NaN 相等", () => {
    const array = [NaN, NaN];
    const result = allEqual(array);
    expect(result).toBeTruthy();
  });
  test("不等", () => {
    const array = [1, 2, 3, 4];
    const result = allEqual(array);
    expect(result).toBeFalsy();
  });
  test("null,undefined不等", () => {
    const array = [null, null, undefined];
    const result = allEqual(array);
    expect(result).toBeFalsy();
  });
});
