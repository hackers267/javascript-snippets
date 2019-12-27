/**
 * @author silence_zhpf
 * @description 判断数组中是否存在任一元素符合断言，存在->true，不存在->false
 * @param array {Array}
 * @param predicate {function(*):boolean}
 * @return {boolean}
 */
function any(array, predicate = Boolean) {
  return array.some(value => predicate(value));
}
exports.any = any;
