<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swp-page swiper-slide" v-for="list in lists">
        <a class="js-no-follow" :href="list.clickUrl">
          <img class="goods-main-photo fadeIn" :src="list.image">
        </a>
      </div>
    </div>
    <!--添加分页器-->
    <div class="swiper-pagination"></div>
  </div>
</template>

<style>
  .swiper-slide img {
    height: 100%;
    width: 100%;
  }
</style>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    name: 'swiper',
    //props: ['lists']
    props: {
      lists: {
        //type: Array,
        required: true
      }
    },
    created() {
      console.log(this.lists)
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        new Swiper('.swiper-container', {
          loop: true,
          autoplay: {
            stopOnLastSlide: true
          },
          pagination: {
            el: '.swiper-pagination',
          },
        })
      }
    }
  }
</script>

