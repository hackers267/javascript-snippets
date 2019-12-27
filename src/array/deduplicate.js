/**
 * @author silence_zhpf
 * @description 数组去重
 * @param array {Array} 需要去重的数组
 * @return {Array} 去重后的数组
 */
function deduplicate(array) {
  return Array.from(new Set(array));
}
exports.deduplicate = deduplicate;
