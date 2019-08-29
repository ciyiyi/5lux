import {changeAction_id} from '../../action/actionCreator';

export const mapStateToProps=(state)=>({
    id:state.classify.id,
})

export const mapDispatchToProps=(dispatch)=>({
    handleClick(id){
        dispatch(changeAction_id(id));
    }
})