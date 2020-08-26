<template>
  <div id="layout" @click="cancleShow">
    <!-- 导航栏 -->
    <Navigation></Navigation>
    <!-- 主体内容 -->
    <router-view class="content-view clearfix"></router-view>
    
    <!-- 返回顶部 -->
    <back-top></back-top>
    <!-- footer -->
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  components: {
    Navigation: () => import("@/components/Navigation"),
    BackTop: () => import("@/components/BackTop"),
    Footer: () => import('@/components/Footer')
  },
  methods: {
    cancleShow() {
      this.$store.commit("SET_SHOW", false);
    },
  },
};
</script>

<style lang="less" scoped>
#layout {
  padding-top: 1px;
}
.content-view {
    margin-top: 60px;
    background-image: url('../../assets/images/note-bg.jpg');
    background-repeat: repeat;
    width: 100%;
  }
@media screen and (min-width: 1200px) {
  .content-view {
    margin-top: 80px;
    background-color: #F2E8D9;
    width: 80%;
    margin-left: 10%;
    box-shadow: 2px 2px 10px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
  }
}
</style>