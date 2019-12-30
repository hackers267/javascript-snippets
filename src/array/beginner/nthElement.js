/**
 * @author silence_zhpf
 * @description 取第n个元素
 * @param array {Array} 需要取值的元素
 * @param n {number} [n=0] 取值元素的下标
 * @return {*}
 */
function nthElement(array, n = 0) {
  return (n === -1 ? array.slice(n) : array.slice(n, n + 1))[0];
}

exports.nthElement = nthElement;
