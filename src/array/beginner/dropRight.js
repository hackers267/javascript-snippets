/**
 * @author silence_zhpf
 * @description 从array的尾部开始剔除n个值，返回剔除后剩余元素组成的数组
 * @param array {Array} 原数组
 * @param n {number} [n=1] 剔除的元素个数，默认为1
 * @return {Array} 剩余元素组成的数组
 */
function dropRight(array, n = 1) {
  return array.slice(0, -n);
}
exports.dropRight = dropRight;
