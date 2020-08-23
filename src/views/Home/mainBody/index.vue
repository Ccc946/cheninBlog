<template>
  <div class="home-main">
    <banner :listImg="listImg"></banner>
    <main class="main-body">
      <el-row :gutter="20">
        <el-col :md="14">
          <div class="article-main">
            <div class="main-title">最新文章</div>
            <section v-for="item in articleList" :key="item.id">
              <Article :article="item"></Article>
            </section>
          </div>
        </el-col>
        <el-col :md="10">
          <FocusMe></FocusMe>
          <div class="article-type">
            <div class="type-title title">文章分类</div>
            <div class="type-tags">
              <ul>
                <li v-for="tag in tags" :key="tag.id">
                  <Tag :tags="tag"></Tag>
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
import { getAllArticle, getTags } from "@/api/client.js"

import img1 from "@/assets/images/banner/banner1.jpg";
import img2 from "@/assets/images/banner/banner2.jpg";
import img3 from "@/assets/images/banner/banner3.jpg";
export default {
  components: {
    Banner: () => import("@/components/Banner"),
    Article: () => import("@/components/Article"),
    Tag: () => import("@/components/Tag"),
    FocusMe: () => import('@/components/FocusMe')

  },
  data() {
    return {
      listImg: [
        { id: 1, img_url: img1, path: "#" },
        { id: 2, img_url: img2, path: "#" },
        { id: 3, img_url: img3, path: "#" },
      ],
      tags: [],
      articleList:{}
    };
  },

  created() {
    const res = getAllArticle();
    res.then((data) => {
        this.articleList = data;
    }).catch((err) => {
        console.log(err)
    });
    
    const res1 = getTags();
    res1.then((data) => {
        this.tags = data;
    }).catch((err) => {
        console.log(err)
    });
  }
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
</style>