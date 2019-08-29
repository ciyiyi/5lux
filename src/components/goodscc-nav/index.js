/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import {GoodsNav} from "./styled"
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./connect";

export class GoodsccNav extends Component {
    constructor(){
        super();
        this.state={

        }
    }
    render() {
        // console.log(this.props.handleToShowType)
        return (
            <GoodsNav>
                <ul>
                    <li className="one">
                    <div>综合</div> 
                    <div><img className="index" src="./img/down@2x.png"/></div></li>
                    <li onClick={this.props.handleToShowType.bind(this,1)} ref='li'>分类</li>
                    <li>筛选<img className="filter" src="http://m.5lux.com/static/img/cateNewSelect@2x.png"/></li>
                </ul>
            </GoodsNav>
        );
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(GoodsccNav)
