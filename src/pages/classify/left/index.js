import React, { Component } from 'react';
import {ClassifyTitle} from '@api/classify';
import {TitleStyle} from './style';
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "../connect";

class Left extends Component {
    state={
        activeLi:0,
        list:[],
    }
    render() {
        let {list,activeLi}=this.state;
        return (
            <TitleStyle>
                <ul>
                     {
                        list.map((item,index)=>(
                            <li key={index} className={activeLi===index?'now':''} onClick={this.handleColor.bind(this,index)} onClick={this.props.handleClick.bind(this,item.id)} >{item.cata_name}
                            </li>
                        ))
                    }
                 </ul>
            </TitleStyle>
        );
    }
    componentDidMount(){
        this.getClassify();
    }
    async getClassify(){
        let data=await ClassifyTitle();
        console.log(data);
        this.setState({
            list:data.data
        })
    }
    handleColor(index){
        this.setState({
            activeLi:index
        })
    }
 }

export default connect(mapStateToProps,mapDispatchToProps)(Left);