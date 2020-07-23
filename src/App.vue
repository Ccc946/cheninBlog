<template>
  <div id="app">
    <Nav></Nav>
    <router-view />
    <transition name="custom-classes-transition" 
    enter-active-class="animated bounceInLeft" 
    leave-active-class="animated backOutUp">
      <div id="back" @click="backTop">
      </div>
    </transition>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  components: {
    Nav
  },
  data() {
    return {};
  },
  methods: {
    // 保存滚动值，这是兼容的写法
    handleScroll() {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      var back = document.getElementById("back");


      if (scrollTop > 300) {
        back.style.bottom = 250 + 'px';
        //  back.style.display = 'block';
      } else {
        //  back.style.display = 'none';
        back.style.bottom = 800 + 'px';
      }
    },
    // 滚动条回到顶部
    backTop() {
      //回到顶部，用计时器运动回到顶部
      let timer = setInterval(() => {
        let scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        let ispeed = Math.floor(-scrollTop / 10);
        document.documentElement.scrollTop = document.body.scrollTop =
          scrollTop + ispeed;
        if (scrollTop === 0) {
          clearInterval(timer);
        }
      }, 10);
    },
    //节流函数  优化性能
    throttle(func, wait) {
      let previous = 0;
      return function() {
        let now = Date.now();
        let context = this;
        let args = arguments;
        if (now - previous > wait) {
          func.apply(context, args);
          previous = now;
        }
      };
    }
  },
  mounted() {
    window.addEventListener("scroll", this.throttle(this.handleScroll, 0));
  },
  destroyed() {
    window.removeEventListener("scroll", this.throttle);
  }
};
</script>

<style lang="less">
#app {
  background-color: #eae3d5;
}

#back {
    cursor: pointer;
    position: fixed;
    z-index: 2;
    width: 70px;
    height: 900px;
    right: 0;
    bottom: 800px;
    background-image: url(./assets/images/back-top.png);
    -webkit-transition: bottom 1s;
    transition: bottom 1s;
    transition-property: bottom;
    transition-duration: 1s;
    transition-timing-function: ease;
    transition-delay: 0s;
}
</style>
