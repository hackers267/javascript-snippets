const { all } = require("../../../../src/array/beginner/all");

describe("全部", () => {
  test("有断言函数：为真", () => {
    const array = [2, 4, 6, 8];
    const predicate = n => n % 2 === 0;
    const result = all(array, predicate);
    expect(result).toBeTruthy();
  });
  test("没有断言函数：为真", () => {
    const array = [2, 4, 6, 8];
    const result = all(array);
    expect(result).toBeTruthy();
  });
  test("有断言函数：为假", () => {
    const array = [2, 4, 6, 8, 9];
    const predicate = n => n % 2 === 0;
    const result = all(array, predicate);
    expect(result).toBeFalsy();
  });
  test("没有断言函数：为假", () => {
    const array = [0, 1, 2, 3];
    const result = all(array);
    expect(result).toBeFalsy();
  });
});
