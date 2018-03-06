### Installation
```
npm install vue-ui-slide --save
```

### Usage
```html
<template>
    <slide v-if="pics.length > 0" :auto="true" :slide-change="slideChange">
        <div v-for="item in pics">
            <img :src="item">
        </div>
    </slide>
</template>
```

```javascript
import Vue from 'vue';
import slide from 'vue-ui-slide';

const vm = new Vue({
  data() {
    return {
      pics: [
        'url1',
        'url1',
        'url1'
      ],
      slideChange(nextIndex, prevIndex) {
        console.log(`即将轮播面板索引：${nextIndex}，上一屏轮播面板索引：${prevIndex}`);
      }
    }
  }
});

vm.$mount('#app');

```

- **props**
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

---
