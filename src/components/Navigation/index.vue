<template>
    <div class="navigation-container">
        <div class="navigation-item">
            <div class="nav-bar" @click.stop="showNav"> 
                <img src="../../assets/images/navigation/navicon.svg" alt="">
            </div>
            <div class="logo-img">
                <img src="../../assets/images/cheninlogo.jpg" />
                <span>chenin个人博客</span>
            </div>
            <ul class="navigation-box">
                <li>首页</li>
                <li>生活笔记</li>
                <li>技术杂谈</li>
                <li>发表留言</li>
                <li>关于我</li>
            </ul>
            <div class="search-box" @click="close">
                <input type="text" placeholder="请输入关键词">
                <img src="../../assets/images/navigation/搜索.svg" alt="">
            </div>
        </div>
        <div class="side-nav" :class="$store.state.navigation.toShow ? 'active' : ''">
            <ul>
                <li>首页</li>
                <li>生活笔记</li>
                <li>技术杂谈</li>
                <li>发表留言</li>
                <li>关于我</li>
            </ul>
        </div>
        <div class="moblie-search" :class="toClose ? 'close' : ''">
            <input class="search-query" type="text" placeholder="请输入关键词">
            <button class="search-btn">搜索</button>
            <span class="close-search" @click="close">
                <img src="../../assets/images/navigation/close.svg" alt="">
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                toClose: false
            }
        },
        methods: {
            showNav() {
                console.log(this.$store.state.navigation.toShow);
                this.$store.commit('SET_SHOW',!this.$store.state.navigation.toShow);
            },
            close() {
                this.toClose = !this.toClose;
            }
        }
    }
</script>

<style lang="less">
@import "./style.less";
.active {
    left: 0;
}
.close {
    left: 0;
}
</style>