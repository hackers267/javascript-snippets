/**
 * @author silence_zhpf
 * @description 将原数组中第一个之后的数组组成一个新的数组返回，如果只有一个数组则直接返回原数组
 * @param array {Array} 原数组
 * @param n {number} [n=1] 取值数量，默认为1
 * @return {Array}
 */
function take(array, n = 1) {
  return array.slice(0, n);
}
exports.take = take;
