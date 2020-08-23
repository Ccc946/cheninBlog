<template>
    <div>
        <div class="comment-title">{{title}}</div>
        <div class="comment-write">
            <el-form :label-position="labelPosition" :rules="rules" ref="formComment" label-width="80px" :model="formComment">
                <el-form-item label="说点什么吧：" prop="content">
                    <el-input required type="textarea" v-model="formComment.content" placeholder="Say something..."></el-input>
                </el-form-item>
                <el-form-item label="昵称（必须）：" prop="name">
                    <el-input required v-model="formComment.name" placeholder="昵称会被公开显示"></el-input>
                </el-form-item>
                <el-form-item label="email：">
                    <el-input v-model="formComment.email" placeholder="email不会被公开显示"></el-input>
                </el-form-item>
                <el-form-item label="url：">
                    <el-input v-model="formComment.url" placeholder="url将当作名字外链使用"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addComment('formComment')">{{title}}</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>

import { postAddComment } from '@/api/client'
    export default {
        props: {
            title: {
                type: String,
                default: '发表留言'
            },
            commentList: {
                type: Object,
                default () {
                return {}
                }
            },
            articleID: {
                type: Number,
            },
        },
        inject: ['reload'],
        data() {
            return {
                labelPosition: 'top',
                formComment: {
                    content: '',
                    name: '',
                    email: '',
                    url: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入昵称', trigger: 'blur' },
                    ],
                    content: [
                        { required: true, message: '请输入内容', trigger: 'blur' }
                    ],
                }
            }
        },
        created() {
            if(this.commentList.id !== undefined) {
                this.formComment.content = '回复 @' + this.commentList.name + ' : ';
            }
        },
        methods: {
            addComment(formComment) {
                this.$refs.formComment.validate((valid) => {
                    if (!valid) {
                        this.$message.error('请输入内容后再提交哦！');
                        return false;
                    }
                    let root_parent = 0, parent_id = 0, avatar, article_id
                    avatar = Math.floor((Math.random() * 1000) % 21)
                    article_id = this.articleID;
                    if(this.commentList.id !== undefined) {
                        // 回复
                        if(this.commentList.root_parent !== 0) {
                            root_parent = this.commentList.root_parent;
                        } else {
                            root_parent = this.commentList.id;
                        }
                        parent_id = this.commentList.id;
                    }
                    // 发送数据到后台
                    const res =postAddComment({
                        content: this.formComment.content,
                        name: this.formComment.name,
                        email: this.formComment.email,
                        url: this.formComment.url,
                        avatar: avatar,
                        root_parent: root_parent,
                        parent_id: parent_id,
                        article_id: article_id
                    });
                    res.then((result) => {
                        this.reload()
                    }).catch((err) => {
                        console.log(err);
                    });
                });
            }
        }
    }
</script>

<style lang="less" scoped>
.comment-title {
    font-size: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #999;
}
</style>