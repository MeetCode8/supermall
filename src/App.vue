<template>
  <div id="app">
    <!-- 添加keep-alive标签，可以防止destoryed（）属性的销毁 -->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/MainTabBar/MainTabBar.vue";

export default {
  name: "App",
  components: {
    MainTabBar
  }
};
</script>

<style>
@import "assets/css/base.css";
</style>
