import {createAction} from "redux-actions"
import {hot_search} from "@api/week"
// export const updateCityId=createAction("UPDATE_CITYID",(val)=>val)

//同步的action
export const goodsTypesAction=createAction("GOODS_TYPES",(val)=>val);
//异步的action
export const goodsTypesAsyncAction=()=>{
    return async (dispatch)=>{
        let data=await hot_search();
        dispatch(goodsTypesAction(data))
    }
}


//同步的action
export const resultListAction=createAction("RESULT_LIST",(val)=>val);

//异步的action
export const resultListAsyncAction=()=>{
    return async ()=>{
        
    }
}




