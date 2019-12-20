/**
 * @author silence_zhpf
 * @description 判断第一个数组（父数组）中是否包含第二个数组（子数组）中的任意元素，存在->true,不存在->false
 * @param {Array} parentArray 父数组
 * @param {Array} childArray 子数组
 * @returns {boolean}
 */
exports.includeAny = function includeAny(parentArray, childArray) {
  return childArray.some(value => parentArray.includes(value))
};
