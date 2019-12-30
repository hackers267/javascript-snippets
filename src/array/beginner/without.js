/**
 * @author silence_zhpf
 * @description 从数组中挑选出和给出的参数不一样的元素组成一个新的数组
 * @param {Array} array 被挑选的数组
 * @param {*} args  参数
 * @return {Array}  数组中剩余元素组成的数组
 */
function without(array, ...args) {
  return array.filter(value => !args.includes(value));
}

exports.without = without;
