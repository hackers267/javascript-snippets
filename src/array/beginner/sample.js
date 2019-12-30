/**
 * @author silence_zhpf
 * @description 从数组中随机值
 * @param array {Array} 需要取值的数组
 * @return {*}
 */
function sample(array) {
  return array[Math.random() * array.length];
}
exports.sample = sample;
