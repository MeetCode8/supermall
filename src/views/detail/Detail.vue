<template>
  <div id="detail">
    <detail-nav-bar class="detail-bar" @titleClick="titleClick"></detail-nav-bar>
    <detail-swiper :top-images="topImages" class="detail-swiper"></detail-swiper>
    <detail-base-info :goods="goods" class="goods-item"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
    <detail-param-info :param-info="paramInfo"></detail-param-info>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from "./ChildDetail/DetailNavBar";
import DetailSwiper from "./ChildDetail/DetailSwiper";
import DetailBaseInfo from "./ChildDetail/DetailBaseInfo";
import DetailShopInfo from "./ChildDetail/DetailShopInfo";
import DetailGoodsInfo from "./ChildDetail/DetailGoodsInfo";
import DetailParamInfo from "./ChildDetail/DetailParamInfo";
import DetailBottomBar from "./ChildDetail/DetailBottomBar";
import Scroll from "components/common/Scroll/Scroll.vue";

import { getDetail, Goods, Shop, GoodsParam } from "network/detail.js";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {}
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailBottomBar
  },
  created() {
    //保存传入iid的数据
    this.iid = this.$route.params.iid;

    //根据iid请求详情数据
    getDetail(this.iid).then(res => {
      console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;

      //获取商品列表信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      //获取商家列表信息
      this.shop = new Shop(data.shopInfo);

      //保存商品的详情数据
      this.detailInfo = data.detailInfo;

      // 保存参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
    });
  },
  methods: {
    titleClick(index) {
      console.log(index);
    },
    addToCart() {
      //  1、获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.idd;

      // 2、将商品添加到购物车里面
      this.$store.commit("addCart", product);
    }
  }
};
</script>

<style scope>
#detail {
  position: relative;
  z-index: 999;
  background-color: #fff;
  height: 100vh;
}
.detail-bar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.contents {
  position: absolute;
  top: 44px;
  bottom: 58px;
  left: 0;
  right: 0;
}
.detail-swiper {
  z-index: 10;
}
</style>
