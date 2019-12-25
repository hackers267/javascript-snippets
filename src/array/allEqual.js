/**
 * @author silence_zhpf
 * @description 判断数组中的值时间否相等，相等：true，不等：false
 * @param array {Array}
 * @return {boolean} [true|false]
 */
function allEqual(array) {
  const set = new Set(array);
  return set.size === 1;
}

exports.allEqual = allEqual;
