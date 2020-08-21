<template>
  <main class="main-body">
    <el-row :gutter="20">
      <el-col :md="14">
        <div class="article-main">
          <div class="main-title">最新文章</div>
          <Article></Article>
          <Article></Article>
          <Article></Article>
          <Article></Article>
          <Article></Article>
        </div>
      </el-col>
      <el-col :md="10">
        <FocusMe></FocusMe>
        <div class="article-type">
          <div class="type-title title">文章分类</div>
          <div class="type-tags">
            <ul>
              <li v-for="tag in tags" :key="tag">
                <Tag></Tag>
              </li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
  </main>
</template>

<script>
export default {
  components: {
    Banner: () => import("@/components/Banner"),
    Article: () => import("@/components/Article"),
    Tag: () => import("@/components/Tag"),
    FocusMe: () => import("@/components/FocusMe"),
  },
  data() {
    return {
      tags: 10,
    };
  },
};
</script>

<style lang="less" scoped>
.main-body {
  padding: 15px 10px;
}
.article-main {
  padding: 10px 5px;
  .main-title {
    font-size: 18px;
    border-bottom: 1px solid #999;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }
}

.article-type {
  background-color: #fff;
  padding: 10px;
  margin-bottom: 30px;
}
.title {
  font-size: 18px;
  border-bottom: 1px solid #e9e9e9;
  padding-bottom: 10px;
}
.type-tags {
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 80px;
      height: 18px;
      padding: 10px;
    }
  }
}
</style>