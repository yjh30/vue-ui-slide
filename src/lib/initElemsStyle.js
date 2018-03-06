import utils from './utils/index';

const cssTransitionProperty = utils.getCssProperty('transition-property');
const cssTransitionDuration = utils.getCssProperty('transition-duration');
const cssTransitionTimingFunction = utils.getCssProperty('transition-timing-function');
const cssBackfaceVisibility = utils.getCssProperty('backface-visibility');

export default function() {
  const content = this.elems.content;

  if (this.slide.length < 2) {
    this.slide.loop = this.slide.auto = false;
    return;
  }

  this.$el.style.width = this.client.width + 'px';
  this.$el.style.overflow = 'hidden';

  content.style.width = this.slide.contentWidth + 'px';

  content.style[cssTransitionProperty] = 'transform';
  content.style[cssTransitionDuration] = '';
  content.style[cssTransitionTimingFunction] = this.slide.effect;
  content.style[cssBackfaceVisibility] = 'hidden';

  // fix 首次触屏滑动闪动 bug
  utils.setTranslateX(content, 0);
}
