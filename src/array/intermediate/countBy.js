/**
 * @author silence_zhpf
 * @description 返回由属性或者函数统计的数量，返回值为 Map
 * @param array {Array} 需要统计的数组
 * @param arg {function|string} 函数或者属性字符串
 * @return {Map}
 */
function countBy(array, arg) {
  const isFn = typeof arg === "function";
  const getProperty = val => val[arg];
  return array
    .map(val => (isFn ? arg(val) : getProperty(val)))
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
exports.countBy = countBy;
