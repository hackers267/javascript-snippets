const { none } = require("../../../../src/array/beginner/none");

describe("否定元素", () => {
  test("有断言：为真", () => {
    const array = [1, 2, 3, 4];
    const predicate = n => n < 0;
    const result = none(array, predicate);
    expect(result).toBeTruthy();
  });
  test("无断言：为真", () => {
    const array = [false, 0, "", null];
    const result = none(array);
    expect(result).toBeTruthy();
  });
  test("有断言，为假", () => {
    const array = [-1, 0, 1, 2];
    const predicate = n => n < 0;
    const result = none(array, predicate);
    expect(result).toBeFalsy();
  });
  test("无断言，为假", () => {
    const array = [false, 0, "", null, " "];
    const result = none(array);
    expect(result).toBeFalsy();
  });
});
