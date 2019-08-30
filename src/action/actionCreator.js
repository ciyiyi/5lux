// eslint-disable-next-line no-unused-vars
import {createAction} from "redux-actions"
import {fashion_detial} from "@api/fashion"


export const toDetailAction=(val,id)=>({
    type:"TODETAIL_PRODUCTION",
    value:val,
    id:id
})
export const toDetailAsyncAction=(id)=>{
    // console.log(id)
    return async (dispatch)=>{
        let detialData=await fashion_detial(id); 
        dispatch(toDetailAction(detialData,id));
    }
}

export const toCarouselAction=(val)=>({
    type:"Carousel"
})
// export const toDetailAsyncAction=(id)=>{
//     // console.log(id)
//     return async (dispatch)=>{
//         // let detialData=await fashion_detial(id); 
//         dispatch(toDetailAction(id))
//     }
// }

export const toShowAction=(value,flag)=>({
    type:"TOSHOWACTION",
    value:value,
    flag:flag
})

export const changeShow1Action=(value)=>({
    type:"CHANGE_SHOW1"
})
export const changeAsyncShow1Action=()=>{
    return (dispatch)=>{
         
        dispatch(changeShow1Action());
    }
}

export const toShowFilterListAction=(id)=>({
    type:"SHOWFILTER_LIST",
    id
})

import {changeType_id,ChangeBrandsId} from './actionType';
export const changeAction_id=(id)=>({
    type:changeType_id,
    id,
})


export const changeAction_Brands_id=(id)=>({
    type:ChangeBrandsId,
    id,
})



