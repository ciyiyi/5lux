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
export {
     Home,Login,Fashion,FashionDetial,Goodscc
 }