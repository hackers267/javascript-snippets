/**
 * @author silence_zhpf
 * @description 从数组剔除元素，第一个参数为要剔除元素的数组，其他的参数为多个参数列表或者数组，返回剔除元素后的元素组
 * @param array {Array} 需要剔除元素的数组
 * @param args {Array|any} 需要剔除的元素数组或者多个参数组成的列表
 * @return {*}
 */
function pull(array, ...args) {
  const arg = Array.isArray(args[0]) ? args[0] : args;
  const newArray = array.filter(value => !arg.includes(value));
  // eslint-disable-next-line no-param-reassign
  array.length = 0;
  newArray.forEach(value => array.push(value));
  return array;
}
exports.pull = pull;
