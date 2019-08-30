import {changeType_id} from '../../action/actionType';

const defaultState = {
    id:14,
}

export default(state=defaultState,action)=>{
    let changeTitle=Object.assign({},state);
         
    switch(action.type){
        case changeType_id:
            changeTitle.id=action.id;
            return changeTitle;
    }
    return state;
}
