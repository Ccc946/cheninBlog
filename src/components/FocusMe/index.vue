<template>
  <div class="focus-on-me">
    <div class="title">关注我</div>
    <div class="focus-me">
      <div class="focus-gitee cursor">
        <i class="iconfont icon-mayun"></i>
        <div class="name">码云</div>
      </div>
      <div class="focus-qq cursor">
        <i class="iconfont icon-QQ1"></i>
        <div class="name">QQ</div>
      </div>
      <div class="focus-git cursor">
        <i class="iconfont icon-git"></i>
        <div class="name">GitHub</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.focus-on-me {
  background-color: #fff;
  padding: 10px;
  margin-bottom: 30px;
}
.title {
  font-size: 18px;
  border-bottom: 1px solid #e9e9e9;
  padding-bottom: 10px;
}
.focus-me {
  padding: 20px;
  display: flex;
  justify-content: space-around;
}
.focus-gitee .iconfont {
  color: #b6aeae;
  font-size: 45px;
  margin-top: 5px;
}
.focus-qq .iconfont {
  color: #b6aeae;
  font-size: 50px;
}
.focus-git .iconfont {
  color: #b6aeae;
  font-size: 43px;
  margin-top: 5px;
  display: block;
}
.focus-gitee .iconfont:hover {
  color: #d81e06;
}
.focus-qq .iconfont:hover {
  color: #1296db;
}
.focus-git .iconfont:hover {
  color: #0085a1;
}
.name {
  color: #b6aeae;
  text-align: center;
}
</style>