<template>
    <div class="error">
        <img src="../../assets/images/404.png" alt="">
        <button class="btn"><a href="/">返回首页</a></button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.error {
    width: 100%;
    height: 100vh;
    // background-image: url('../../assets/images/404-bg.png');
    background-repeat: repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 1000px;
    }
    .btn {
        flex-shrink: 0;
        position: relative;
        left: -580px;
        top: 200px;
        width: 160px;
        height: 40px;
        cursor: pointer;
        background-color: #6C74A8;
        color: #fff;
        border-radius: 20px;
        border: 1px solid #6C74A8;
        outline: none;
        box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.2);
    }
}
</style>