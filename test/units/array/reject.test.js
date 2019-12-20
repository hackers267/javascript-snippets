const { reject } = require("../../../src/array/reject");

describe("The reject of Array", () => {
  test("The reject", () => {
    const array = [1, 2, 3, 4, 5];
    const predicate = n => n % 2 === 0;
    const expected = [2, 4];
    const result = reject(predicate, array);
    expect(result.length).toEqual(2);
    expect(result).toEqual(expect.arrayContaining(expected));
  });
});
