<template>
  <div class="nav">
    <!-- 导航栏 -->
    <div class="nav-container">
      <div class="chenin-logo">
        <img src="../../assets/images/navigation/cheninlogo.png" alt="logo" />
      </div>
      <div class="nav-box">
        <!-- pc端 导航栏 -->
        <ul class="pc-nav">
          <div
            class="nav-item clearfix"
            v-for="nav_list in nav_lists"
            :key="nav_list.id"
            @mouseover="nav_list.toShow = true"
            @mouseout="nav_list.toShow = false"
          >
            <router-link :to="nav_list.path" @click.native="btn">
              <li class="nav-content">{{ nav_list.name }}</li>
            </router-link>
          </div>
        </ul>

        <!-- 移动端 导航栏 -->
        <div class="moblie-nav cursor" @click.stop="toShow">
          <span class="nav-toggle iconfont icon-2cebianlan"></span>
        </div>
        <div
          class="aside-nav"
          :class="$store.state.navigation.toShow === true ? 'toggle' : ''"
          @click.stop
        >
          <el-menu
            class="el-menu-vertical-demo"
            background-color="#545c64"
            active-text-color="#fa8c35"
            text-color="#fff"
            unique-opened
          >
            <span v-for="nav_list in nav_lists" :key="nav_list.id">
              <router-link :to="nav_list.path" @click.native="btn">
                <el-menu-item :index="nav_list.id.toString()">
                  <span slot="title">{{nav_list.name}}</span>
                </el-menu-item>
              </router-link>
            </span>
          </el-menu>
        </div>
      </div>
      <div class="search cursor" @click="showSearch = !showSearch">
        <i class="iconfont icon-search-copy"></i>
      </div>

      <!-- 搜索框 -->
      <div class="search-box" :class="showSearch === true ? 'showSearch' : ''">
        <div class="cancel">
          <i class="cursor iconfont icon-cancel" @click="showSearch = false"></i>
        </div>
        <div class="search-item">
          <el-input placeholder="请输入关键字" v-model="search" clearable></el-input>
          <el-button @click="searchBtn">搜索</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject:['reload'],
  data() {
    return {
      nav_lists: [
        { id: 1, name: "首页", path: "/", children: null, toShow: false },
        {
          id: 2,
          name: "心情随笔",
          path: "/causerie",
          toShow: false,
        },
        {
          id: 3,
          name: "技术分享",
          path: "/technology",
          toShow: false,
        },
        {
          id: 4,
          name: "博客社区",
          path: "/blog",
          toShow: false,
        },
        {
          id: 5,
          name: "信息留言",
          path: "/message",
          toShow: false,
        },
        {
          id: 6,
          name: "关于我",
          path: "/aboutme",
          children: null,
          toShow: false,
        },
      ],
      search: "",
      showSearch: false,
    };
  },
  methods: {
    toShow() {
      this.$store.commit("SET_SHOW", !this.$store.state.navigation.toShow);
    },
    searchBtn() {
      let path = '/technology?query='+ this.search;
      if(this.$route.query.query !== this.search) {
        this.$router.push(path);
        this.reload();
      }
      
      this.search = "";
      this.showSearch = false;
    },
    btn() {
      this.reload();
    }
  },
};
</script>

<style lang="less" scoped>
@import url("./style.less");
</style>