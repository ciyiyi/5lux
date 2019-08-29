const proxy=require("http-proxy-middleware");
module.exports=(app)=>{
    app.use(proxy("/api",{
        target:"https://apim.restful.5lux.com.cn",
        changeOrigin:true,
        pathRewrite:{
            "^/api":""
        }
    }))
    app.use(proxy("/rpcsearchnew",{
        target:"http://t1.restful.5lux.com.cn",
        changeOrigin:true,
        
    }))

}



