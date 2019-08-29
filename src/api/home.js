import http from "@utils/http";
//轮播图   https://apim.restful.5lux.com.cn/index/index_slider
export const index_carousel=()=>http.get("/index/index/index_slider")
//中间的小导航
export const index_button=()=>http.get("/index/index/index_button")
//小广告
export const index_adv1=()=>http.get("/index/index/columu_recommend")
//
export const index_advert=()=>http.get("/index/index/other_advert");
//加载
export const article_list_ads=(page)=>http.get("/index/index/article_list_ads",{page:page})
