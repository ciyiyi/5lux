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
    type:"CHANGESHOW1"
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