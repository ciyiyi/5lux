/* eslint-disable default-case */
import {handleActions} from "redux-actions";

const defaultState = {
    productId:"",
    detial:[],
    goods_gallery:[],//详情页商品展示的图片数组
    a:9,
    installment_info:[],
    fashionType:"",
    show1:true,
    goodsccId:''
}

export default handleActions({
    TODETAIL_PRODUCTION:(state,action)=>{
        
        let newState=JSON.parse(JSON.stringify(state));
        newState.productId=action.value;
       
        console.log(action.value.data,"fashion-store")
        newState.goods_gallery=action.value.data.goods_gallery;
        newState.installment_info=action.value.data.installment_info;
        newState.a=10000;
        return newState;
    },
   
    TOSHOWACTION:(state,action)=>{
        
        let newData=JSON.parse(JSON.stringify(state));
        switch(action.flag){
            case 1:
                    newData.fashionType=action.value;
                    newData.show1=false;
                    return newData;
        }
        return newData;
    },
    CHANGE_SHOW1:(state,action)=>{
        let newData1=JSON.parse(JSON.stringify(state));
        alert("改变");
        newData1.show1=true;
        return newData1;
    },
    SHOWFILTER_LIST:(state,action)=>{
        let newDataid=JSON.parse(JSON.stringify(state));
        newDataid.goodsccId=action.id;
        newDataid.show1=true;
        return newDataid;
    }
   
},defaultState) 