import http from "@utils/http";
export const fashion_banner=()=>http.get("/index/good/flagdetail?id=139&mtoken=Rmp4Sm1nR2RYcDUyWE1tTWV1b0YxMGdMWWVrMFlRV2RPUnFoc2V1N1BoNE9oSEJTOXhyL2c1Mi9ZVGplc0N2TjQvZm1RQ2ludUxPbTZ4WkRhLzVzNFdXQmxCZ0JuYm9SV0JSTE81ZVJaVmdxWXdNQ0c4bzVETmZlemFHRFMyYW80SjlXRFdUUjI1ZHFoMmZWSUVpTDJwbTFXejVwMlgxd1cyTW9aR09rWVpjPQ==")

export const fashion_detial=(productId=6873724,)=>http.get("/index/good/goodsdetail/"+productId+"&from=&mtoken=OVBNT29UL3c5Uk9HMXNFbTh1Tm5POUF1ZlNoUEtrR3lLblQ5Uk91cGQvU3dZVW1TTms0YnRieU9pbXlxaFhGbmc1eUFzbzJWUTVrcm1YSWkyVGc5OHZFQzM1a1lIcStEbTBjMUVEa2g1RlNjbEhXVTBVVkJkbXo0NnBmUllOSzBTbm93dnkxZzE4WEc4ZWM5S2NLNXZkN3NHeDMvZWZlY0ZHNjk5S0NaMkRVPQ==",{id:productId})

//https://apim.restful.5lux.com.cn/good/goodsdetail_bannerads?product_id=6873724&brand_id=9823&cata_id=137
export const carousel_api=()=>http.get("/index/good/goodsdetail_bannerads?product_id=6873724&brand_id=9823&cata_id=137")

export const goods_params=(product_id)=>http.get("/index/good/goodsdetail_sku/?",{product_id:product_id})