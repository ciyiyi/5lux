import {toDetailAsyncAction} from "../../../action/actionCreator"
export const mapStateToProps = (state)=>({
    productId:state.fashion.productId,
    goods_gallery:state.fashion.goods_gallery
})


export const mapDispatchToProps = (dispatch)=>({
    handleToDetial(productId){
        dispatch(toDetailAsyncAction(productId))
    }
})