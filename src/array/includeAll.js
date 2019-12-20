/**
 * @author silence_zhpf
 * @description 判断第一个数组（父数组）中是否含有第二个数组（子数组）中的全部元素
 * @param {Array} parentArray 父数组
 * @param {Array} childArray 子数组
 * @returns {boolean}
 */
exports.includeAll = function includeAll(parentArray, childArray) {
  return childArray.every(value => parentArray.includes(value))
};
