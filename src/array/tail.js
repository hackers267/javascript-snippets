/**
 * @author silence_zhpf
 * @description 将原数组中第一个之后的数组组成一个新的数组返回，如果只有一个数组则直接返回原数组
 * @param array {Array} 原数组
 * @return {Array}
 */
function tail(array) {
  return array.length > 1 ? array.slice(1) : array.slice();
}
exports.tail = tail;
