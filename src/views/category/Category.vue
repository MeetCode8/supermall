<template>
  <nav-bar class="nav-bar">
    <div slot="center">分类栏</div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/NavBar/NavBar.vue";

export default {
  name: "Category",
  components: {
    NavBar
  }
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
</style>
