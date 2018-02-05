export function createShadow(elem) {
  const style = window.getComputedStyle(elem);
  const shadowLength = style.getPropertyValue('--shadow-length');
  let shadows = '';
  for (let i = 0; i < shadowLength; i++) {
    shadows += `-${i}px ${i}px 0 var(--shadow-color)${i < shadowLength-1 ? ',' : ''} `;
  }
  elem.style.cssText = `text-shadow: ${shadows};`;
}
