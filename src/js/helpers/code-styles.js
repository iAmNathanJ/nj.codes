export function addLineNumbers(elem) {
  const lineCount = elem.innerText.split(/\r\n|\r|\n/).length;
  const lineNumbers = document.createElement('div');
  lineNumbers.classList.add('line-numbers');
  for (let i = 1; i <= lineCount; i++) {
    lineNumbers.textContent += `${i}\n`;
  }
  elem.appendChild(lineNumbers);
}
