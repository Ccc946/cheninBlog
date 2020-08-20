<template>
    <div class="home-layout">
        <MainBody v-if="!($store.state.app.currEntry)"></MainBody>   
    </div>
</template>

<script>
    export default {
        components:{
            MainBody: () => import('./mainBody/index')
        },
        data () {
            return {
            }
        },
    }
</script>

<style lang="less" scoped>
</style>