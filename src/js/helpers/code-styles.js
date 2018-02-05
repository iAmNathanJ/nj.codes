export function highlightCode(elem) {
  import('prismjs').then(exports => {
    const { highlight, languages } = exports;
    elem.innerHTML = highlight(elem.innerText, languages.javascript);
    attachLineNumbers(elem.parentNode);
  });
}

function attachLineNumbers(elem) {
  const lineCount = elem.innerText.split(/\r\n|\r|\n/).length;
  const lineNumbers = document.createElement('div');
  lineNumbers.classList.add('line-numbers');
  for (let i = 1; i <= lineCount; i++) {
    lineNumbers.innerText += `${i}\n`;
  }
  elem.appendChild(lineNumbers);
}
