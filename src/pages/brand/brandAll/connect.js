import {changeAction_Brands_id} from '../../../action/actionCreator';

export const mapStateToProps=(state)=>({
    id:state.brands.id,
})

export const mapDispatchToProps=(dispatch)=>({
    clickHandleId(id){
        dispatch(changeAction_Brands_id(id));
    }
})