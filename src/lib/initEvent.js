export default function() {
  if (this.slide.length <= 1) {
    return;
  }

  if (this.initIndex !== this.slide.index) {
    this.slideTo(this.initIndex, 0.1);
  }

  if (this.slide.auto) {
    setTimeout(() => {
      if (!this.isFullscreen) {
        this.next();
      }
    }, this.slide.delay);

    this.handleMouseEvent();
    this.handleVisibilityEvent();
  }

  this.transitionEndHandle();
}
