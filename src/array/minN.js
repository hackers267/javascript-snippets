/**
 * @author silence_zhpf
 * @description 获取数组中前n个小的元素组成的数组，并且由小到大的组成数组
 * @param {number[]} array 待取数组
 * @param {number} [n=1] 需要提取的数量
 * @returns {number[]} 有小到大，需要提取的数组的结果
 */
exports.minN = function minN(array, n = 1) {
  return Array.from(array)
    .sort((a, b) => a - b)
    .slice(0, n);
};
