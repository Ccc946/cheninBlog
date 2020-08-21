<template>
    <div class="exceptional">
        <blockquote>赏博主一杯咖啡</blockquote>
        <div class="exceptional-item1">
            <img src="../../assets/images/exceptional.jpg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
blockquote {
  border-width: 4px;
  margin: 0.92em 0;
  border-left: 3px solid #dadada;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
  padding-left: 12px;
  color: rgba(0, 0, 0, 0.6);
  display: block;
}
.exceptional-item1 {
    width: 100%;
    img {
        width: 100%;
    }
}
@media screen and (min-width: 1000px) {
    .exceptional-item1 {
        width: 700px;
        margin: 0 auto;
    }
}
</style>