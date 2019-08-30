
import {HyperMarket,
    Brand,
    Classify,
    Title,
    Goods,
    
    Fashion,
    FashionDetial,
    Goodscc,
    Home,
    Arrival,
    HyperMarket,
    Service,
    Mine,
    Login,
    Search,
    ArrivalRight,
    StoreList,
    BrandList,
    Result
} from '@pages';

export const tabBarRoute=[
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true,
        },
        name:"首页",
        icon:"\ue628"

    },
    {
        path:"/hypermarket",
        component:HyperMarket,
        meta:{
            flag:true
        },
        children:[],
        name:"商城",
        icon:"\ue610"
    },
    {
        path:"/brand",
        component:Brand,
        meta:{
            flag:true
        },
        name:"品牌",
        children:[
            {
                path:"/brand/brandtype",
                component:Classify,
                meta:{
                    flag:false,
                },
                name:"分类"
            },
            {
                path:"/brand/title",
                component:Title,
                meta:{
                    flag:false,
                },
                name:"列表"
            },
            {
                path:"/brand/detail/:id",
                component:Goods,
                meta:{
                    flag:false,
                },
                name:"品牌商品"
            },
            {
                path:"/service",
                component:Service,
                meta:{
                    flag:true
                },
                name:"海外服务",
                icon:"\ue601"
            
               },
               {
                path:"/arrival",
                component:Arrival,
                meta:{
                    flag:true
                },
                name:"到店",
                icon:"\ue613",
            
               },
               {
                path:"/mine",
                component:Mine,
                meta:{
                    flag:true,
                    //判断验证是否登录，若是需要登录就需要设置为true
                    //auth:true
                },
                name:"我的",
                icon:"\ue602"
            
               },

        ],
    }
]

export const noTabBarRoute=[
    {
        path:"/login",
        component:Login,
        meta:{

            flag:false,
        },
        name:"登录"
    },
    {
        path:"/fashion",
        component:Fashion,
        meta:{
            flag:false,
        },
        name:"潮流尖货",
        
    },
    {
        path:"/fashionDetial/:id",
        component:FashionDetial,
        meta:{
            flag:false,
        },
        name:"详情页"
    },
    {
        path:"/goodscc",
        component:Goodscc,
        meta:{
            flag:false,
        },
        name:"详情页"
    },
    {
        path:"/search",
        component:Search,
        meta:{
            flag:false
        },
        name:"搜索",
       },
       {
        path:"/result",
        component:Result,
        meta:{
            flag:false
        },
        name:"搜索详情",
       },
           {
        path:"/storelist",
        component:StoreList,
        meta:{
            flag:true,
            //判断验证是否登录，若是需要登录就需要设置为true
            //auth:true
        },
        name:"推荐专柜",
       },
       
       {
        path:"/arrival-right",
        component:ArrivalRight,
        meta:{
            flag:true,
            //判断验证是否登录，若是需要登录就需要设置为true
            //auth:true
        },
        name:"支持预约",
       },
       {
        path:"/brand",
        component:BrandList,
        meta:{
            flag:true,
            //判断验证是否登录，若是需要登录就需要设置为true
            //auth:true
        },
        name:"所有城市",
       },
   
]


export const routeConfig=tabBarRoute.concat(noTabBarRoute)

