import { request } from "./request";

// 1、请求多个数据
export function getHomeMultidata() {
  return request({
    url: "/home/multidata"
  });
}

// 2、请求三个商品类的数据

export function getHomeGoods(type, page) {
  return request({
    url: "/home/data", 
    params: {
      type,
      page 
    }
  });
}
