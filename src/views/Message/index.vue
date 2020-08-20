<template>
    <div class="comment">
        <div class="comment-title">给我留言</div>
        <div class="comment-write">
            <el-form :label-position="labelPosition" label-width="80px" :model="formComment">
                <el-form-item label="说点什么吧：">
                    <el-input type="textarea" v-model="formComment.content" placeholder="Say something..."></el-input>
                </el-form-item>
                <el-form-item label="昵称（必须）：">
                    <el-input v-model="formComment.name" placeholder="昵称会被公开显示"></el-input>
                </el-form-item>
                <el-form-item label="email：">
                    <el-input v-model="formComment.email" placeholder="email不会被公开显示"></el-input>
                </el-form-item>
                <el-form-item label="url：">
                    <el-input v-model="formComment.url" placeholder="url将当作名字外链使用"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">发表留言</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="comment-content">
            <div class="comment-area">留言区</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                labelPosition: 'top',
                formComment: {
                    content: '',
                    name: '',
                    email: '',
                    url: ''
                }
            }
        }
    }
</script>

<style lang="less" scoped>
 .comment {
     padding: 15px;
     .comment-title {
         font-size: 20px;
         padding-bottom: 10px;
         border-bottom: 1px solid #999;
     }
 }
 .comment-area {
     padding-bottom: 10px;
     border-bottom: 1px solid #999;
 }
</style>