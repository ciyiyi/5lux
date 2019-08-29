import {HyperMarket,Brand,Classify,Title,Goods} from '@pages';

export const tabBarRoute=[
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
]

export const routeConfig=tabBarRoute.concat(noTabBarRoute);