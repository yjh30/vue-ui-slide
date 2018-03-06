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
            initData.call(this);
            initEvent.call(this);
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
