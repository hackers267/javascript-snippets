/**
 * @author silence_zhpf
 * @description 返回第一个数组和第二个数组的差集（只存在于第一个，而不存在于第二个数组的元素的集合）
 * @param {Array} firstArray 第一个数组
 * @param {Array} secondArray 第二个数组
 * @return {Array}
 */
function difference(firstArray, secondArray) {
  const set = new Set(secondArray);
  return firstArray.filter(value => !set.has(value));
}

exports.difference = difference;
