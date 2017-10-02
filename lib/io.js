const { promisify } = require('util');
const { resolve } = require('path');
const { readFile, writeFile } = require('fs');

const pRead = promisify(readFile);
const pWrite = promisify(writeFile);

exports.read = async filePath => {
  try {
    const content = await pRead(resolve(filePath));
    return content.toString();
  } catch (e) {
    console.error(e);
  }
};

exports.write = async (filePath, content) => {
  try {
    return await pWrite(resolve(filePath), content);
  } catch (e) {
    console.error(e);
  }
};
