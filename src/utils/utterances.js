export function initUtterances(elem) {
  const utterancesConfig = {
    src: 'https://utteranc.es/client.js',
    repo: 'iAmNathanJ/nj.codes',
    branch: 'master',
    theme: 'github-light',
    crossorigin: 'anonymous',
    async: true,
    'issue-term': 'pathname'
  };

  const utterances = document.createElement('script');
  Object.keys(utterancesConfig).forEach(key => {
    utterances.setAttribute(key, utterancesConfig[key]);
  });

  elem.appendChild(utterances);
}
