type booleanFn = (val: any) => boolean;
/**
 * @author silence_zhpf
 * @description 返回由属性或者函数统计的数量，返回值为 Map
 * @param array {Array} 需要统计的数组
 * @param arg {function|string} 函数或者属性字符串
 * @return {Map}
 */
function countBy<T>(array: any[], arg: string): Map<any, any>;
function countBy<T>(
  array: any[],
  arg: booleanFn
): { [props: string]: Array<T> };
function countBy<T>(array: any[], arg: booleanFn | string): Map<any, any> {
  return array
    .map(value => {
      if (typeof arg === "function") {
        return arg(value);
      }
      if (value.hasOwnProperty(arg)) {
        return value[arg];
      }
      throw new ReferenceError(
        `Property ${arg} doesn't exist in object ${value}`
      );
    })
    .reduce((acc, cur) => {
      if (acc.has(cur)) {
        const count = acc.get(cur);
        acc.set(cur, count + 1);
      } else {
        const count = 1;
        acc.set(cur, count);
      }
      return acc;
    }, new Map());
}

export { countBy };
