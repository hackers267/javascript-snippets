/**
 * @author silence_zhpf
 * @description 剔除数组中指定个数的元素，返回剩下的元素组成的数组。默认个数为1
 * @param array {Array} 原数组
 * @param n {number} [n=1] 剔除的个数
 * @return {Array} 剩下元素组成的数组
 */
function drop(array, n = 1) {
  return array.slice(n, array.length);
}
exports.drop = drop;
