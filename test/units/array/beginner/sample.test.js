const { sample } = require("../../../../src/array/beginner/sample");

describe("随机取值", () => {
  test("随机取值", () => {
    const mockMath = Object.create(Math);
    mockMath.random = () => 0.5;
    global.Math = mockMath;
    const array = [1, 2, 3, 4];
    const result = sample(array);
    expect(result).toEqual(3);
  });
});
