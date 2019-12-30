/**
 * @author silence_zhpf
 * @description 过滤出数组中的非唯一值，并返回对应的数组（数组中非唯一值只出现一次）
 * @param array {Array}
 * @return {Array}
 */
function filterNonUnique(array) {
  const nonUnique = array.filter(
    index => array.indexOf(index) !== array.lastIndexOf(index)
  );
  return Array.from(new Set(nonUnique));
}
exports.filterNonUnique = filterNonUnique;
