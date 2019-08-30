
const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use(proxy("/shop",{
        target:"https://apim.restful.5lux.com.cn",
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
    app.use(proxy("/rpcsearchnew",{
        target:"http://t1.restful.5lux.com.cn",

        changeOrigin:true,
        
    }))

    app.use(proxy("/good",{
        target:"https://apim.restful.5lux.com.cn",
        changeOrigin:true,
    }))
}



