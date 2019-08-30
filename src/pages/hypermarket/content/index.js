import React, { Component } from 'react';
import {ContentStyle} from './style';
import {hyperMarketConent} from '@api/hyperMarket';

import BScrollComponent from "@common/bscroll";

class Content extends Component {
    state={
        list:[],
        page:1,
    };
    render() {
        let {list}=this.state;
        return (
            <BScrollComponent ref="bscroll">
                <ContentStyle>
                    <div className="module_top">
                    <p>大家都在卖</p>
                        <p><span></span>
                        <span>HOT&nbsp;SALES</span>
                        <span></span></p>

                    </div>
                    <div className="shop">
                    {
                        list.map((item,index)=>(
                            <div key={index}>
                            <img src={item.big_thumb}/>
                            <p>{item.brand_name}</p>
                            <p>{item.product_price}</p>
                        </div>

                        ))
                    
                    }
                    </div>
                </ContentStyle>

            </BScrollComponent>
        );
    }
/*     componentDidMount(){
        this.handleContentData();
    }
    async handleContentData(){
        let data=await hyperMarketConent();
        this.setState({
            list:data.data.theirchose
        })
        console.log(this.state.list);
    }
 */ 

     componentWillUpdate(){
        this.refs.bscroll.handleRestpullingUp();
    }
    componentDidMount(){
        this.handleWeekGetData();
        this.refs.bscroll.handlepullingUp(()=>{
            this.handleWeekGetData();
        })
    }
    async handleWeekGetData(){
        let {page}=this.state;
        let data=await hyperMarketConent(page);
        if(data){
            this.setState({
                list:[...this.state.list,...data.data.theirchose],
                page:++this.state.page,
            })
        }
    }
}

export default Content;