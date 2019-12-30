/**
 * @author silence_zhpf
 * @description 取两个数组的合集
 * @param source1 {Array} 原数组1
 * @param source2 {Array} 原数组2
 * @return {Array} 两个数组的合集
 */
function union(source1, source2) {
  return Array.from(new Set([...source1, ...source2]));
}
exports.union = union;
