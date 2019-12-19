const {last} = require('../../../src/array/last');

describe("The last of Array", () => {
  it('The object is a Array', function () {
    const array = [1, 2, 3];
    const result = last(array);
    const expected = 3;
    expect(result).toEqual(expected);
  });
  it('The object is a empty Array', function () {
    const array = [];
    const result = last(array);
    expect(result).toBeUndefined();
  });
  it('The object is null', function () {
    const result = last(null);
    expect(result).toBeUndefined();
  });
  it('The object is undefined', function () {
    const result = last(undefined);
    expect(result).toBeUndefined();
  });
});
