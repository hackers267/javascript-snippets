/**
 * @author silence_zhpf
 * @description 从array中每间隔 n 个元素挑选出一个元素，组成新的数组
 * @param array {Array} 元素数组
 * @param n {number}  间隔
 * @return {Array} 组成的新数组
 */
function everyNth(array, n) {
  return array.filter((_, index) => index % n === n - 1);
}

exports.everyNth = everyNth;
