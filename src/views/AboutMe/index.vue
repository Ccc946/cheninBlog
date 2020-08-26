<template>
  <div class="aboutme screen">
    <h1>Chenin</h1>
    <div class="information">chenin • 2019-09-07</div>
    <div class="content">
      <div class="myinfo">目前在读本科生，计算机科学与技术专业</div>
      <el-row :gutter="50">
        <el-col :sm="12">
          <div class="block">
            <el-timeline>
              <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                type="primary"
                color="#409EFF"
                size="large"
                :timestamp="activity.timestamp | parseTime"
              >{{activity.content}}</el-timeline-item>
            </el-timeline>
          </div>
        </el-col>
        <el-col :sm="12">
          <div class="demo-image__preview">
            <el-image style="width: 100px; height: 100px" :src="url" :preview-src-list="srcList"></el-image>
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
    </div>
  </div>
</template>

<script>
import { getComment, getTimeline } from "@/api/client.js"
export default {
  components: {
            Comment: () => import('@/components/Comment'),
            WriteComment: () => import('@/components/WriteComment')
        },
  data() {
    return {
      activities: [],
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      srcList: [
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
        "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
      ],
      commentList: {},
      articleID: -1
    };
  },
  created() {
    const res = getComment(-1);
    res.then((data) => {
        this.commentList = data;
    }).catch((err) => {
        console.log(err)
    });
    const res1 = getTimeline();
    res1.then((data) => {
        this.activities = data;
    }).catch((err) => {
        console.log(err)
    });
  }
};
</script>

<style lang="less" scoped>
.aboutme {
  padding: 10px 30px;
  h1 {
    text-align: center;
    font-size: 30px;
    padding: 15px 0;
  }
  .information {
    text-align: center;
    margin-bottom: 20px;
  }
}
.myinfo,
.block {
  padding: 15px 0;
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
/deep/ .el-timeline-item .el-timeline-item__tail {
  border-left: 2px solid #409eff;
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