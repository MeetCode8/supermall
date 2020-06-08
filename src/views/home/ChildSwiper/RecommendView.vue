<template>
  <div class="recommend">
    <div v-for="(item,key) in  recommends" :key="key" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommentView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.recommend {
  display: flex;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
  font-size: 14px;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 65px;
  height: 65px;
  margin-bottom: 10px;
}
</style>