const { countBy } = require("@/array/intermediate/countBy");

describe("根据条件挑选字段个数", () => {
  test("条件为函数", () => {
    const array = [1, 2, 3, 4, 5];
    const predicate = n => n % 2;
    const result = countBy(array, predicate);
    const one = result.get(1);
    const zero = result.get(0);
    expect(one).toEqual(3);
    expect(zero).toEqual(2);
  });
  test("条件为属性", () => {
    const array = ["one", "two", "three"];
    const property = "length";
    const result = countBy(array, property);
    const len1 = result.get(3);
    const len2 = result.get(5);
    expect(len1).toEqual(2);
    expect(len2).toEqual(1);
  });
});
