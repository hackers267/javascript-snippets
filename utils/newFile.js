const { createReadStream, createWriteStream } = require("fs");
const { resolve } = require("path");
const { Transform, pipeline } = require("stream");
const { argv } = require("yargs");
const chalk = require("chalk");

const commonPath = `array/intermediate`;
const srcPath = resolve(__dirname, "../src/", commonPath);
const testPath = resolve(__dirname, "../test/units/", commonPath);
const fileName = argv.file;
const testName = resolve(testPath, `${fileName}.test.js`);
const srcName = resolve(srcPath, `${fileName}.js`);
const sourceSrcName = resolve(__dirname, "./template/array/src.txt");
const sourceTestName = resolve(__dirname, "./template/array/test.txt");

class MyTransform extends Transform {
  // eslint-disable-next-line no-underscore-dangle
  _transform(chunk, encoding, callback) {
    const str = chunk.toString();
    const replacer = /name/g;
    const result = str.replace(replacer, fileName);
    this.push(result);
    callback();
  }
}
function generateFile(source, destination) {
  const sourceStream = createReadStream(source, { encoding: "utf-8" });
  const destinationStream = createWriteStream(destination, {
    encoding: "utf-8"
  });
  const transform = new MyTransform();
  pipeline(sourceStream, transform, destinationStream);
}

try {
  generateFile(sourceSrcName, srcName);
  generateFile(sourceTestName, testName);
  console.info(
    `成功生成文件： ${chalk.green(srcName)} 和测试文件 ${chalk.yellow(
      testName
    )}`
  );
} catch (e) {
  console.error("生成文件错误", e);
}
