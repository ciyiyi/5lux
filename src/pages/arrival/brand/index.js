import React, { Component } from 'react'
import { BrandWrapper } from "./styled"
import {brand_list} from "@api/week"

import { NavLink, Redirect } from "react-router-dom"
import BScrollComponent from "@common/bscroll"
export default class City extends Component {
    state={
        brandListArr:[],
        
    }
    render() {
        let {brandListArr}=this.state;
        return (
            <BScrollComponent>

            <BrandWrapper>
                <div>
                    <NavLink to="../storelist" className="brand-back">返回</NavLink>
                    <div className="all-brand">所有品牌</div>
                </div>
               
                <div className="brand-list-all">
                {
                    brandListArr.map((item,index)=>(
                    <div className="brand-list" key={index}>
                        <div className="brand-list1">{item.first_name}</div>
                        <ul>
                           {
                            item.child.map((ite,ind)=>(
                                <li className="brand-list2" key={ind}>{ite.brand_name}</li>
                               ))
                                   
                           }
                        </ul>
                    </div>
                    ))
                }
                    
                </div>

            </BrandWrapper>
            </BScrollComponent>
        )
    }
    componentDidMount() {
        this.handleArrivalBrand();
  
  
    }

    async handleArrivalBrand() {

        let data = await brand_list();
     
        this.setState({

            brandListArr: data.data.list
        })

    }
  
}
