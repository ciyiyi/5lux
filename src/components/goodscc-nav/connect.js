import {toShowAction} from "../../action/actionCreator"
export const mapStateToProps = (state)=>({
    
})


export const mapDispatchToProps = (dispatch)=>({
    handleToShowType(flag){
        let textconent=this.refs.li.innerHTML;
       console.log(this.refs.li.innerHTML);
       dispatch(toShowAction(textconent,flag))
    }
})