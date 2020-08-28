<template>
    <div>
        <div class="comment-item">
            <div class="comment-left">
                <a class="user-avatar">
                    <img :src="img" alt="avatar">
                </a>
            </div>
            <div class="comment-right">
                <div class="comment-head">
                    <a :href="commentList.url" class="user-name">{{commentList.name}}</a>
                </div>
                <div class="comment-body">
                    <div class="comment-msg">{{commentList.content}}</div>
                </div>
                <div class="comment-foot">
                    <div class="comment-date">{{commentList.datetime | formatDateTime}}</div>
                    <div class="comment-reply cursor" @click="reply = !reply"><i class="iconfont icon-huifu"></i>回复</div>
                </div>
                <div class="reply"  v-show="reply">
                    <div class="cancelReply" @click="reply=false">
                        <i class="iconfont icon-cancel"></i>
                    </div>
                    <WriteComment title="回复评论" :commentList="commentList" :articleID="commentList.article_id"></WriteComment>
                </div>
                <section v-for="item in children" :key="item.id" v-show="item.length !== 0">
                    <ChildrenComment :children="item"></ChildrenComment>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import { getChildrenComment } from "@/api/client.js"
    export default {
        props: {
            commentList: {
                type: Object,
                default () {
                return {}
                }
            }
        },
        components: {
            WriteComment: () => import('@/components/WriteComment'),
            ChildrenComment: () => import('./ChildrenComment')
        },
        data() {
            return {
                reply: false,
                img: 'http://cheninccc.cn:3000/images/avatar/' + this.commentList.avatar + '.jpg',
                children: []
            }
        },
        created() {
            const res = getChildrenComment(this.commentList.id);
            res.then((data) => {
                this.children = data;
            }).catch((err) => {
                console.log(err)
            });
        }
    }
</script>

<style lang="less" scoped>
.comment-item {
     display: flex;
     flex-direction: row;
     padding: 15px 10px;
     .comment-left {
         width: 50px;
         height: 50px;
         img {
             width: 100%;
             height: 100%;
             border-radius: 50%;
         }
     }
     .comment-right {
         padding: 5px 15px;
         border-bottom: 1px solid #bbb;
         flex: 1;
         .comment-head {
             padding: 10px 0;
             a:hover {
                 color: #fa8c35;
             }
         }
         .comment-body {
             padding-bottom: 10px;
         }
         .comment-foot {
             display: flex;
             justify-content: space-between;
             color: #999;
             .iconfont {
                 font-size: 18px;
             }
         }
     }
 }
 .reply {
     padding: 15px 10px;
     position: relative;
     .cancelReply {
         position: absolute;
         right: 10px;
         top: 10px;
         width: 26px;
         height: 26px;
         background-color: rgba(0, 0, 0, 0.1);
         border-radius: 13px;
         text-align: center;
         line-height: 26px;
         cursor: pointer;
     }
 }
</style>