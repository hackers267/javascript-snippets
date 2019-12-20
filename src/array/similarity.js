/**
 * @author silence_zhpf
 * @description 返回两个数组的交集（同时存在于两个数组中的元素组成的元素）
 * @param {Array} firstArray 第一个数组
 * @param {Array} secondArray 第二个数组
 * @return {Array}
 */
function similarity(firstArray, secondArray) {
  const set = new Set(secondArray);
  return firstArray.filter(value => set.has(value));
}

exports.similarity = similarity;
