<template>
  <div class="tar-control">
    <div
      v-for="(item,index) in titles"
      :key="index"
      class="tar-control-item"
      :class="{active: index === currentIndex} "
      @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TarControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    }
  }
};
</script>

<style>
.tar-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
}
.tar-control-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-high-text);
}
.tar-control-item span {
  padding: 4px;
}
</style>