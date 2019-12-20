/**
 * @author silence_zhpf
 * @description 取数组中的前n个最大的值，并且按从大到小的顺序组成数组
 * @param {number[]} array 需要取值的数组
 * @param {number} [n=1]
 * @returns {number[]}
 */
exports.maxN = function maxN(array, n = 1) {
  return Array.from(array)
    .sort((a, b) => b - a)
    .slice(0, n);
};
