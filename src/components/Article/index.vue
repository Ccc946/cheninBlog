<template>
  <div class="article">
    <div class="article-item">
      <a
        :href="article.git_add"
        target="_self"
        aria-label="Github"
        class="github-corner github cursor"
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
      <h2 class="article-title cursor" @click="showArticle">{{article.title}}</h2>
      <div class="time">{{article.datetime | parseTime('{y}-{m}-{d}')}}</div>
      <div class="desc">{{article.summarize || article.title}}
          <span class="look-more hover" @click="showArticle">查看更多</span>
      </div>
      <div class="comment cursor" @click="showComment">
          <i class="iconfont icon-huifu"></i>
          <div class="comment-total">{{article.comment_number}}</div>
          <div class="comment-title">回复</div>
      </div>
      <ul class="tags">
        <li v-for="item in article.tags" :key="item.id">
          <Tag :tags="item"></Tag>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: [Object, Array],
      default: () =>{}
    }
  },
  components: {
    Tag: () => import("@/components/Tag"),
  },
  data() {
    return {
      tags: [{ id: 1, path: "https://www.baidu.com/", mag: "Vue", color: "#DB5640" }],
    };
  },
  methods: {
    showArticle() {
      this.$router.push('/article/' + this.article.id)
    },
    showComment() {
      this.$router.push('/article/' + this.article.id + '#comment')
    }
  },
};
</script>

<style lang="less" scoped>
.article {
  background-color: #ffffff;
//   height: 320px;
  margin-bottom: 30px;
  padding: 20px 0;
  .article-item {
    position: relative;
    width: 94%;
    margin: 0 auto;
    padding-bottom: 40px;
    border: 1px dotted #c9c9c9;
    text-align: center;
    .iconfont {
      color: #1296db;
      font-size: 40px;
    }
    .article-title {
        color: #DD604B;
        font-size: 20px;
        margin-top: 50px;
    }
    .time {
        padding-top: 10px;
        font-size: 12px;
    }
    .desc {
        text-align: left;
        margin: 30px 15px;
        .look-more {
            color: #b2b2ae;
            font-size: 12px;
            &:hover {
                color: #02a2de;
            }
        }
    }
    .comment {
        position: relative;
        .iconfont {
            font-size: 60px;
            color: #b2b2ae;
        }
        &:hover {
            .iconfont {
              color: #02a2de;
            }
        }
        .comment-total {
            position: absolute;
            top: 25px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 15px;
            font-weight: 600;
            color: #fff;
        }
        .comment-title {
            color: #b2b2ae;
        }
    }
  }
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
</style>