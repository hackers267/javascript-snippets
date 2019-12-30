/**
 * @author silence_zhpf
 * @description 去除数组中的假值，返回数组中由真值组陈的数组
 * @param {Array} array 数组
 * @returns {Array} 原数组中真值组成的数组
 */
exports.compact = function compact(array) {
  return array.filter(n => n);
};
