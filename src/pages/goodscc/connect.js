import {changeShow1Action} from "../../action/actionCreator"
export const mapStateToProps = (state)=>({
   show1:state.fashion.show1,
   goodsccId:state.fashion.goodsccId
})


export const mapDispatchToProps = (dispatch)=>({
   handleClick(e){
     console.log(e.srcElement.className!=="goodsTypeItem")
      if(e.srcElement.className!=="goodsTypeItem"){
         //  alert(1)
          dispatch(changeShow1Action)
      }
  }
})