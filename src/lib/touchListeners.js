import utils from './utils/index';

/**
 *  定义滑动状态
 *  1：表示请求上一屏，通过
 * -1：表示请求上一屏，未通过
 *  2：表示请求下一屏，通过
 * -2：表示请求下一屏，未通过
 */
function getStatus() {
  const fn = (status1, status2) => {
    if (this.slide.movedRate > this.slide.boundRate) {
      return status1;
    } else if (this.slide.movedRate < this.slide.boundRate) {
      return status2;
    }
  };

  if (this.move.distanceX > 0) return fn(1, -1);
  if (this.move.distanceX < 0) return fn(2, -2);
}

/**
 *  获取下一滑屏索引
 */
function getNextIndex() {
  switch (getStatus.call(this)) {
    case 1:
      if (this.slide.loop || !this.ifFirst()) return this.slide.index - 1;
      break;
    case 2:
      if (this.slide.loop || !this.ifLast()) return this.slide.index + 1;
      break;
  }
  return this.slide.index;
}

/**
 * 处理touchstart touchmove touchend事件 ****************************************************************************
 */

let stopMove = false;

export function doTouchStart(e) {
  window.clearTimeout(this.autoTimeoutId);
  if (this.slide.running) return;

  stopMove = false;
  this.start.pageX = e.targetTouches[0].pageX;
  this.start.pageY = e.targetTouches[0].pageY;
}

export function doTouchMove(e) {
  if (this.slide.running) {
    e.preventDefault();
    return;
  }
  if (stopMove) return;

  let distanceY = e.targetTouches[0].pageY - this.start.pageY;
  let distanceX = e.targetTouches[0].pageX - this.start.pageX;

  if (Math.abs(distanceY) <= Math.abs(distanceX)) {
    e.preventDefault();
  } else {
    stopMove = true;
    return;
  }

  this.move.distanceX = distanceX;
  const prevSlideBoundary = this.ifFirst() && distanceX > 0;
  const nextSlideBoundary = this.ifLast() && distanceX < 0;

  if (!this.slide.loop) {
    if (prevSlideBoundary || nextSlideBoundary) {
      this.move.distanceX = this.move.distanceX / 5;
    }
  } else if (nextSlideBoundary) {
    utils.setTranslateX(this.elems.firstChild, this.slide.contentWidth);
  } else if (prevSlideBoundary) {
    utils.setTranslateX(this.elems.lastChild, -this.slide.contentWidth);
  }

  this.move.translateX = this.start.translateX + this.move.distanceX;
  utils.setTranslateX(this.elems.content, this.move.translateX);
}

export function doTouchEnd() {
  if (this.slide.running || this.move.distanceX === 0) return;
  this.slide.movedRate = Math.abs(this.move.distanceX) / this.slide.width;
  this.slideTo(getNextIndex.call(this), true);
}
