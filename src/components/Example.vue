<template>
  <div class="example">
    <slide 
      v-if="pics.length > 0" 
      :duration="300" 
      effect="ease" 
      :init-index="1" 
      :loop="true" 
      :auto="false" 
      :show-page-index="false" 
      :is-fullscreen="isFullscreen">

      <div class="slide-item" v-for="item in pics">
        <!-- <img :src="item" @click="toggleFullscreen"> -->
        <img :src="item">
      </div>
    </slide>
  </div>
</template>

<script>
  import slide from '../lib/index'

  export default {
    data() {
      return {
        pics: [
          'https://m.360buyimg.com/n12/s750x750_jfs/t3205/78/6355048904/291608/441e877a/58a452adN80497df6.jpg!q70.jpg',
          'https://m.360buyimg.com/n12/jfs/t4105/47/2155533704/319583/53f79440/58a452adNc80be146.jpg!q70.jpg',
          'https://m.360buyimg.com/n12/jfs/t3121/156/6492473908/284095/b8160ca5/58a452adN9d9dbd1c.jpg!q70.jpg',
          'https://m.360buyimg.com/n12/jfs/t3241/59/6354264578/600889/6a343612/58a452aeN0e746eb0.jpg!q70.jpg',
          'https://m.360buyimg.com/n12/jfs/t3070/354/6352201488/462630/ae6f4309/58a452aeN7df0a937.jpg!q70.jpg'
        ],
        isFullscreen: false
      }
    },
    methods: {
      toggleFullscreen() {
        this.isFullscreen = !this.isFullscreen;
      }
    },
    components: {
      slide
    }
  }
</script>

<style lang="scss" scoped>
  .example {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
  }
</style>
