<template>
  <div id="layout" @click="cancleShow">
    <!-- 导航栏 -->
    <Navigation></Navigation>
    <!-- 主体内容 -->
    <keep-alive>
      <router-view class="content-view"></router-view>
    </keep-alive>
    <!-- 返回顶部 -->
    <back-top></back-top>
  </div>
</template>

<script>
export default {
  components: {
    Navigation: () => import("@/components/Navigation"),
    BackTop: () => import("@/components/BackTop"),
  },
  methods: {
    cancleShow() {
      this.$store.commit("SET_SHOW", false);
    },
  },
};
</script>

<style lang="less" scoped>
.content-view {
    position: absolute;
    top: 60px;
    background-color: #F2E8D9;
    width: 100%;
  }
@media screen and (min-width: 1200px) {
  .content-view {
    top: 80px;
    background-color: #F2E8D9;
    width: 80%;
    margin-left: 10%;
    box-shadow: 2px 2px 10px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
  }
}
</style>