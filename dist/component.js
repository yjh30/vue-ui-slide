module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getPropertySize__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__outerWidth__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__outerHeight__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getCssProperty__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__setTranslateX__ = __webpack_require__(13);






/* harmony default export */ __webpack_exports__["a"] = ({
  getPropertySize: __WEBPACK_IMPORTED_MODULE_0__getPropertySize__["a" /* default */],
  outerWidth: __WEBPACK_IMPORTED_MODULE_1__outerWidth__["a" /* default */],
  outerHeight: __WEBPACK_IMPORTED_MODULE_2__outerHeight__["a" /* default */],
  getCssProperty: __WEBPACK_IMPORTED_MODULE_3__getCssProperty__["a" /* default */],
  setTranslateX: __WEBPACK_IMPORTED_MODULE_4__setTranslateX__["a" /* default */]
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (el, property) {
  var val = window.getComputedStyle(el).getPropertyValue(property).split('px')[0];

  if (typeof val === 'string' && !isNaN(Number(val))) {
    return Number(val);
  } else {
    return val;
  }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_scss__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getData__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getProps__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__methods__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__initData__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__initEvent__ = __webpack_require__(20);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ __webpack_exports__["a"] = ({
  data: __WEBPACK_IMPORTED_MODULE_1__getData__["a" /* default */],
  props: Object(__WEBPACK_IMPORTED_MODULE_2__getProps__["a" /* default */])(),
  methods: __WEBPACK_IMPORTED_MODULE_3__methods__["a" /* default */],
  mounted: function mounted() {
    if (typeof window !== 'undefined') {
      __WEBPACK_IMPORTED_MODULE_4__initData__["a" /* default */].call(this);
      __WEBPACK_IMPORTED_MODULE_5__initEvent__["a" /* default */].call(this);
    }
  },

  watch: {
    isFullscreen: function isFullscreen(value) {
      if (value) {
        this.stop();
      } else {
        this.autoSlide();
      }
    }
  }
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var vendors = ['webkit', 'moz', 'ms', 'o'];

function getJsProperty(cssProperty) {
  cssProperty = cssProperty.replace(/^-/, '');
  var arr = cssProperty.split('-');

  if (arr.length > 1) {
    return arr.map(function (word, i) {
      if (i > 0) {
        return word.replace(/^\w/, word.charAt(0).toUpperCase());
      }
      return word;
    }).join('');
  }
  return cssProperty;
}

/* harmony default export */ __webpack_exports__["a"] = (function (cssProperty) {
  if (typeof window === 'undefined') {
    return;
  }
  var el = document.createElement('div');
  var vendorCssProperty = void 0,
      i = 0;
  var jsProperty = getJsProperty(cssProperty);

  if (jsProperty in el.style) {
    return cssProperty;
  }

  var len = vendors.length;

  for (; i < len; i++) {
    vendorCssProperty = '-' + vendors[i] + '-' + cssProperty;
    jsProperty = getJsProperty(vendorCssProperty);
    if (jsProperty in el.style) {
      return vendorCssProperty;
    }
  }

  if (!vendorCssProperty) {
    throw new Error('your browser not support the css property: ' + cssProperty);
  }
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__initStatus__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__initElemsStyle__ = __webpack_require__(18);




/* harmony default export */ __webpack_exports__["a"] = (function () {
  __WEBPACK_IMPORTED_MODULE_1__initStatus__["a" /* default */].call(this);
  __WEBPACK_IMPORTED_MODULE_2__initElemsStyle__["a" /* default */].call(this);
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(2);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_23acc135_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(21);
var normalizeComponent = __webpack_require__(6)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_23acc135_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
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
       *  @property showPage 显示页码指示器，默认true
     *  @property showPageIndex 显示页码数字，默认true
     *  @property showBtn 显示上一页下一页按钮，默认true
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

      showPage: true,
      showPageIndex: true,
      showBtn: true,
      running: false,

      movedRate: 0,
      boundRate: 0.1
    },

    /**
     *  监听到touchstart事件时添加的属性
     */
    start: {
      pageX: 0,
      pageY: 0,
      translateX: 0,
      translateY: 0
    },

    /**
     *  监听到touchmove事件时添加的属性
     */
    move: {
      distanceX: 0,
      distanceY: 0,
      translateX: 0,
      translateY: 0
    },

    /**
     *  动画最终的设置值
     */
    endTranslateX: 0,

    /**
     *  自动轮播定时器id
     */
    autoTimeoutId: null
  };
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
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
      default: function _default() {}
    },

    isFullscreen: {
      type: Boolean,
      default: false
    },

    initIndex: {
      type: Number,
      default: 1
    },

    boundRate: {
      type: Number,
      default: 0.1
    }
  };
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__initData__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__touchListeners__ = __webpack_require__(19);




var cssTransitionDuration = __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].getCssProperty('transition-duration');

/* harmony default export */ __webpack_exports__["a"] = ({
  ifFirst: function ifFirst() {
    return this.slide.index === 1;
  },
  ifLast: function ifLast() {
    return this.slide.index === this.slide.length;
  },
  prev: function prev() {
    this.slideTo(this.slide.index - 1);
  },
  next: function next() {
    this.slideTo(this.slide.index + 1);
  },
  slideTo: function slideTo(nextIndex) {
    var isHandleTouch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var duration = void 0;
    if (typeof isHandleTouch !== 'boolean') {
      duration = isHandleTouch;
      isHandleTouch = false;
    }
    if (this.slide.running || !this.slide.loop && (nextIndex < 1 || nextIndex > this.slide.length) || !isHandleTouch && nextIndex === this.slide.index) return;

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
  beforeSlide: function beforeSlide() {
    var s = this.slide;
    var e = this.elems;

    if (s.nextIndex > s.index && this.ifLast()) {
      __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].setTranslateX(e.firstChild, s.contentWidth);
    } else if (s.nextIndex < s.index && this.ifFirst()) {
      __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].setTranslateX(e.lastChild, -s.contentWidth);
    }
  },
  slided: function slided() {
    var prevIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.slide.index;

    this.slide.running = false;
    this.slide.movedRate = 0;

    this.move.distanceX = 0;
    this.move.translateX = this.start.translateX = this.endTranslateX;

    this.slide.index = this.slide.nextIndex;
    this.elems.content.style[cssTransitionDuration] = '';

    if (this.slide.loop) this.handleLoop();
    if (this.slide.auto && !this.isFullscreen) this.autoSlide();
  },
  handleLoop: function handleLoop() {
    var s = this.slide;
    var e = this.elems;

    __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].setTranslateX(e.firstChild, 0);
    __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].setTranslateX(e.lastChild, 0);

    if (s.nextIndex === s.length + 1) {
      s.index = s.nextIndex = 1;
      this.endTranslateX = 0;
      __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].setTranslateX(e.content, 0);
    } else if (s.nextIndex === 0) {
      s.index = s.nextIndex = s.length;
      this.endTranslateX = s.width - s.contentWidth;
      __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].setTranslateX(e.content, this.endTranslateX);
    }

    this.move.translateX = this.start.translateX = this.endTranslateX;
  },
  stop: function stop() {
    window.clearTimeout(this.autoTimeoutId);
  },
  autoSlide: function autoSlide() {
    var _this = this;

    window.clearTimeout(this.autoTimeoutId);
    this.autoTimeoutId = window.setTimeout(function () {
      _this.next();
    }, this.slide.interval + this.slide.duration);
  },
  handleMouseEvent: function handleMouseEvent() {
    var _this2 = this;

    this.elems.content.addEventListener('mouseover', function () {
      window.clearTimeout(_this2.autoTimeoutId);
    });
    this.elems.content.addEventListener('mouseout', function () {
      if (!_this2.isFullscreen) {
        _this2.autoSlide();
      }
    });
  },
  handleVisibilityEvent: function handleVisibilityEvent() {
    var _this3 = this;

    try {
      var hidden = void 0,
          visibilityChange = void 0;
      if (typeof document.hidden !== "undefined") {
        // Opera 12.10 and Firefox 18 and later support 
        hidden = "hidden";
        visibilityChange = "visibilitychange";
      } else if (typeof document.msHidden !== "undefined") {
        hidden = "msHidden";
        visibilityChange = "msvisibilitychange";
      } else if (typeof document.webkitHidden !== "undefined") {
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange";
      }

      window.document.addEventListener('visibilityChange', function () {
        if (document[hidden]) {
          _this3.stop();
        } else {
          _this3.autoSlide();
        }
      }, false);
    } catch (e) {}
  },
  getEndTranslateX: function getEndTranslateX() {
    var nextIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.slide.nextIndex;
    var curIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.slide.index;

    var m = this.move;
    var s = this.slide;

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
  cssAnim: function cssAnim() {
    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.slide.duration / 1000;

    this.endTranslateX = this.getEndTranslateX();
    this.elems.content.style[cssTransitionDuration] = duration + 's';
    __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].setTranslateX(this.elems.content, this.endTranslateX);
  },
  transitionEndHandle: function transitionEndHandle() {
    var _this4 = this;

    this.elems.content.addEventListener('webkitTransitionEnd', function () {
      _this4.slided();
      _this4.slideChange(_this4.slide.nextIndex - 1, _this4.slide.prevIndex - 1);
    }, false);

    this.elems.content.addEventListener('transitionend', function () {
      _this4.slided();
      _this4.slideChange(_this4.slide.nextIndex - 1, _this4.slide.prevIndex - 1);
    }, false);
  },


  doTouchStart: __WEBPACK_IMPORTED_MODULE_2__touchListeners__["c" /* doTouchStart */],
  doTouchMove: __WEBPACK_IMPORTED_MODULE_2__touchListeners__["b" /* doTouchMove */],
  doTouchEnd: __WEBPACK_IMPORTED_MODULE_2__touchListeners__["a" /* doTouchEnd */]
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getPropertySize__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = (function (el) {
  return el.offsetWidth + Object(__WEBPACK_IMPORTED_MODULE_0__getPropertySize__["a" /* default */])(el, 'margin-left') + Object(__WEBPACK_IMPORTED_MODULE_0__getPropertySize__["a" /* default */])(el, 'margin-right');
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getPropertySize__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = (function (el) {
  return el.offsetHeight + Object(__WEBPACK_IMPORTED_MODULE_0__getPropertySize__["a" /* default */])(el, 'margin-top') + Object(__WEBPACK_IMPORTED_MODULE_0__getPropertySize__["a" /* default */])(el, 'margin-bottom');
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getCssProperty__ = __webpack_require__(3);


var cssTransform = Object(__WEBPACK_IMPORTED_MODULE_0__getCssProperty__["a" /* default */])('transform');

/* harmony default export */ __webpack_exports__["a"] = (function (el, value) {
  if (!el) return;
  el.style[cssTransform] = 'translate3d(' + value + 'px, 0, 0)';
  return value;
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__elements__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slide__ = __webpack_require__(17);




/* harmony default export */ __webpack_exports__["a"] = (function () {
  __WEBPACK_IMPORTED_MODULE_0__elements__["a" /* default */].call(this);
  __WEBPACK_IMPORTED_MODULE_1__client__["a" /* default */].call(this);
  __WEBPACK_IMPORTED_MODULE_2__slide__["a" /* default */].call(this);
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  this.elems.el = this.$el;
  this.elems.content = this.$el.children[0];

  var childs = this.elems.content.children;

  this.elems.firstChild = childs[0];
  this.elems.lastChild = childs[childs.length - 1];
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function () {
  var _this = this;

  this.client.width = __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].getPropertySize(this.$el, 'width');
  if (this.client.width === 0) {
    this.client.width = __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].getPropertySize(this.$el.parentElement, 'width');
  }

  [].forEach.call(this.elems.content.children, function (el) {
    el.style.width = _this.client.width + 'px';
  });

  try {
    if (typeof this.client.width !== 'number') {
      window.console.warn('you should set vm.$el style width in css');
    }
  } catch (e) {
    console.log(e);
  }
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_index__ = __webpack_require__(0);


function getMarginX(el) {
  if (!el) return 0;
  return __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].getPropertySize(el, 'margin-left') + __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].getPropertySize(el, 'margin-right');
}

function getMarginY(el) {
  if (!el) return 0;
  return __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].getPropertySize(el, 'margin-top') + __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].getPropertySize(el, 'margin-bottom');
}

function initVal(val, defaultVal) {
  return typeof val === 'boolean' ? val : defaultVal;
}

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var s = this.slide;
  var c = this.client;

  var firstChild = this.elems.firstChild;

  s.width = c.width + getMarginX(firstChild);
  s.heigth = c.heigth + getMarginY(firstChild);

  s.length = this.elems.content.children.length;
  s.contentWidth = s.length * s.width;

  s.auto = initVal(this.auto, s.auto);
  s.duration = this.duration || s.duration;
  s.effect = this.effect || s.effect;
  s.delay = this.delay || s.delay;
  s.interval = this.interval || s.interval;
  s.boundRate = this.boundRate || s.boundRate;
  s.loop = initVal(this.loop, s.loop);

  s.showPage = initVal(this.showPage, s.showPage);
  s.showPageIndex = initVal(this.showPageIndex, s.showPageIndex);
  s.showBtn = initVal(this.showBtn, s.showBtn);
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_index__ = __webpack_require__(0);


var cssTransitionProperty = __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].getCssProperty('transition-property');
var cssTransitionDuration = __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].getCssProperty('transition-duration');
var cssTransitionTimingFunction = __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].getCssProperty('transition-timing-function');
var cssBackfaceVisibility = __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].getCssProperty('backface-visibility');

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var content = this.elems.content;

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
  __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].setTranslateX(content, 0);
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = doTouchStart;
/* harmony export (immutable) */ __webpack_exports__["b"] = doTouchMove;
/* harmony export (immutable) */ __webpack_exports__["a"] = doTouchEnd;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_index__ = __webpack_require__(0);


