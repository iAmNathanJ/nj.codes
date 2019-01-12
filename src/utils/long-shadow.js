export function createShadow(elem) {
  const style = window.getComputedStyle(elem);
  const shadowLength = parseInt(style.getPropertyValue('--shadow-length'));
  let shadows = [];
  for (let i = 1; i <= shadowLength; i++) {
    shadows.push(`-${i}px ${i}px 0 var(--shadow-color)`);
  }
  elem.style.cssText = `text-shadow: ${shadows.join(',')};`;
}

export function addLineNumbers(elem) {
  const lineCount = elem.innerText.split(/\r\n|\r|\n/).length;
  const lineNumbers = document.createElement('div');
  lineNumbers.classList.add('line-numbers');
  for (let i = 1; i <= lineCount; i++) {
    lineNumbers.textContent += `${i}\n`;
  }
  elem.appendChild(lineNumbers);
}
