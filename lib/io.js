const { resolve } = require('path');
const { promisify } = require('util');
const { readFile, writeFile } = require('fs');

const pRead = promisify(readFile);
const pWrite = promisify(writeFile);

exports.read = async function(filePath) {
  try {
    const content = await pRead(resolve(filePath));
    return content.toString();
  } catch (e) {
    console.error(e);
  }
};

exports.write = async function(filePath, content) {
  try {
    return await pWrite(resolve(filePath), content);
  } catch (e) {
    console.error(e);
  }
};
