<template>
    <div id="layout" @click="cancleShow">
        <!-- 导航栏 -->
        <Navigation></Navigation>

        <transition>
            <keep-alive>
                <router-view :class="attr"></router-view>
            </keep-alive>
        </transition>
        
    </div>
</template>

<script>
    import Navigation from '@/components/Navigation/index.vue'
    import { screenType } from '@/utils/screenSize'
    export default {
        components:{
            Navigation
        },
        data() {
            return {
                attr:''
            }
        },
        mounted() {
            this.attr = screenType();
            addEventListener('resize', this.screenResize);
        },
        methods:{
            screenResize() {
                this.attr = screenType();
            },
            cancleShow() {
                this.$store.commit('SET_SHOW', false);
            }
        },
        destroyed() {
            removeEventListener('resize', this.screenResize);
        }
    }
</script>

<style lang="less" scoped>
    #container {
        border-top: 1px solid transparent;
    }
    .router-view {
        width: 100%;
        min-height: 100%;
        .router-view-sm &{
            position: absolute;
            left: 0;
            top: 0;
            backface-visibility: hidden;
            transition: all .5s cubic-bezier(0.55, 0, 0.1, 1);
            &.slide-forward-enter,
            &.slide-back-leave-active {
                opacity: 0;
                transform: translate3d(100%, 0, 0);
            }
            &.slide-forward-leave-active,
            &.slide-back-enter {
                opacity: 0;
                transform: translate3d(-100%, 0, 0);
            }
        }
        .router-view-lg &{
            transition: all 1s cubic-bezier(0.55, 0, 0.1, 1);
            &.slide-forward-enter,
            &.slide-back-leave-active {
                opacity: 0;
                position: absolute;
                left: 0;
                top: 0;
            }
            &.slide-forward-leave-active,
            &.slide-back-enter {
                opacity: 0;
                position: absolute;
                left: 0;
                top: 0;
            }
        }
    }
</style>