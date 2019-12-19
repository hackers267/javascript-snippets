const {includeAny} = require('../../../src/array/includeAny');
describe("The includeAny of Array", () => {
  test("should be true", () => {
    const parent = [2, 98, 24, 4];
    const child = [2, 52, 51];
    const result = includeAny(parent, child);
    expect(result).toBeTruthy();
  });
  test("should be false", () => {
    const parent = [2, 5, 7, 9];
    const child = [1, 3, 6, 8];
    const result = includeAny(parent, child);
    expect(result).toBeFalsy()
  })
});
