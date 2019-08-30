import React, { Component } from 'react';
import {ClassifyGoods} from '@api/classify';
import {RightStyle} from './styled';
import {connect} from 'react-redux';
import {mapStateToProps,mapDispatchToProps} from '../connect';


class Right extends Component {
    state={
        list:[],
    }
    render() {
        let {list}=this.state;
        return (
            <RightStyle>{
                list.map((item,index)=>(
                    <div>
                        <p key={index}>
                            <span></span>
                            <span>{item.cata_name}</span>
                            <span></span>
                        </p>
                        <div>{
                            item.child_list.map((itemS,indexS)=>(
                                <div>
                                    <img src={itemS.cata_thumb}/>
                                    <p>{itemS.cata_name}</p>
                                </div>
        
                            ))
                        }</div>
                    </div>
                    
                    
                ))
            }

           </RightStyle>
        );
    }
    componentDidMount(){
        let {id}=this.props;
        console.log(id,111);
        this.handleGetDataGoods(id);
    }
componentWillUpdate(newProps,newState){
    if(newState.list !==this.state.list){
        let {id}=this.props;
        this.handleGetDataGoods(id);
    }
    
}

         async handleGetDataGoods(id){
        let data=await ClassifyGoods(id);
        this.setState({
            list:data.data,
        })
    }

}

export default connect (mapStateToProps,mapDispatchToProps)(Right);
