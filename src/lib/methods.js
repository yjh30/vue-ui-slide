import utils from './utils/index';
import initData from './initData';
import { doTouchStart, doTouchMove, doTouchEnd } from './touchListeners';

const cssTransitionDuration = utils.getCssProperty('transition-duration');

export default {
  ifFirst() {
    return this.slide.index === 1;
  },

  ifLast() {
    return this.slide.index === this.slide.length;
  },

  prev() {
    this.slideTo(this.slide.index - 1);
  },

  next() {
    this.slideTo(this.slide.index + 1);
  },

  slideTo(nextIndex, isHandleTouch = false) {
    let duration;
    if (typeof isHandleTouch !== 'boolean') {
      duration = isHandleTouch;
      isHandleTouch = false;
    }
    if (this.slide.running ||
      !this.slide.loop && (nextIndex < 1 || nextIndex > this.slide.length) ||
      !isHandleTouch && nextIndex === this.slide.index) return;

    this.slide.running = true;
    this.slide.nextIndex = nextIndex;
    this.slide.prevIndex = this.slide.index;

    this.beforeSlide();
    if (typeof duration !== 'undefined') {
      this.cssAnim(duration);
    } else {
      this.cssAnim();
    }
  },

  beforeSlide() {
    const s = this.slide;
    const e = this.elems;

    if (s.nextIndex > s.index && this.ifLast()) {
      utils.setTranslateX(e.firstChild, s.contentWidth);
    } else if (s.nextIndex < s.index && this.ifFirst()) {
      utils.setTranslateX(e.lastChild, -s.contentWidth);
    }
  },

  slided(prevIndex = this.slide.index) {
    this.slide.running = false;
    this.slide.movedRate = 0;

    this.move.distanceX = 0;
    this.move.translateX = this.start.translateX = this.endTranslateX;

    this.slide.index = this.slide.nextIndex;
    this.elems.content.style[cssTransitionDuration] = '';

    if (this.slide.loop) this.handleLoop();
    if (this.slide.auto && !this.isFullscreen) this.autoSlide();
  },

  handleLoop() {
    const s = this.slide;
    const e = this.elems;

    utils.setTranslateX(e.firstChild, 0);
    utils.setTranslateX(e.lastChild, 0);

    if (s.nextIndex === s.length + 1) {
      s.index = s.nextIndex = 1;
      this.endTranslateX = 0;
      utils.setTranslateX(e.content, 0);

    } else if (s.nextIndex === 0) {
      s.index = s.nextIndex = s.length;
      this.endTranslateX = s.width - s.contentWidth;
      utils.setTranslateX(e.content, this.endTranslateX);
    }

    this.move.translateX = this.start.translateX = this.endTranslateX;
  },

  stop() {
    window.clearTimeout(this.autoTimeoutId);
  },

  autoSlide() {
    window.clearTimeout(this.autoTimeoutId);
    this.autoTimeoutId = window.setTimeout(() => {
      this.next();
    }, (this.slide.interval + this.slide.duration));
  },

  handleMouseEvent() {
    this.elems.content.addEventListener('mouseover', () => {
      window.clearTimeout(this.autoTimeoutId);
    });
    this.elems.content.addEventListener('mouseout', () => {
      if (!this.isFullscreen) {
        this.autoSlide();
      }
    });
  },

  handleVisibilityEvent() {
    try {
      let hidden, visibilityChange;
      if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
        hidden = "hidden";
        visibilityChange = "visibilitychange";
      } else if (typeof document.msHidden !== "undefined") {
        hidden = "msHidden";
        visibilityChange = "msvisibilitychange";
      } else if (typeof document.webkitHidden !== "undefined") {
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange";
      }

      window.document.addEventListener('visibilityChange', () => {
        if (document[hidden]) {
          this.stop();
        } else {
          this.autoSlide();
        }
      }, false);
    } catch (e) {}
  },

  getEndTranslateX(nextIndex = this.slide.nextIndex, curIndex = this.slide.index) {
    const m = this.move;
    const s = this.slide;

    if (curIndex === nextIndex) {
      return m.translateX - m.distanceX;
    } else if (Math.abs(curIndex - nextIndex) === 1) {
      if (nextIndex > curIndex) {
        return m.translateX - (s.width + m.distanceX);
      } else {
        return m.translateX + (s.width - m.distanceX);
      }
    } else {
      return m.translateX + s.width * (s.index - nextIndex);
    }
  },

  cssAnim(duration = this.slide.duration / 1000) {
    this.endTranslateX = this.getEndTranslateX();
    this.elems.content.style[cssTransitionDuration] = `${duration}s`;
    utils.setTranslateX(this.elems.content, this.endTranslateX);
    // console.log(this.endTranslateX)

    setTimeout(() => {
      this.slided();
      this.slideChange(this.slide.nextIndex, this.slide.prevIndex);
    }, this.slide.duration);
  },

  transitionEndHandle() {
    // this.elems.content.addEventListener('webkitTransitionEnd', () => {
    //   alert('webkitTransitionEnd')
    //   this.slided();
    //   this.slideChange(this.slide.nextIndex, this.slide.prevIndex);
    // }, false);

    // this.elems.content.addEventListener('transitionend', () => {
    //   alert('transitionend')
    //   this.slided();
    //   this.slideChange(this.slide.nextIndex, this.slide.prevIndex);
    // }, false);
  },

  doTouchStart,
  doTouchMove,
  doTouchEnd
}
