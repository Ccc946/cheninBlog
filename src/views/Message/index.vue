<template>
    <div class="comment">
        <WriteComment></WriteComment>
        <div class="comment-content">
            <div class="comment-area">留言区</div>
            <ul>
                <li>
                    <Comment></Comment>
                </li>
                <li>
                    <Comment></Comment>
                </li>
                <li>
                    <Comment></Comment>
                </li>
                <li>
                    <Comment></Comment>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            Comment: () => import('@/components/Comment'),
            WriteComment: () => import('@/components/WriteComment')
        },
        
    }
</script>

<style lang="less" scoped>
 .comment {
     padding: 15px;
     
 }
 .comment-area {
     padding-bottom: 10px;
     border-bottom: 1px solid #999;
 }
</style>