/**
 *  定义滑动状态
 *  1：表示请求上一屏，通过
 * -1：表示请求上一屏，未通过
 *  2：表示请求下一屏，通过
 * -2：表示请求下一屏，未通过
 */
function getStatus() {
  var _this = this;

  var fn = function fn(status1, status2) {
    if (_this.slide.movedRate > _this.slide.boundRate) {
      return status1;
    } else if (_this.slide.movedRate < _this.slide.boundRate) {
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

var stopMove = false;

function doTouchStart(e) {
  window.clearTimeout(this.autoTimeoutId);
  if (this.slide.running) return;

  stopMove = false;
  this.start.pageX = e.targetTouches[0].pageX;
  this.start.pageY = e.targetTouches[0].pageY;
}

function doTouchMove(e) {
  if (this.slide.running) {
    e.preventDefault();
    return;
  }
  if (stopMove) return;

  var distanceY = e.targetTouches[0].pageY - this.start.pageY;
  var distanceX = e.targetTouches[0].pageX - this.start.pageX;

  if (Math.abs(distanceY) <= Math.abs(distanceX)) {
    e.preventDefault();
  } else {
    stopMove = true;
    return;
  }

  this.move.distanceX = distanceX;
  var prevSlideBoundary = this.ifFirst() && distanceX > 0;
  var nextSlideBoundary = this.ifLast() && distanceX < 0;

  if (!this.slide.loop) {
    if (prevSlideBoundary || nextSlideBoundary) {
      var denominator = Math.abs(this.move.distanceX) / this.client.width + 2;
      this.move.distanceX = this.move.distanceX / denominator;
    }
  } else if (nextSlideBoundary) {
    __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].setTranslateX(this.elems.firstChild, this.slide.contentWidth);
  } else if (prevSlideBoundary) {
    __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].setTranslateX(this.elems.lastChild, -this.slide.contentWidth);
  }

  this.move.translateX = this.start.translateX + this.move.distanceX;
  __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].setTranslateX(this.elems.content, this.move.translateX);
}

