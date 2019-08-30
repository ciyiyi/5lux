import {resultListAsyncAction} from "@actions/actionCreator"
export const mapStateToProps=(state)=>({

})





export const mapDispatchProps=(dispatch)=>({
    handleGetResultList(){
       
        dispatch(resultListAsyncAction())
    }
})