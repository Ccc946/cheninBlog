<template>
    <div class="comment screen">
        <WriteComment :articleID="articleID"></WriteComment>
        <div class="comment-content">
            <div class="comment-area">留言区 <i>留言总数：{{commentList.count}}</i></div>
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
</template>

<script>

import { getComment } from "@/api/client.js"
    export default {
        components: {
            Comment: () => import('@/components/Comment'),
            WriteComment: () => import('@/components/WriteComment')
        },
        data() {
            return {
                commentList:[],
                articleID: 0
            }
        },
        created() {
            this.getData();
        },
        methods: {
            getData() {
                const res = getComment(0);
                res.then((data) => {
                    this.commentList = data;
                }).catch((err) => {
                    console.log(err)
                });
            }
        }
    }
</script>

<style lang="less" scoped>
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