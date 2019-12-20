/**
 * @author silence_zhpf
 * @description 获取数组中的最后一个元素
 * @param {Array} array 数组
 * @returns {*}
 */
exports.last = function last(array) {
  if (Array.isArray(array)) {
    const len = array.length;
    return array[len - 1]
  } else {
    return void 0;
  }
};
