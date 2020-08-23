<template>
  <div id="banner">
    <el-carousel trigger="click">
      <el-carousel-item v-for="item in listImg" :key="item.id">
        <a :href="item.path"><img :src="item.img_url" alt=""></a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props: ['listImg'],
  data() {
    return {
    };
  },
};
</script>

<style lang="less">
.el-carousel__item a {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
@media screen and (max-width: 768px) {
  .el-carousel, .el-carousel__container {
    height: 200px;
  }
}
</style>