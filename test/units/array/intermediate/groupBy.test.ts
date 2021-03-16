import { groupBy } from "@src/array/intermediate/groupBy";

describe("数组分组", () => {
  test("根据函数分组", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 9, 10];
    const fn = (n: number) => n % 3;
    const result = groupBy(array, fn);
    const expected = { 0: [3, 6, 9], 1: [1, 4, 7, 10], 2: [2, 5] };
    expect(result).toMatchObject(expected);
  });
});
