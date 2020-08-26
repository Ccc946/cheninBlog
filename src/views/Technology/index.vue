<template>
  <main class="main-body screen">
    <el-row :gutter="20">
      <el-col :md="14">
        <div class="article-main">
          <div class="main-title">最新文章</div>
          <div class="no-article" v-if="articleList.length === 0">没搜索到相关文章,看点别的吧！^.^</div>
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
</template>

<script>
import { getAllArticle, getTags, searchArticle, tagArticle } from '@/api/client';
export default {
  components: {
    Banner: () => import("@/components/Banner"),
    Article: () => import("@/components/Article"),
    Tag: () => import("@/components/Tag"),
    FocusMe: () => import("@/components/FocusMe"),
  },
  data() {
    return {
      tags: [],
      articleList:[]
    };
  },
  created() {
    
    const res1 = getTags();
    res1.then((data) => {
        this.tags = data;
    }).catch((err) => {
        console.log(err)
    });
    this.getData();
  },
  methods: {
    getData() {
      if(this.$route.query.query !== undefined) {
        const search = searchArticle(this.$route.query.query);
        search.then((data) => {
            this.articleList = data;
        }).catch((err) => {
            console.log(err)
        });
      } else if (this.$route.query.tag !== undefined) {
        const search = tagArticle(this.$route.query.tag);
        search.then((data) => {
            this.articleList = data;
        }).catch((err) => {
            console.log(err)
        });
        
        }else {
        const res = getAllArticle();
        res.then((data) => {
            this.articleList = data;
        }).catch((err) => {
            console.log(err)
        });
      }
    }
  }
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
.no-article {
  text-align: center;
  padding: 15px 0;
  font-size: 18px;
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
@media screen and (max-width: 875px) {
    .screen {
      width: 90%;
      padding: 10px 40px;
    }
  }
  @media screen and (max-width: 575px) {
    .screen {
      width: 90%;
      padding: 10px 20px;
    }
  }
  @media screen and (max-width: 385px) {
    .screen {
      width: 90%;
      padding: 10px 25px;
    }
  }
</style>