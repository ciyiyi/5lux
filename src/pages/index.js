import Loadable from 'react-loadable';
import Loading from '@common/loading';

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
    HyperMarket,
    Brand,
    Classify,
    Title,
    Goods,
}