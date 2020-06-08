<template>
  <div class="goods">
    <goods-list-item v-for="(item,key) in goods" :key="key" :goods-item="item" class="item" />
  </div>
</template>

<script>
import goodsListItem from "./goodsListItem";
export default {
  name: "goodsList",
  components: {
    goodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.goods {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: space-around;
}
.goods .item {
  width: 48%;
}
</style>