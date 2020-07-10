<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll
      class="scroll"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pulling-up-load="true"
    >
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tar-control :titles="['流行','新款','精选']" class="tar-control" @tabClick="tabClick"></tar-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/NavBar/NavBar.vue";
import TarControl from "components/content/TarControl/TarControl.vue";
import Scroll from "components/common/Scroll/Scroll.vue";
import HomeSwiper from "./ChildSwiper/HomeSwiper.vue";
import { getHomeMultidata, getHomeGoods } from "network/home.js";
import RecommendView from "./ChildSwiper/RecommendView";
import FeatureView from "./ChildSwiper/FeatureView";
import goodsList from "components/content/goods/goodsList.vue";
import BackTop from "components/content/BackTop/BackTop.vue";

export default {
  name: "Home",
  //在data中保存的数据是不会被销毁的，定义值时，注意使用的是 ：不是 =
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop: false,
      saveY: 0
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TarControl,
    goodsList,
    Scroll,
    BackTop
  },
  created() {
    // 1、请求多个数据
    this.getHomeMultidata();
    // 2、请求三个商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  //router回来时调用的函数，设置当前的Y高度
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  //router离开时调用的函数，离开时获取Y的高度
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
  },
  destroyed() {
    console.log("destoryed");
  },
  methods: {
    //时间监听的相关方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
      // console.log(position);
    },
    // 网络请求的相关方法
    // 1、请求多个数据
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    // 2、请求三个商品数据

    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    }
  }
};
</script>

<style scope>
#home {
  padding-top: 39px;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tar-control {
  position: sticky;
  top: 40px;
  background-color: #fff;
  z-index: 9;
}
.content {
  /* height: 300px; */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 44px;
  left: 0;
  right: 0;
  /* position: sticky; */
  /* height: calc(100% - 93px);
  overflow: hidden; */
}
</style>
