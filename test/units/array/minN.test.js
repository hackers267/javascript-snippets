const { minN } = require("../../../src/array/minN");

describe("The minN of Array", () => {
  test("The default", () => {
    const array = [1, 4, 21, 14];
    const result = minN(array);
    const expected = [1];
    expect(result.length).toEqual(1);
    expect(result).toEqual(expect.arrayContaining(expected));
  });
  test("The min of Array 3", () => {
    const array = [1, 4, 21, 14];
    const number = 3;
    const result = minN(array, number);
    const expected = [1, 4, 14];
    expect(result.length).toEqual(number);
    expect(result).toEqual(expect.arrayContaining(expected));
  });
});
