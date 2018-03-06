export default function() {
  return {
    /**
     *  @property el 最外层容器
     *  @property content 内容容器
     *  @property firstChild 内容容器第一个面板子元素
     *  @property lastChild 内容容器最后一个面板子元素
     */
    elems: {
      el: '',
      content: '',
      firstChild: '',
      lastChild: ''
    },

    /**
     *  @property width 视口宽
     *  @property height 视口高
     */
    client: {
      width: 0,
      height: 0
    },

    /**
     *  @property width 滑屏宽度
     *  @property height 滑屏高度
     *  @property contentWidth elems.content元素宽

     *  @property index 滑屏索引，从1开始
     *  @property nextIndex 下一滑屏索引
     *  @property prevIndex 上一滑屏索引
     *  @property length 滑屏数量
        
     *  @property auto 自动轮播，默认false
     *  @property duration 动画持续时间，默认400ms
     *  @property effect 动画过渡效果，默认ease
     *  @property delay 开始轮播延迟时间，默认4000ms
     *  @property interval 动画间隔时间，默认4000ms
     *  @property loop 支持循环滑动，默认true
     *  @property running 滑屏进行中(动画正在执行)

     *  @property movedRate 滑动比率，即：this.move.distanceX / this.slide.width
     *  @property boundRate 滑动界限比率，如果滑动比率大于该值，那么就执行滑屏动画
     */
    slide: {
      width: 0,
      height: 0,
      contentWidth: 0,

      index: 1,
      prevIndex: 1,
      nextIndex: 1,
      length: 0,

      auto: false,
      duration: 400,
      effect: 'ease',
      delay: 4000,
      interval: 4000,
      loop: true,

      running: false,

      movedRate: 0,
      boundRate: 0.15
    },

    /**
     *  监听到touchstart事件时添加的属性
     */
    start: {
      pageX: 0,
      pageY: 0,
      translateX: 0,
      translateY: 0,
    },

    /**
     *  监听到touchmove事件时添加的属性
     */
    move: {
      distanceX: 0,
      distanceY: 0,
      translateX: 0,
      translateY: 0,
    },

    /**
     *  动画最终的设置值
     */
    endTranslateX: 0,

    /**
     *  自动轮播定时器id
     */
    autoTimeoutId: null
  }
}
