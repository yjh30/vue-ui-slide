import getCssProperty from './getCssProperty';

const cssTransfrom = getCssProperty('transform');

export default (el, value) => {
  if (!el) return;
  el.style[cssTransfrom] = `translate3d(${value}px, 0, 0)`;
  return value;
}
