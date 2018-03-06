import utils from '../utils/index';

function getMarginX(el) {
  if (!el) return 0;
  return utils.getPropertySize(el, 'margin-left') + utils.getPropertySize(el, 'margin-right');
}

function getMarginY(el) {
  if (!el) return 0;
  return utils.getPropertySize(el, 'margin-top') + utils.getPropertySize(el, 'margin-bottom');
}

function initVal(val, defaultVal) {
  return typeof val === 'boolean' ? val : defaultVal;
}

export default function() {
  const s = this.slide;
  const c = this.client;

  const firstChild = this.elems.firstChild;

  s.width = c.width + getMarginX(firstChild);
  s.heigth = c.heigth + getMarginY(firstChild);

  s.length = this.elems.content.children.length;
  s.contentWidth = s.length * s.width;

  s.auto = initVal(this.auto, s.auto);
  s.duration = this.duration || s.duration;
  s.effect = this.effect || s.effect;
  s.delay = this.delay || s.delay;
  s.interval = this.interval || s.interval;
  s.loop = initVal(this.loop, s.loop);

  s.showPage = initVal(this.showPage, s.showPage);
  s.showPageIndex = initVal(this.showPageIndex, s.showPageIndex);
  s.showBtn = initVal(this.showBtn, s.showBtn);
}
