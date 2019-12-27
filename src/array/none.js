/**
 * @author silence_zhpf
 * @description 判断数组中的元素是否全部不符合断言，如果全部不符合->true，存在符合的->false
 * @param array {Array} 原数组
 * @param predicate {function(*): boolean} 断言函数
 * @return {boolean}
 */
function none(array, predicate = Boolean) {
  return !array.some(value => predicate(value));
}
exports.none = none;
