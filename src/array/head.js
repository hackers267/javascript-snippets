/**
 * @author silence_zhpf
 * @description 返回数组中的第一个元素，如果传入的不是数组，则直接返回 undefined
 * @param array{Any} 数组，如果不是数组，则返回 undefined, null
 * @returns {*} 数组中的第一个元素或者是 undefined
 */
exports.head = function head(array) {
  if (Array.isArray(array)) {
    return array[0]
  } else {
    return void 0;
  }
};
