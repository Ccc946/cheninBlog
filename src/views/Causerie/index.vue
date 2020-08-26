<template>
    <main class="causerie screen">
      <el-row :gutter="20">
        <el-col :md="14">
          <div class="causerie-title">心情随笔</div>
          <ul>
              <li v-for="item in dataList" :key="item.id">
                  <div class="causerie-item">
                      <div class="causerie-date"><i class="iconfont icon-Date"></i>{{ item.datetime | parseTime('{y}-{m}-{d}') }}</div>
                      <div class="causerie-content">{{ item.content }}</div>
                  </div>
              </li>
          </ul>
        </el-col>
        <el-col :md="10">
          <FocusMe></FocusMe>
        </el-col>
      </el-row>
    </main>
</template>

<script>
import { getCauserie } from '../../api/client'
    export default {
        components: {
            FocusMe: () => import('@/components/FocusMe')
        },
        data() {
          return {
            dataList: []
          }
        },
        created() {
          const res = getCauserie();
          res
          .then(data => {
            this.dataList = data
          }).catch(e => {
            console.log(e);
          })
        }
    }
</script>

<style lang="less" scoped>
.causerie {
  padding: 15px 10px;
}
.causerie-title {
    font-size: 18px;
    padding-bottom: 10px;
    border-bottom: 2px solid #6589a1;
}
.causerie-item {
    margin-top: 10px;
    background-color: #2c87c44d;
    padding: 15px 10px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 1, .1);
    .causerie-date {
        color: #888;
        padding-bottom: 10px;
        i {
            margin-right: 5px;
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