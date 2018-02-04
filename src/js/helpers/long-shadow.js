export function createShadow(elem) {
  const style = window.getComputedStyle(elem);
  const shadowLength = style.getPropertyValue('--shadow-length');
  const shadowColor = style.getPropertyValue('--shadow-color');
  let shadows = '';
  for (let i = 0; i < shadowLength; i++) {
    // const r = 50;
    // const g = 52;
    // const b = 66;
    // const color = `rgba(50, 52, 66, ${1-(i/shadowLength*2.5)})`;
    shadows += `-${i}px ${i}px 0 ${shadowColor}${i < shadowLength-1 ? ',' : ''} `;
  }
  elem.style.cssText = `text-shadow: ${shadows};`;
}
