/**
 * @callback fn
 * @param {*} value 输入值
 * @return {boolean}
 */

/**
 * @author silence_zhpf
 * @description 根据断言函数(fn)移除数组中断言函数为true的数组，并返回新的数组
 * @param {Array} arr 需要整理的数组
 * @param {fn} fn
 * @returns {Array}
 */
exports.remove = function remove(arr, fn) {
  return Array.isArray(arr) ? arr.filter(val => !fn(val)) : [];
};
