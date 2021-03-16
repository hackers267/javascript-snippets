import { shuffle } from "@/array/intermediate/shuffle";

describe("将数组内的元素随机化", () => {
  test("随机化", () => {
    const mockMath = Object.create(Math);
    mockMath.random = () => 0;
    global.Math = mockMath;
    const array = [556, 283, 896, 812, 347, 61, 217];
    const result = shuffle(array);
    const expected = 283;
    expect(result[0]).toEqual(expected);
  });
  test("随机化2", () => {
    const mockMath = Object.create(Math);
    mockMath.random = () => 0.5;
    global.Math = mockMath;
    const array = [556, 283, 896, 812, 347, 61, 217];
    const result = shuffle(array);
    const expected = 347;
    expect(result[0]).toEqual(expected);
  });
});
