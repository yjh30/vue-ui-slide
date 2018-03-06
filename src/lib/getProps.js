export default function() {
  return {
    auto: {
      type: Boolean,
      default: false
    },

    duration: {
      type: Number,
      default: 400
    },

    effect: {
      type: String,
      default: 'ease'
    },

    delay: {
      type: Number,
      default: 4000
    },

    interval: {
      type: Number,
      default: 4000
    },

    loop: {
      type: Boolean,
      default: true
    },

    showPage: {
      type: Boolean,
      default: true
    },

    showPageIndex: {
      type: Boolean,
      default: true
    },

    showBtn: {
      type: Boolean,
      default: true
    },

    slideChange: {
      type: Function,
      default: function() {}
    },

    isFullscreen: {
      type: Boolean,
      default: false
    },

    initIndex: {
      type: Number,
      default: 1
    }
  }
}
