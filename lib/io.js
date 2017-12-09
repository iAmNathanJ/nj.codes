const { resolve, dirname, basename, extname } = require('path');
const { readFile, writeFile, existsSync } = require('fs');
const { createHash } = require('crypto');
const { promisify } = require('util');

const pRead = promisify(readFile);
const pWrite = promisify(writeFile);

async function read(filePath) {
  try {
    const content = await pRead(resolve(filePath));
    return content.toString();
  } catch (e) {
    return null;
  }
};

async function write(filePath, content) {
  try {
    return await pWrite(resolve(filePath), content);
  } catch (e) {
    console.error(e);
  }
};

async function writeWithHash(filePath, content, length = 8) {
  const hash = createHash('md5')
  .update(content)
  .digest('hex')
  .slice(0, length);

  const dir = dirname(filePath);
  const ext = extname(filePath);
  const base = basename(filePath, ext);
  const hashedFilename = `${base}.${hash}${ext}`;

  try {
    await pWrite(resolve(dir, hashedFilename), content);
    return hashedFilename;
  } catch (e) {
    console.error(e);
  }
}

async function createCSSManifestEntry(path, hashedFilename) {
  const manifestPath = './dist/css/manifest.json';
  const manifest = existsSync(manifestPath)
    ? await read('./dist/css/manifest.json').then(JSON.parse)
    : {};
  manifest[basename(path)] = `/css/${hashedFilename}`;
  await write(manifestPath, JSON.stringify(manifest, null, 2));
}

exports.read = read;
exports.write = write;
exports.writeWithHash = writeWithHash;
exports.createCSSManifestEntry = createCSSManifestEntry;