function doTouchEnd() {
  if (this.slide.running || this.move.distanceX === 0) return;
  this.slide.movedRate = Math.abs(this.move.distanceX) / this.slide.width;
  this.slideTo(getNextIndex.call(this), true);
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var _this = this;

  if (this.slide.length <= 1) {
    return;
  }

  if (this.initIndex !== this.slide.index) {
    this.slideTo(this.initIndex, 0.01);
  }

  if (this.slide.auto) {
    setTimeout(function () {
      if (!_this.isFullscreen) {
        _this.next();
      }
    }, this.slide.delay);

    this.handleMouseEvent();
    this.handleVisibilityEvent();
  }

  this.transitionEndHandle();
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['vue-ui-slide', { 'fullscreen': _vm.isFullscreen }]},[_c('div',{staticClass:"slide-content",on:{"touchstart":_vm.doTouchStart,"touchmove":_vm.doTouchMove,"touchend":_vm.doTouchEnd}},[_vm._t("default",[_vm._v("这里放置panels数据")])],2),_vm._v(" "),(_vm.slide.showBtn && _vm.slide.length > 1)?_c('div',{class:['slide-btn', 'prev-btn', {'disabled': !_vm.slide.auto && !_vm.slide.loop && _vm.slide.index === 1 }],on:{"click":_vm.prev}},[_vm._t("prev",[_vm._v("上一页")])],2):_vm._e(),_vm._v(" "),(_vm.slide.showBtn && _vm.slide.length > 1)?_c('div',{class:['slide-btn', 'next-btn', {'disabled': !_vm.slide.auto && !_vm.slide.loop && _vm.slide.index === _vm.slide.length }],on:{"click":_vm.next}},[_vm._t("next",[_vm._v("下一页")])],2):_vm._e(),_vm._v(" "),(_vm.slide.length > 1 && _vm.slide.showPage)?_c('div',{staticClass:"pages"},_vm._l((_vm.slide.length),function(i){return _c('span',{class:{active: _vm.slide.nextIndex === i},on:{"click":function($event){_vm.slideTo(i)}}},[_vm._v(_vm._s(_vm.showPageIndex ? i : ''))])})):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);