import React, { Component } from 'react'
import {ArrivalRightWrapper} from "./styled"
import Header from "../header"
import {arrival_right} from "@api/week"
import BScrollComponent from "@common/bscroll"
export default class ArrivalRight extends Component {
    state={
        arrivalRight:[],
        flag:true
    }
    render() {
        let {arrivalRight}=this.state;
        return (
            <BScrollComponent>
            <ArrivalRightWrapper>
           <Header/>
            <div>
            {
                arrivalRight.map((item,index)=>(
                <div className="StoreItem" key={index}>
                    <div className="StoreItem-img">
                       <img src={item.store_thumb_0}/>
                    </div>
                 
                    <div className="Store_title">{item.title}</div>
                    <div className="Store_tuijian">
                        <span className="Store_tui">新店</span>
                        <span className="Store_no">{item.introduction}</span>
                    </div>
                    <div className="Store_bottom">
                        <span className="Store_tu"></span>
                        <span className="Store_shang">{item.province_name}</span>
                        <span className="Store_men">门店详情</span>
                    </div>
                   
                </div>
                ))
            }
            </div> 
            </ArrivalRightWrapper>
            </BScrollComponent>
        )
    }
    componentDidMount() {
        this.handleArrivalRight();
  
    }

    async handleArrivalRight() {
        let data = await arrival_right();
        this.setState({

            arrivalRight: data.data.store_list
        })

    }


   
}
