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
                      <p>站点图标：<a>https//cheninccc.cn/logo.png</a></p>
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
                  <el-col :lg="6" :md="8" :sm="12" :xs="12">
                      <a href="/" class="blog-box">
                        <img src="../../assets/images/avatar/1.jpg" alt="">
                        <p>chenin</p>
                    </a>
                  </el-col>
                  <el-col :lg="6" :md="8" :sm="12" :xs="12">
                      <a href="/" class="blog-box">
                        <img src="../../assets/images/avatar/1.jpg" alt="">
                        <p>chenin</p>
                    </a>
                  </el-col>
                  <el-col :lg="6" :md="8" :sm="12" :xs="12">
                      <a href="/" class="blog-box">
                        <img src="../../assets/images/avatar/1.jpg" alt="">
                        <p>chenin</p>
                    </a>
                  </el-col>
                  <el-col :lg="6" :md="8" :sm="12" :xs="12">
                      <a href="/" class="blog-box">
                        <img src="../../assets/images/avatar/1.jpg" alt="">
                        <p>chenin</p>
                    </a>
                  </el-col>
                  <el-col :lg="6" :md="8" :sm="12" :xs="12">
                      <a href="/" class="blog-box">
                        <img src="../../assets/images/avatar/1.jpg" alt="">
                        <p>chenin</p>
                    </a>
                  </el-col>
                  <el-col :lg="6" :md="8" :sm="12" :xs="12">
                      <a href="/" class="blog-box">
                        <img src="../../assets/images/avatar/1.jpg" alt="">
                        <p>chenin</p>
                    </a>
                  </el-col>
                  <el-col :lg="6" :md="8" :sm="12" :xs="12">
                      <a href="/" class="blog-box">
                        <img src="../../assets/images/avatar/1.jpg" alt="">
                        <p>chenin</p>
                    </a>
                  </el-col>
                  <el-col :lg="6" :md="8" :sm="12" :xs="12">
                      <a href="/" class="blog-box">
                        <img src="../../assets/images/avatar/1.jpg" alt="">
                        <p>chenin</p>
                    </a>
                  </el-col>
                  <el-col :lg="6" :md="8" :sm="12" :xs="12">
                      <a href="/" class="blog-box">
                        <img src="../../assets/images/avatar/1.jpg" alt="">
                        <p>chenin</p>
                    </a>
                  </el-col>

              </el-row>
          </div>
          <exceptional></exceptional>
        </div>
      </el-col>
      <el-col :md="6">
        <div class="blog-dalao">
          <div class="blog-title title">大佬们</div>
          <div class="blog-content">
            <ul class="clearfix">
              <li>
                <a href="/">烟雨寒云</a>
              </li>
              <li>
                <a href="/">烟雨寒云</a>
              </li>
              <li>
                <a href="/">烟雨寒云</a>
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
    exceptional: () => import('@/components/Exceptional')
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
  background: #f1f3f3;
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
  background: #ebeded;
  color: #cececf;
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