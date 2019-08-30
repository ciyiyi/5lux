//做路由懒加载


 const Home=Loadable({
     loader:()=>import("./home"),
     loading:Loading
 })
 const Login=Loadable({
    loader:()=>import("./login"),
    loading:Loading
})
const Fashion=Loadable({
    loader:()=>import("./fashion"),
    loading:Loading
})
const FashionDetial=Loadable({
    loader:()=>import("./fashionDetial"),
    loading:Loading
})
const Goodscc=Loadable({
    loader:()=>import("./goodscc"),
    loading:Loading
})

const HyperMarket=Loadable({
    loader:()=>import ("./hypermarket"),
    loading:Loading
})
const Brand=Loadable({
    loader:()=>import ("./brand/header"),
    loading:Loading
})
const Classify=Loadable({
    loader:()=>import ("./classify"),
    loading:Loading
})

const Title=Loadable({
    loader:()=>import ("./brand"),
    loading:Loading

})

const Goods=Loadable({
    loader:()=>import ("./bandGoods"),
    loading:Loading

})

export {
    Home,Login,
    Fashion,
    FashionDetial,
    Goodscc,

    HyperMarket,
    Brand,
    Classify,
    Title,
    Goods,
}
