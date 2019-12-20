/**
 * @author silence_zhpf
 * @description 在数组内移动数组中的元素
 * @param {Array} array 需要操作的数组
 * @param {number} [n=0] 需要移动的数量，如果为正数，则将前n个元素移动到数组后边（保持原有顺序），如果为负数，则将最后n个元素移动到数组前（保持原有顺序）
 * @return {Array}
 */
function offset(array, n) {
  return array.slice(n).concat(array.slice(0, n));
}

exports.offset = offset;
