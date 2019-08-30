import {changeShow1Action} from "../../action/actionCreator"
export const mapStateToProps = (state)=>({
   show1:state.fashion.show1,
   goodsccId:state.fashion.goodsccId
})


export const mapDispatchToProps = (dispatch)=>({
   handleClick(e){
      e.stopPropagation();
      if(e.srcElement.className!=="goodsTypeItem" && e.srcElement.className!=="showItem" && e.srcElement.className !==""){
         alert(12)
          dispatch(changeShow1Action)
      }
  }
})