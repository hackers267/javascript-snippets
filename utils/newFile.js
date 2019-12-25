const { writeFileSync } = require("fs");
const { resolve } = require("path");
const { argv } = require("yargs");

const srcPath = resolve(__dirname, "../src/array");
const testPath = resolve(__dirname, "../test/units/array");
const fileName = argv.file;
const testName = resolve(testPath, `${fileName}.test.js`);
const srcName = resolve(srcPath, `${fileName}.js`);

try {
  writeFileSync(srcName, "");
  writeFileSync(testName, "");
} catch (e) {
  console.error("生成文件错误", e);
}
