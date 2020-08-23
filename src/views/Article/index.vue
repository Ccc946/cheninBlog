<template>
  <div class="article screen">
    <div class="article-read">文章阅读量: {{article.read_number}}</div>
    <div class="article-item">
      <a
        :href="article.git_add"
        target="_self"
        aria-label="Github"
        class="github-corner github"
        style="fill: rgb(74, 183, 189);color: rgb(255, 255, 255);"
      >
        <svg width="80" height="80" viewBox="0 0 250 250" aria-hidden="true">
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
          <path
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
            fill="currentColor"
            class="octo-arm"
            style="transform-origin: 130px 106px;"
          />
          <path
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
            fill="currentColor"
            class="octo-body"
          />
        </svg>
      </a>
      <div class="article-content" ref="article">
          <mavon-editor
            :toolbarsFlag="false"
            :subfield="false"
            defaultOpen="preview"
            v-model="article.content"
            />
      </div>
    </div>
    <div class="comment">
        <WriteComment title="发表评论" :articleID="article.id"></WriteComment>
        <div class="comment-content">
            <div class="comment-area">评论区 <i>评论总数：{{commentList.count}}</i></div>
            <ul>
                <li v-for="item in commentList.rows" :key="item.id">
                    <Comment v-if="item.parent_id === 0" :commentList="item"></Comment>
                </li>
                <li v-if="commentList.length === 0">
                  <div class="no-comment">暂无评论,快来发表评论吧!</div>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>

import { getArticle, getComment } from "@/api/client.js"
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
    components: {
    mavonEditor,
    Comment: () => import('@/components/Comment'),
    WriteComment: () => import('@/components/WriteComment')
  },
  data() {
    return {
      article: {},
      commentList: [],
      children: {},
      addComment: this.$store.state.app.addComment
    };
  },
  created() {
    const res = getArticle(this.$route.params.id);
    res.then((data) => {
        this.article = data;
    }).catch((err) => {
        console.log(err)
    });
    this.getData();
  },
  methods: {
    getData() {
      const res1 = getComment(this.$route.params.id);
      res1.then((data) => {
          this.commentList = data;
      }).catch((err) => {
          console.log(err)
      });
    }
  }
};
</script>

<style lang="less" scoped>
.article {
  padding: 15px;
  .article-read {
    padding: 10px 30px;
  }
}
.article-item {
  position: relative;
  width: 94%;
  min-height: 100px;
  margin: 0 auto;
  padding-bottom: 40px;
  border: 1px dotted #c9c9c9;
}
.article-content {
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;
}
.github-corner {
  width: 80px;
  height: 80px;
  border: 0;
}
.github {
  position: absolute;
  right: 0;
  top: 0;
}
.v-note-wrapper {
    box-shadow: none!important;
    background-color: rgba(0, 0, 0, 0)!important;
    z-index: 5;
}
/deep/ .v-show-content {
    background-color: rgba(0, 0, 0, 0)!important;
}
/deep/ pre {
    background-color: #e2e7ec!important;
}
/deep/ .hljs {
    background-color: #e2e7ec!important;
}
 .comment {
     padding: 15px;
     
 }
 .comment-area {
     padding-bottom: 10px;
     border-bottom: 1px solid #999;
     i {
         font-size: 13px;
         color: #999;
     }
 }
 .no-comment {
   text-align: center;
   padding: 20px 0;
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