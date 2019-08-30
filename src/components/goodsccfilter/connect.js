// import {toDetailAsyncAction} from "../../../action/actionCreator"
// export const mapStateToProps = (state)=>({
//     productId:state.fashion.productId,
//     goods_gallery:state.fashion.goods_gallery
// })


// export const mapDispatchToProps = (dispatch)=>({
//     handleToDetial(productId){
//         dispatch(toDetailAsyncAction(productId))
//     }
// })

import {toShowFilterListAction} from "../../action/actionCreator"
export const mapStateToProps = (state)=>({
    fashionType:state.fashion.fashionType,
    goodsccId:state.fashion.goodsccId,
    show1:state.fashion.show1,
    
})


export const mapDispatchToProps = (dispatch)=>({
    handleShowDetial(params){
        let listId=Number(params.listItem)+1;
        dispatch(toShowFilterListAction(listId))
    }
})