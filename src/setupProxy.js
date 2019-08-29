const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use(proxy("/shop",{
        target:"https://apim.restful.5lux.com.cn",
        changeOrigin:true,
    }))
    app.use(proxy("/good",{
        target:"https://apim.restful.5lux.com.cn",
        changeOrigin:true,
    }))

}

// https://apim.restful.5lux.com.cn/shop/catalist
// https://apim.restful.5lux.com.cn/good/brands

// http://cmsjapi.dataoke.com/api/category/product/model-detail-by-model-id-new?entityId=4&modelId=9643&proModelId=2&source=3&userId=669231&tuserId=669231

