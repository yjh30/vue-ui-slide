import utils from './utils/index';

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
    content.classList.add('vue-ui-slide-flex');
    content.style[cssTransitionTimingFunction] = this.slide.effect;
    content.style[cssTransitionDuration] = '';
    content.style[cssBackfaceVisibility] = 'hidden';
}
