<template>
  <div :class="['vue-ui-slide', { 'fullscreen': isFullscreen }]">
    <div class="slide-content" @touchstart="doTouchStart" @touchmove="doTouchMove" @touchend="doTouchEnd">
      <slot>这里放置panels数据</slot>
    </div>

    <div :class="['slide-btn', 'prev-btn', {'disabled': !slide.auto && !slide.loop && slide.index === 1 }]" v-if="slide.showBtn && slide.length > 1" @click="prev">
      <slot name="prev">上一页</slot>
    </div>

    <div :class="['slide-btn', 'next-btn', {'disabled': !slide.auto && !slide.loop && slide.index === slide.length }]" v-if="slide.showBtn && slide.length > 1" @click="next">
      <slot name="next">下一页</slot>
    </div>

    <div class="pages" v-if="slide.length > 1 && slide.showPage">
      <span :class="{active: slide.nextIndex === i}" v-for="i in slide.length" @click="slideTo(i)">{{showPageIndex ? i : ''}}</span>
    </div>
  </div>
</template>

<script>
  import './index.scss';

  import getData from './getData';
  import getProps from './getProps';
  import methods from './methods';

  import initData from './initData';
  import initEvent from './initEvent';

  export default {
    data: getData,
    props: getProps(),
    methods: methods,
    mounted() {
      if (typeof window !== 'undefined') {
        initData.call(this);
        initEvent.call(this);
      }
    },
    watch: {
      isFullscreen(value) {
        if (value) {
          this.stop();
        } else {
          this.autoSlide();
        }
      }
    }
  }
</script>
<!-- 
<style lang="scss" scoped>
  .vue-ui-slide {
    position: relative;
    &.fullscreen {
      width: 100%;
      height: 100%;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: #000;
      .slide-content {
        height: 100%;
        &>* {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
    .slide-content {
      &:after {
        content: ' ';
        display: block;
        font-size: 0;
        height: 0;
        overflow: hidden;
        clear: both;
      }
      &>* {
        float: left;
      }
    }
    .slide-btn {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      background-color: rgba(0, 0, 0, 0.7);
      color: #FFF;
      padding: 10px;
    }
    .prev-btn {
      left: 0;
    }
    .next-btn {
      right: 0;
    }
    .slide-btn.disabled {
      background-color: #CCC;
    }

    .pages {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translate(-50%, 0);
      &>span {
        padding: 5px;
        &.active {
          color: red;
        }
      }
    }
  }
</style>
 -->