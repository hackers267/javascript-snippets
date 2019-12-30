/**
 * @author silence_zhpf
 * @description 根据函数取第一个数组和第二个数组的差集
 * @param arr {Array} 第一个数组
 * @param arr2 {Array} 第二个数组
 * @param fn {function} 取差集的函数
 * @return {Array}
 */
function differenceBy(arr, arr2, fn) {
  const set2 = new Set(arr2.map(fn));
  const arrValue = arr.map(fn);
  const filterValue = arrValue.filter(value => !set2.has(value));
  return arr.filter(item => {
    const value = fn(item);
    return filterValue.includes(value);
  });
}
exports.differenceBy = differenceBy;
