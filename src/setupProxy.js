const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use(proxy("/hub",{
        target:"https://api.ricebook.com",
        changeOrigin:true,
    }));

    app.use(proxy("/index",{
        target:"https://apim.restful.5lux.com.cn",
        changeOrigin:true,
        pathRewrite:{
            "^/index":""
        }
    }));
    app.use(proxy("/promote",{
        target:"http://m.5lux.com",
        changeOrigin:true,
        
       
    }));

}


//https://apim.restful.5lux.com.cn/good/goodsdetail_bannerads?product_id=6873724&brand_id=9823&cata_id=137
//http://m.5lux.com/promote/get_template_info

//商品规格
//https://apim.restful.5lux.com.cn/good/goodsdetail_sku/?product_id=6874898
//post    http://m.5lux.com/promote/get_template_info
