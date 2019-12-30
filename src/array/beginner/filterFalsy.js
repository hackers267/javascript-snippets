/**
 * @author silence_zhpf
 * @description 过滤数组中的所有假值，剩下由真值组成的数组
 * @param array {Array} 普通数组
 * @return {Array} 由真值组成的数组
 */
function filterFalsy(array) {
  return array.filter(Boolean);
}

exports.filterFalsy = filterFalsy;
