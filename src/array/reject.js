/**
 * @callback pred 断言函数
 * @param {*} args 数组过滤参数中对应的值 value,index,array
 * @return boolean
 */

/**
 * @author silence_zhpf
 * @description 返回断言函数为真的元素组成的数组
 * @param {Array} array 需要整理的数组
 * @param {pred} pred 断言函数
 * @return {Array} 过滤后的数组
 */
function reject(pred, array) {
  return array.filter((...args) => pred(...args));
}

exports.reject = reject;
