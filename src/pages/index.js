import Loadable from 'react-loadable';

import Loading from "@common/loading"

const Home=Loadable({
    loader:()=>import("./home"),
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
const HyperMarket=Loadable({
    loader:()=>import("./hypermarket"),
    loading:Loading

})
const Service=Loadable({
    loader:()=>import("./service"),
    loading:Loading

})


const Mine=Loadable({
    loader:()=>import("./mine"),
    loading:Loading

})
const Login=Loadable({
    loader:()=>import("./login"),
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
    Arrival,
    HyperMarket,
    Service,
    Mine,
    Login,
    Search,
    StoreList,
    ArrivalRight,
    BrandList,
    Result
}