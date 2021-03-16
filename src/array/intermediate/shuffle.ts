/**
 * @author silence_zhpf
 * @description 将数组元素随机化
 * @param array {Array} 需要随机化的数组
 * @return {Array} 随机化后的数组
 */
function shuffle(array) {
  let last = array.length - 1;
  const newArray = Array.from(array);
  while (last > 0) {
    const i = Math.floor(Math.random() * last);
    [newArray[i], newArray[last]] = [newArray[last], newArray[i]];
    last -= 1;
  }
  return newArray;
}
exports.shuffle = shuffle;
