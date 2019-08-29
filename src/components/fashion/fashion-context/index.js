/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import {NavLink} from "react-router-dom"
import {ContextWrapper} from "./styled"
import {fashion_banner} from "@api/fashion"
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./connect";


class FashionContext extends Component {
    constructor(){
      super()
      this.state={
        fashionList:[],

      }
    }
    
    async componentDidMount(){
        let data=await fashion_banner();
        this.setState({
          fashionList:data.data.new_goods
        })
    }

    render() {
      let {fashionList}=this.state;
      console.log(this.props,"方法")
        return (
            <ContextWrapper>
               <div className="pro_title"></div> 
               
               <ul className="fashion_list">
               {
                fashionList.map((item,index)=>(
                  <li key={index} onClick={this.props.handleToDetial.bind(this,item.product_id)}>
                  <NavLink to={"/fashionDetial/"+item.product_id}>
                  <div>
                  <img src={item.big_thumb} />
                  </div>
               <div  className="sotre_list_con">
                <p></p>
                <p className="colorP">{item.sku_title}</p>
                <p>
                    <span>￥{item.market_price}</span>
                    <del>￥5434</del>
                </p>
               </div>
                  </NavLink>
                  </li>
                ))
              }
              </ul>
            </ContextWrapper>
        );
    }
   
}
export default connect(mapStateToProps,mapDispatchToProps)(FashionContext)
