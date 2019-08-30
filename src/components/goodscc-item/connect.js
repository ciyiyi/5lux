// goodsccId:state.fashion.goodsccId
import {toDetailAsyncAction} from "../../action/actionCreator"
export const mapStateToProps = (state)=>({
    goodsccId:state.fashion.goodsccId

})


export const mapDispatchToProps = (dispatch)=>({
    handleToDetial(productId){
        dispatch(toDetailAsyncAction(productId))
    }
})