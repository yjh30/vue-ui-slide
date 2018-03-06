import getPropertySize from './getPropertySize';

export default el => {
  return el.offsetHeight + getPropertySize(el, 'margin-top') + getPropertySize(el, 'margin-bottom');
}
