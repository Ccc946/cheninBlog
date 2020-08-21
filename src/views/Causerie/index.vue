<template>
    <main class="causerie">
      <el-row :gutter="20">
        <el-col :md="14">
          <div class="causerie-title">心情随笔</div>
          <ul>
              <li>
                  <div class="causerie-item">
                      <div class="causerie-date"><i class="iconfont icon-Date"></i>2020-2-05</div>
                      <div class="causerie-content">哈哈哈哈</div>
                  </div>
              </li>
              <li>
                  <div class="causerie-item">
                      <div class="causerie-date"><i class="iconfont icon-Date"></i>2020-2-05</div>
                      <div class="causerie-content">哈哈哈哈</div>
                  </div>
              </li>
              <li>
                  <div class="causerie-item">
                      <div class="causerie-date"><i class="iconfont icon-Date"></i>2020-2-05</div>
                      <div class="causerie-content">哈哈哈哈</div>
                  </div>
              </li>
              <li>
                  <div class="causerie-item">
                      <div class="causerie-date"><i class="iconfont icon-Date"></i>2020-2-05</div>
                      <div class="causerie-content">哈哈哈哈</div>
                  </div>
              </li>
          </ul>
        </el-col>
        <el-col :md="10">
          <FocusMe></FocusMe>
        </el-col>
      </el-row>
    </main>
</template>

<script>
    export default {
        components: {
            FocusMe: () => import('@/components/FocusMe')
        }
    }
</script>

<style lang="less" scoped>
.causerie {
  padding: 15px 10px;
}
.causerie-title {
    font-size: 18px;
    padding-bottom: 10px;
    border-bottom: 2px solid #6589a1;
}
.causerie-item {
    margin-top: 10px;
    background-color: #2c87c44d;
    padding: 15px 10px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 1, .1);
    .causerie-date {
        color: #888;
        padding-bottom: 10px;
        i {
            margin-right: 5px;
        }
    }
}
</style>