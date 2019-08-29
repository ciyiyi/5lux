import {ChangeBrandsId} from '../../action/actionType';


const defaultState={
    id:2101,
}

export  default(state=defaultState,action)=>{
    let brandGoods=Object.assign({},state);
    switch(action.type){
        case ChangeBrandsId:
                brandGoods.id=action.id;
                return ChangeBrandsId;
    }
    return state;
}