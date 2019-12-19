const {compact} = require('../../../src/array/compact');
describe('The compact of Array', () => {
  test('All false be filter', () => {
    const array = [0, -0, NaN, undefined, null, false, 1, ''];
    const result = compact(array);
    const expected = [1];
    expect(result.length).toEqual(1);
    expect(result).toEqual(expect.arrayContaining(expected));
  })
});
