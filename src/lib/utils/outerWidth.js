import getPropertySize from './getPropertySize';

export default el => {
  return el.offsetWidth + getPropertySize(el, 'margin-left') + getPropertySize(el, 'margin-right');
}
