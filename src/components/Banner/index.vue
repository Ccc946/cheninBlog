<template>
  <div id="banner">
    <div>
      <swiper :options="swiperOption">
        <swiper-slide
          class="swiper-slide"
          v-for="(item,index) in listImg"
          :key="index"
        >
            <a :href="item.path" target="_blank">
                <img :src="item.img_url" alt="">
            </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- 分页 -->
        <div class="swiper-button-prev" slot="button-prev"></div>
        <!-- 箭头左 -->
        <div class="swiper-button-next" slot="button-next"></div>
        <!-- 箭头右 -->
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'  //引入vue-awesome-swiper
import 'swiper/dist/css/swiper.css'  //引入样式
export default {
    props: ['listImg'],
    components: {
      swiper,
      swiperSlide
    },
  data() {
    return {
      //设置属性
      swiperOption: {
        //显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
        //设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        //自动轮播
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        //开启循环模式
        loop: true,
        //开启鼠标滚轮控制Swiper切换
        // mousewheel: true,
        // effect: "flip",
      },
    };
  },
};
</script>

<style lang="less">
.swiper-slide {
  width: 100%;
  text-align: center;
  img {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
  }
}
.swiper-button-prev, .swiper-button-next {
  height: 100%;
  top: 20px;
  width: 47px;
  padding: 0 10px;
}
.swiper-button-prev {
  left: 0;
} .swiper-button-next {
  right: 0;
}
@media screen and (max-width: 768px) {
  .swiper-slide {
    height: 200px;
  }
}
</style>