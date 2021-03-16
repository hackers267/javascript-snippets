interface Config {
  prefix: string;
  separator: string;
  postfix: string;
}
const defaultConfig: Config = {
  prefix: "",
  separator: ",",
  postfix: ""
};

/**
 * @author silence_zhpf
 * @description array的join方法的扩展，不近可以指定分隔符，还可以指点前后缀
 * @param array {Array} 原数组
 * @param config {Object} config 配置，可以指定前后缀和分隔符，默认前后缀为空字符串，分隔符为","
 * @param {String} [config.prefix=""] 前缀
 * @param {String} [config.postfix=""] 后缀
 * @param {String} [config.separator=,]  分隔符
 * @return {string}
 */
function join<T>(array: Array<T>, config = defaultConfig): string {
  const { prefix = "", separator = ",", postfix = "" } = config;
  return prefix + array.join(separator) + postfix;
}
export { join };
