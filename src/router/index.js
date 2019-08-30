import {HyperMarket,Brand,Classify,Title,Goods} from '@pages';

export const tabBarRoute=[
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true,
        },
        name:"首页",

    },
    {
        path:"/hypermarket",
        component:HyperMarket,
        meta:{
            flag:true
        },
        children:[],
        name:"商城",
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
   
]
export const routeConfig=tabBarRoute.concat(noTabBarRoute);
