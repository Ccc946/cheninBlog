<template>
  <div class="aboutme screen">
    <h1>Chenin</h1>
    <div class="information">chenin • 2020-08-07</div>
    <div class="content">
      <div class="myinfo">目前在读本科生，计算机科学与技术专业,准大四一枚。。。
        喜欢打篮球和coding ^.^
      </div>
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
          <p class="pic">戳我看看！<i class="iconfont icon-shouzhi"></i></p>
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
        "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
      srcList: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598586519372&di=ae3c3d1eaaf50decdfb60a1960fd3421&imgtype=0&src=http%3A%2F%2F08img.shaqm.com%2Fmobile%2F20180409%2F66f064b5d334dc5c35f771dcc5b3a5da.jpeg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598586723728&di=ca4e873455eff244ac396c49c5aa624f&imgtype=0&src=http%3A%2F%2Fi2.wp.com%2Fclutch.hk%2Fwp-content%2Fuploads%2F2015%2F05%2Fhawks-cavaliers-g1.jpg%3Fresize%3D1200%252C788",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598586749307&di=b7740e2d43056596bd5a4fb9fadbb9ef&imgtype=0&src=http%3A%2F%2Fi1.sinaimg.cn%2Fty%2Fk%2Fp%2F2011-03-02%2FU5555P6T12D5472189F44DT20110302134524.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598586888620&di=17cb533c7d2192922b2ca31002ff726c&imgtype=0&src=http%3A%2F%2Fimg.weitiyuba.com%2Fmmbiz_jpg%2FLAakZwuLkNHKmzfibpeCcTR4aFBHVGBvM0e569fYPD70yalsSPNNmWfcjiaRIZzaChGubfT0A2qzBCDgTZEg8Mrw%2F0%3Fwx_fmt.jpeg"

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
 .pic {
   height: 30px;
   line-height: 30px;
   font-size: 16px;
   .iconfont {
     font-size: 25px;
     color: #409eff;
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