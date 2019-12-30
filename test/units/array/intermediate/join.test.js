const { join } = require("@/array/intermediate/join");

describe("数组的join方法", () => {
  test("前缀、后缀和分隔符都使用默认值", () => {
    const array = [1, 2, 3, 4];
    const result = join(array);
    const expected = "1,2,3,4";
    expect(result).toBe(expected);
  });
  test("指定分隔符", () => {
    const array = [1, 2, 3, 4];
    const separator = "|";
    const config = { separator };
    const result = join(array, config);
    const expected = "1|2|3|4";
    expect(result).toBe(expected);
  });
  test("指定前缀", () => {
    const array = [1, 2, 3, 4];
    const prefix = "[";
    const config = { prefix };
    const result = join(array, config);
    const expected = "[1,2,3,4";
    expect(result).toBe(expected);
  });
  test("指定后缀", () => {
    const array = [1, 2, 3, 4];
    const postfix = "]";
    const config = { postfix };
    const result = join(array, config);
    const expected = "1,2,3,4]";
    expect(result).toBe(expected);
  });
  test("指定前后缀", () => {
    const array = [1, 2, 3, 4];
    const prefix = "[";
    const postfix = "]";
    const config = { postfix, prefix };
    const result = join(array, config);
    const expected = "[1,2,3,4]";
    expect(result).toBe(expected);
  });
  test("指定前缀和分隔符", () => {
    const array = [1, 2, 3, 4];
    const prefix = "[";
    const separator = "|";
    const config = { prefix, separator };
    const result = join(array, config);
    const expected = "[1|2|3|4";
    expect(result).toBe(expected);
  });
  test("指定分隔符和后缀", () => {
    const array = [1, 2, 3, 4];
    const separator = "|";
    const postfix = "]";
    const config = { separator, postfix };
    const result = join(array, config);
    const expected = "1|2|3|4]";
    expect(result).toBe(expected);
  });
  test("指定前后缀和分隔符", () => {
    const array = [853, 219, 103, 60, 112, 169, 298];
    const prefix = "[";
    const separator = "|";
    const postfix = "]";
    const config = { prefix, separator, postfix };
    const result = join(array, config);
    const expected = "[853|219|103|60|112|169|298]";
    expect(result).toBe(expected);
  });
});
