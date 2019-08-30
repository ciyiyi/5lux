import http from "@utils/http";
//推荐品牌
export const brandRecommondBrand=()=>http.get("/good/brands")

//全部品牌
export const brandAllBrand=()=>http.get("/good/brandlist")


//商品列表
export const brandTitle=(id=2101,cata_id=undefined,page=0)=>http.get("/good/brand_detail",{id:id,cata_id:undefined,page:page})



//排序(1个参数)
export const sortTitleOne=(id=2101,sort='add_time')=>http.get("/good/brand_detail",{id:id,sort:sort})

// https://apim.restful.5lux.com.cn/good/brand_detail/?id=2101&sort=add_time

//排序(两个参数)
export const sortTitleTwo=(id=2101,sort='product_price',order='ASC')=>http.get("/good/brand_detail",{id:id,sort:sort,order:order})


// https://apim.restful.5lux.com.cn/good/brand_detail/?id=2101&sort=add_time

// https://apim.restful.5lux.com.cn/good/brand_detail/?id=2101&sort=product_price&order=ASC


// http://api.restful.5lux.com.cn/good/brand_detail/?id=2101&cata_id=undefined&page=2

// https://apim.restful.5lux.com.cn/good/brands



// https://apim.restful.5lux.com.cn/good/brandlist