import { countBy } from "@src/array/intermediate/countBy";

describe("根据条件挑选字段个数", () => {
  test("条件为函数", () => {
    const array = [1, 2, 3, 4, 5];
    const predicate = (n: number): boolean => !!(n % 2);
    const result = countBy(array, predicate);
    const one = result.get(1);
    const zero = result.get(0);
    expect(one).toEqual(3);
    expect(zero).toEqual(2);
  });
});
