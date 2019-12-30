const { includeAll } = require("../../../../src/array/beginner/includeAll");

describe("The includeAll of array", () => {
  test("should be true", () => {
    const parent = [2, 45, 12, 31];
    const child = [2, 12];
    const result = includeAll(parent, child);
    expect(result).toBeTruthy();
  });
  test("should be false", () => {
    const parent = [2, 45, 12, 31];
    const child = [2, 13];
    const result = includeAll(parent, child);
    expect(result).toBeFalsy();
  });
});
