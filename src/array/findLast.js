/**
 * @author silence_zhpf
 * @description 找出数组中符合断言的最后一个元素
 * @param array {Array} 原数组
 * @param predicate {function(*): boolean} 断言函数
 * @return {any}
 */
function findLast(array, predicate) {
  return array.filter(value => predicate(value)).pop();
}

exports.findLast = findLast;
