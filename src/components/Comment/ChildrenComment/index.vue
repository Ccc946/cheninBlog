<template>
    <div>
        <div class="comment-item">
            <div class="comment-left">
                <a href="javascript:viod(0);" class="user-avatar">
                    <img src="../../../assets/images/avatar/0.jpg" alt="avatar">
                </a>
            </div>
            <div class="comment-right">
                <div class="comment-head">
                    <a href="javascript:viod(0);" class="user-name">chenin</a>
                </div>
                <div class="comment-body">
                    <div class="comment-msg">为什么我数组通过索引修改值之后，界面没有变呢？</div>
                </div>
                <div class="comment-foot">
                    <div class="comment-date">3天前</div>
                    <div class="comment-reply cursor" @click="reply"><i class="iconfont icon-huifu"></i>回复</div>
                </div>
                
                <WriteComment v-show="false"></WriteComment>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            WriteComment: () => import('@/components/WriteComment')
        },
        methods: {
            reply() {
            }
        }
    }
</script>

<style lang="less" scoped>
.comment-item {
     display: flex;
     flex-direction: row;
     padding: 15px 10px;
     background-color: #e7ecf0;
     margin-top: 10px;
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
</style>