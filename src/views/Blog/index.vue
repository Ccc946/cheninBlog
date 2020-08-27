<template>
  <main class="main-body screen">
    <el-row :gutter="20">
      <el-col :md="18">
        <div class="blog-dalao">
          <div class="blog-title title">周边博客</div>
          <blockquote>本站信息</blockquote>
          <div class="pre">
              <code>
                  <div class="pre-content">
                      <p>站点名称：chenin博客</p>
                      <p>站点描述：记录生活和分享知识</p>
                      <p>站点地址：<a>http://cheninccc.cn/ </a></p>
                      <p>站点图标：<a>http//cheninccc.cn/logo.png</a></p>
                  </div>
              </code>
          </div>
          <blockquote>申请友链须知</blockquote>
          <div class="pre">
              <code>
                  <div class="pre-content">
                      <p>站点时间需超过3个月且原创文章数量需超过8篇</p>
                      <p>不和站内含有非法、不良信息的博客进行链接交换</p>
                      <p>申请链接前请先添加本博链接</p>
                      <p>申请格式：站点名称、地址和一张正方形的图片</p>
                  </div>
              </code>
          </div>
          <blockquote>左邻右舍</blockquote>
          <div class="blog-item">
              <el-row :gutter="20">
                  <el-col :lg="6" :md="8" :sm="12" :xs="12" v-for="item in blogs" :key="item.id">
                      <a :href="item.address" class="blog-box" target="_blank">
                        <img :src="item.image" alt="">
                        <p>{{ item.name }}</p>
                    </a>
                  </el-col>

              </el-row>
          </div>
          
          
        </div>
      </el-col>
      <el-col :md="6">
        <div class="blog-dalao">
          <div class="blog-title title">大佬们</div>
          <div class="blog-content">
            <ul class="clearfix">
              <li v-for="item in dalao" :key="item.id">
                <a :href="item.address" target="_blank">{{ item.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </el-col>
      
    </el-row>
    <div class="comment">
              <WriteComment :articleID="articleID"></WriteComment>
              <div class="comment-content">
                  <div class="comment-area">留言区 <i>留言总数：{{commentList.count}}</i></div>
                  <ul>
                      <li v-for="item in commentList.rows" :key="item.id">
                          <Comment v-if="item.parent_id === 0" :commentList="item"></Comment>
                      </li>
                      <li v-if="commentList.count === 0">
                        <div class="no-comment">暂无评论,快来发表评论吧!</div>
                      </li>
                  </ul>
              </div>
          </div>
  </main>
</template>

<script>
import { getScommunities, getBcommunities, getComment } from '../../api/client'
export default {

  components: {
    Comment: () => import('@/components/Comment'),
    WriteComment: () => import('@/components/WriteComment'),
    exceptional: () => import('@/components/Exceptional')
  },
  data() {
    return {
      blogs:[],
      dalao:[],
      commentList: {},
      articleID: -2
    }
  },
  created() {
    const res = getScommunities();
    res
    .then(data => {
      this.blogs = data
    }).catch(e => {
      console.log(e);
    })

    const res1 = getBcommunities();
    res1
    .then(data => {
      this.dalao = data
    }).catch(e => {
      console.log(e);
    })
    const res2 = getComment(-2);
    res2.then((data) => {
        this.commentList = data;
    }).catch((err) => {
        console.log(err)
    });
  }
};
</script>

<style lang="less" scoped>
.main-body {
  padding: 15px 10px;
}
.blog-dalao {
  background-color: #fff;
  padding: 10px;
  margin-bottom: 30px;
}
.title {
  font-size: 18px;
  border-bottom: 1px solid #e9e9e9;
  padding-bottom: 10px;
}
.blog-content {
  ul {
    li {
      float: left;
      padding: 5px 10px;
      margin: 10px;
      box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.1);
      &:hover {
        box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.3);
      }
    }
  }
}
blockquote {
  border-width: 4px;
  margin: 0.92em 0;
  border-left: 3px solid #dadada;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
  padding-left: 12px;
  color: rgba(0, 0, 0, 0.6);
  display: block;
}
.pre {
  position: relative;
  width: 100%;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  line-height: 1.5;
  font-size: 0.96em;
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
  background: #2B2B2B;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  display: block;
  font-family: monospace;
  white-space: pre;
  margin: 1em 0px;
}
.pre::before {
  content: " ";
  position: absolute;
  border-radius: 50%;
  background: #fc625d;
  width: 12px;
  height: 12px;
  left: 12px;
  top: 10px;
  -webkit-box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;
  box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;
  z-index: 1;
}
.pre::after {
  content: attr(data-lang);
  text-align: right;
  background: #202020;
  width: 100%;
  height: 32px;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  line-height: 32px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0 12px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.pre > code {
  color: #4d4d4c;
  word-wrap: unset;
  background: 0 0 !important;
  padding: 20px 10px;
  .pre-content {
      padding: 20px;
      overflow-x: auto;
      p {
          line-height: 25px;
          font-size: 18px;
          color: #ccc;
          a:hover {
            color: #999;
          }
      }
  }
}
.blog-item {
    padding: 20px;
    .blog-box {
        display: inline-block;
        width: 100%;
        margin: 10px 0;
        box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.1);
        &:hover {
            transform: scale(0.98);
        }
        img {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        p {
            height: 50px;
            line-height: 50px;
            font-size: 20px;
            text-align: center;
        }
    }
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