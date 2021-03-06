/**
 * @author silence_zhpf
 * @description 根据属性或者是函数输出对数组进行分组
 * @param array {Array} 需要分组的函数
 * @param arg {function|string} 分组依据：函数或者属性
 * @return {Object} 分组结果
 */
function groupBy<T>(array: Array<T>, fn: Function) {
  return array
    .map(val => fn(val))
    .reduce((acc, cur, index) => {
      const hasCur = acc[cur];
      if (hasCur) {
        const curValue = acc[cur];
        acc[cur] = [...curValue, array[index]];
      } else {
        acc[cur] = [array[index]];
      }
      return acc;
    }, {});
}

export { groupBy };
