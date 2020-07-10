<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullingUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    // 1、创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullingUpLoad: this.pullingUpLoad
    });

    // 1、监听滚动对象
    this.scroll.on("scroll", position => {
      // console.log(position);
      this.$emit("scroll", position);
    });

    // 2、下拉加载更多
    this.scroll.on("pullingUp", () => {
      console.log("上拉加载更多");
    });
  },

  methods: {
    // scrollTo(x, y, time = 300) {
    //   this.scroll.scrollTo(x, y, time);
    // }
    scrollTo(x, y, time = 100) {
      this.scroll.scrollTo(x, y, time);
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    },
    refresh() {
      this.scroll && this.scroll.refresh && this.scroll.refresh();
    }
  }
};
</script>

<style scope>
.wrapper {
  height: 500px;
}
.content {
  height: 4500px;
}
</style>