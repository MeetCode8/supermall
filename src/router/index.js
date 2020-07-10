import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("views/home/Home");
const Category = () => import("views/category/Category");
const Cart = () => import("views/cart/Cart");
const Profile = () => import("views/profile/Profile");
const Detail = () => import("views/detail/Detail");

// 安装router插件
Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home,
    meta: {
      title: "首页"
    }
  },
  {
    path: "/category",
    component: Category,
    meta: {
      title: "分类"
    }
  },
  {
    path: "/cart",
    component: Cart,
    meta: {
      title: "购物车"
    }
  },
  {
    path: "/profile",
    component: Profile,
    meta: {
      title: "个人中心"
    }
  },
  {
    path: "/detail/:iid",
    component: Detail
  }
];

// 创建router对象;
const router = new VueRouter({
  routes,
  mode: "history"
});

// 创建路由导航守卫

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next();
});

export default router;
