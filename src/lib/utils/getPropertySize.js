export default (el, property) => {
  const val = window.getComputedStyle(el).getPropertyValue(property).split('px')[0];

  if (typeof val === 'string' && !isNaN(Number(val))) {
    return Number(val);
  } else {
    return val;
  }
}
