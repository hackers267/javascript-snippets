const { writeFileSync } = require("fs");
const { resolve } = require("path");
const { argv } = require("yargs");
const chalk = require("chalk");

const srcPath = resolve(__dirname, "../src/array");
const testPath = resolve(__dirname, "../test/units/array");
const fileName = argv.file;
const testName = resolve(testPath, `${fileName}.test.js`);
const srcName = resolve(srcPath, `${fileName}.js`);

try {
  writeFileSync(srcName, "");
  writeFileSync(testName, "");
  console.info(
    `成功生成文件： ${chalk.green(srcName)} 和测试文件 ${chalk.yellow(
      testName
    )}`
  );
} catch (e) {
  console.error("生成文件错误", e);
}
