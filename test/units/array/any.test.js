const { any } = require("../../../src/array/any");

describe("存在", () => {
  test("有断言函数：为真", () => {
    const array = [1, 2, 3, 4, 5];
    const predicate = n => n % 2 === 1;
    const result = any(array, predicate);
    expect(result).toBeTruthy();
  });
  test("有断言函数：为假", () => {
    const array = [1, 3, 5, 7];
    const predicate = n => n % 2 === 0;
    const result = any(array, predicate);
    expect(result).toBeFalsy();
  });
  test("无断言函数：为真", () => {
    const array = [1, 3, 5];
    const result = any(array);
    expect(result).toBeTruthy();
  });
  test("无断言函数：为假", () => {
    const array = ["", false];
    const result = any(array);
    expect(result).toBeFalsy();
  });
});
