const { groupBy } = require("@/array/intermediate/groupBy");

describe("数组分组", () => {
  test("根据函数分组", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 9, 10];
    const fn = n => n % 3;
    const result = groupBy(array, fn);
    const expected = { 0: [3, 6, 9], 1: [1, 4, 7, 10], 2: [2, 5] };
    expect(result).toMatchObject(expected);
  });
  test("根据属性分组", () => {
    const array = ["one", "two", "three", "four", "five"];
    const property = "length";
    const result = groupBy(array, property);
    const expected = {
      3: ["one", "two"],
      5: ["three"],
      4: ["four", "five"]
    };
    expect(result).toEqual(expect.objectContaining(expected));
  });
});
