import axioshttp from "@utils/axiosHttp";
import { id } from "_postcss-selector-parser@6.0.2@postcss-selector-parser";

// export const goods_api=()=>axioshttp.get("/index/good/cata_goods_list?id=107&sort=&page=1&order=&is_self=&price=&location_id=&cata_id=&attr=");

export const goods_api=()=>axioshttp("get","/index/good/shop_cata_filter?id=107&total=259526");
// export const cata_goods_list=(id)=>axioshttp("get","/index/good/cata_goods_list?"+id+"=",id)
export const cata_goods_list=(id)=>axioshttp("get","/index/good/cata_goods_list?id="+id,id)

// https://apim.restful.5lux.com.cn/good/cata_goods_list?id=109