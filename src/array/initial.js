/**
 * @author silence_zhpf
 * @description 取数组中最后一个元素之外的元素组成一个新的数组，保持原有数组元素不变
 * @param array {Array} 原数组
 * @return {Array} 新数组
 */
function initial(array) {
  return array.slice(0, -1);
}
exports.initial = initial;
