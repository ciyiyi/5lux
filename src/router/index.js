import {Home,Login,Fashion,FashionDetial,Goodscc} from "@pages"

export const tabBarRoute=[
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true,
        },
        name:"首页",


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
