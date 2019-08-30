import React, { Component } from 'react'
import { ResultWrapper } from "./styled"

import BScrollComponent from "@common/bscroll"
import {connect} from "react-redux"
import TopNav from "@components/topNav"
import ResultHeader from "@components/resultHeader"
import {mapStateToProps,mapDispatchProps} from "./connect"
import {withRouter} from "react-router-dom"
import {resultList} from "@api/week"
 class Result extends Component {
    state={
        ResultArr:[]
        }
    render() {
        let {ResultArr}=this.state
        console.log(ResultArr)
        return (
            <BScrollComponent>
                <ResultWrapper>
                    <ResultHeader/>
                    <TopNav/>
                    <ul className="result-center">
                    {
                    ResultArr.map((item,index)=>(
                    <li className="result-center-li" key={index}>
                    <img src={item.big_thumb} className="result-center-img"/>
                    <span className="result-center-span1">{item.brand_en_name}</span><br/>
                    <span className="result-center-span2">{item.brand_cnname}</span>
                    <div className="result-center-li-div">
                    <span className="result-center-li-div-span1">￥{item.market_price}</span>
                    <span className="result-center-li-div-span2">￥{item.product_price}</span>
                    </div>
                    </li>
                    ))
                    }
                    </ul>
                </ResultWrapper>
            </BScrollComponent>
        )
    }
    componentDidMount(){
       

        this.handleResult();
        }
        async handleResult(){
        let id=this.props.location.pathname.split("/").splice(2).join("");
       
        let data=await resultList(id);
        
        this.setState({
        ResultArr:data.data.goods_list
        })
        }
        

}



export default withRouter(connect(mapStateToProps,mapDispatchProps)(Result))