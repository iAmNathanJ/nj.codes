export function formatTime(timestamp) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  try {
    return new Date(timestamp).toLocaleString('en-US', options);
  } catch (e) {
    return timestamp;
  }
}

export function ghEditLink(file, branch = 'master') {
  return `https://github.com/iAmNathanJ/nj.codes/edit/${branch}/content/blog/${file}`;
}

export function ghHistoryLink(file, sha1) {
  return `https://github.com/iAmNathanJ/nj.codes/blob/${sha1}/content/blog/${file}`;
}
