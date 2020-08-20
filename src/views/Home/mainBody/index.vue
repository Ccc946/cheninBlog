<template>
  <div class="home-main">
    <banner :listImg="listImg"></banner>
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
          <div class="focus-on-me">
            <div class="title">关注我</div>
            <div class="focus-me">
              <div class="focus-wetch cursor">
                <i class="iconfont icon-3-copy"></i>
                <div class="name">微信</div>
              </div>
              <div class="focus-qq cursor">
                <i class="iconfont icon-QQ1"></i>
                <div class="name">QQ</div>
              </div>
              <div class="focus-git cursor">
                <i class="iconfont icon-git"></i>
                <div class="name">GitHub</div>
              </div>
            </div>
          </div>
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
  </div>
</template>

<script>
import img1 from "@/assets/images/banner/banner1.jpg";
import img2 from "@/assets/images/banner/banner2.jpg";
import img3 from "@/assets/images/banner/banner3.jpg";
export default {
  components: {
    Banner: () => import("@/components/Banner"),
    Article: () => import("@/components/Article"),
    Tag: () => import("@/components/Tag"),
  },
  data() {
    return {
      listImg: [
        { id: 1, img_url: img1, path: "#" },
        { id: 2, img_url: img2, path: "#" },
        { id: 3, img_url: img3, path: "#" },
      ],
      tags: 10,
    };
  },
};
</script>

<style lang="less" scoped>
.main-body {
  margin: 15px 10px;
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

.article-type,
.focus-on-me {
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
    ul{
        display: flex;
        flex-wrap: wrap;
        li {
            width: 80px;
            height: 18px;
            padding: 10px;
        }
    }
}
.focus-me {
  padding: 20px;
  display: flex;
  justify-content: space-around;
}
.focus-wetch .iconfont {
  color: #b6aeae;
  font-size: 50px;
}
.focus-qq .iconfont {
  color: #b6aeae;
  font-size: 50px;
}
.focus-git .iconfont {
  color: #b6aeae;
  font-size: 43px;
  margin-top: 5px;
  display: block;
}
.focus-wetch .iconfont:hover {
  color: #29a315;
}
.focus-qq .iconfont:hover {
  color: #1296db;
}
.focus-git .iconfont:hover {
  color: #0085a1;
}
.name {
  color: #b6aeae;
  text-align: center;
}
</style>