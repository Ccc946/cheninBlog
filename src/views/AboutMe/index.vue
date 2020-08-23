<template>
  <div class="aboutme screen">
    <h1>关于我</h1>
    <div class="information">chenin • 2018-10-21 • 0 评论 • 2855 阅读</div>
    <div class="content">
        <div class="myinfo">目前在读专科生，专业为软件技术。
            99 年，性别♂，喜欢折腾，玩一点游戏，新奇玩意都会弄一下。

            回溯我的博客生涯，在高中那段时间（2016-2017），折腾挺久的...
            因兴趣淡了和即将高考，就不了了之了（最主要家里的台式坏了，还修老多次了，就是一直坏）
        </div>
      <div class="block">
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            type="primary"
            color="#409EFF"
            size="large"
            :timestamp="activity.timestamp"
          >{{activity.content}}</el-timeline-item>
        </el-timeline>
      </div>
      <div class="demo-image__preview">
        <el-image 
            style="width: 100px; height: 100px"
            :src="url" 
            :preview-src-list="srcList">
        </el-image>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activities: [
        {
          content: "支持使用图标",
          timestamp: "2018-04-12 20:46",
        },
        {
          content: "支持自定义颜色",
          timestamp: "2018-04-03 20:46",
        },
        {
          content: "支持自定义尺寸",
          timestamp: "2018-04-03 20:46",
        },
        {
          content: "默认样式的节点",
          timestamp: "2018-04-03 20:46",
        },
      ],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ]
    };
  },
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
.myinfo, .block {
    padding: 15px 0;
}
/deep/ .el-timeline-item .el-timeline-item__tail {
    border-left: 2px solid #409EFF;
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