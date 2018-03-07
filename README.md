### Installation
```
npm i vue-ui-slide --save
```

### 使用前须知
使用npm安装以后，安装包目录中package.json有两个出口，jsnext:main，main，出口文件为.vue组件文件

  - 如果你的webpack配置包含如下配置，则可以正常引用
  ```javascript
    module.exports = {
      resolve: {
        // 针对 Npm 中的第三方模块优先采用 jsnext:main 中指向的 ES6 模块化语法的文件
        mainFields: ['jsnext:main', 'main']
      },
    };
  ```

  - 否则需要babel对其进行转换配置
  ```javascript
  module.exports = {
      module: {
          rules: [{
              test: /\.vue$/,
              loader: 'vue-loader',
              include: [
                  resolve('src'),
                  resolve('node_modules/vue-ui-slide'),
              ],
              options: vueLoaderConfig
          }]
      }
  }
  ```

### Usage
```html
<template>
  <div class="example">
    <slide 
      v-if="pics.length > 0" 
      :duration="300" 
      effect="ease" 
      :init-index="1" 
      :loop="false" 
      :auto="false" 
      :show-page-index="false" 
      :bound-rate="0.1">

      <div class="slide-item" v-for="item in pics">
        <img :src="item">
      </div>
    </slide>
  </div>
</template>
```

```javascript
<script>
  import slide from '../lib/index'

  export default {
    data() {
      return {
        pics: [
          imgUrl1, imgUrl2, imgUrl3
        ]
      }
    },
    components: {
      slide
    }
  }
</script>
```
### 组件props配置
  - **auto** 自动轮播，默认false
  - **duration** 轮播动画时间，默认400ms
  - **effect** 动画过渡效果，transition-timing-function，默认ease
  - **delay** 开始轮播延迟时间，默认4000ms
  - **interval** 轮播间隔时间，默认4000ms
  - **loop** 支持循环轮播，默认true
  - **showPage** 显示分页，默认true
  - **showPageIndex** 显示分页索引，从1开始，默认true
  - **showBtn** 显示上一页，下一页按钮，默认true
  - **slideChange** 轮播切换回调函数，function
  - **isFullscreen** 支持全屏显示，默认false，如果全屏显示，内部会停止自动轮播
  - **initIndex** 轮播初始化索引，从1开始，默认1
  - **boundRate** 轮播边界值(小数)，如果触摸距离占轮播适口的比率大于该值，则轮播到上一屏或下一屏

---

### 更新说明
version 1.0.0之前版本不建议使用
version 1.0.0版本更新如下：

 - 内部代码采用最新（18/03/06）vue-cli脚手架测试；
 - 优化性能：首屏滑动，webkitTransitionEnd/transitionend事件监听，非循环轮播首屏向左/尾屏向右 计算滑动值优化，优化了小部分代码
 - 解决了获取css属性代码bug


