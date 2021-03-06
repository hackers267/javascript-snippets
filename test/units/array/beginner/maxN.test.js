const { maxN } = require("../../../../src/array/beginner/maxN");

describe("The maxN of Array", () => {
  test("The default", () => {
    const array = [3, 8, 19, 4, 5];
    const expected = [19];
    const result = maxN(array);
    expect(result).toHaveLength(1);
    expect(result).toEqual(expect.arrayContaining(expected));
  });
  test("The maxN of Array is 3", () => {
    const array = [3, 8, 19, 4, 5];
    const expected = [19, 8, 5];
    const maxNumber = 3;
    const result = maxN(array, maxNumber);
    expect(result).toHaveLength(maxNumber);
    expect(result).toEqual(expect.arrayContaining(expected));
  });
});
