import getCssProperty from './getCssProperty';

const cssTransform = getCssProperty('transform');

export default (el, value) => {
  if (!el) return;
  el.style[cssTransform] = `translate3d(${value}px, 0, 0)`;
  return value;
}
