/**
 * @author silence_zhpf
 * @description 获取数组元素中的唯一值，实现中认为 NaN和自身是相等的。
 * @param array {Array} 需要处理的数组
 * @return {Array} 只含有唯一值的数组
 */
function filterUnique(array) {
  return array.filter(value => {
    const index = array.findIndex(value1 => Object.is(value1, value));
    const remainArray = array.slice(index + 1);
    const nextIndex = remainArray.findIndex(value1 => Object.is(value1, value));
    return nextIndex === -1;
  });
}

exports.filterUnique = filterUnique;
