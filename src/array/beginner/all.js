/**
 * @author silence_zhpf
 * @description 根据断言函数判断数组中是否每个值都符合断言，都符合->true，存在不符合->false
 * @param array {Array} 原函数
 * @param fn {function(*): boolean} 断言函数
 * @return {boolean}
 */
function all(array, fn = Boolean) {
  return array.every(value => fn(value));
}
exports.all = all;
