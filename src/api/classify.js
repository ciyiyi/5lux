import http from '@utils/http';

//品牌下的总分类
export const ClassifyTitle=()=>http.get("/good/top_catlist?id=");

//分类的详细商品
export const ClassifyGoods=(id=107)=>http.get("/good/catlist",{id});


// https://apim.restful.5lux.com.cn/good/catlist?id=107