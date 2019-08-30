
//做路由懒加载
import Loadable from 'react-loadable'
import Loading from "@common/loading"

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
const Arrival=Loadable({
    loader:()=>import("./arrival"),
    loading:Loading

})
const StoreList=Loadable({
    loader:()=>import("./arrival/storelist"),
    loading:Loading

})
const ArrivalRight=Loadable({
    loader:()=>import("./arrival/arrival-right"),
    loading:Loading

})
const BrandList=Loadable({
    loader:()=>import("./arrival/brand"),
    loading:Loading

})

const Service=Loadable({
    loader:()=>import("./service"),
    loading:Loading

})

const Goods=Loadable({
    loader:()=>import ("./bandGoods"),
    loading:Loading
})



const Mine=Loadable({
    loader:()=>import("./mine"),
    loading:Loading

})

const Search=Loadable({
    loader:()=>import("./search"),
    loading:Loading

})
const Result=Loadable({
    loader:()=>import("./result"),

    loading:Loading

})

export {

    Home,
    Fashion,
    FashionDetial,
    Goodscc,

    HyperMarket,
    Brand,
    Classify,
    Title,
    Goods,
    Arrival,
   
    Service,
    Mine,
    Login,
    Search,
    StoreList,
    ArrivalRight,
    BrandList,
    Result
}

  
    


