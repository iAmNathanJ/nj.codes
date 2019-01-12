export function formatTime(timestamp) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  try {
    return new Date(timestamp).toLocaleString('en-US', options);
  } catch (e) {
    return timestamp;
  }
}

export function ghLink(filePath) {
  const regex = /[\w-]+\/index\.md$/;
  const [ match ] = regex.exec(filePath);
  return `https://github.com/iAmNathanJ/nj.codes/edit/master/content/blog/${match}`;
}
