import React, { Component } from 'react'
import { SearchTopWrapper } from "./styled"
import { NavLink } from "react-router-dom"
import {search_api} from "@api/week"
export default class SearchTop extends Component {
    state={
        flag:false,
        SearchApi:[]
    }
    render() {
        let {flag,SearchApi}=this.state
        console.log(SearchApi)
        return (
            <SearchTopWrapper flag={flag}>
                <div className="search-top">
                    <input type="text" placeholder="Gucci包" className="search-top-input" />
                   <button className="search-top-button" onClick={this.handleSearchTop}>查询</button>
                    <NavLink className="search-top-del" to="/storelist">取消</NavLink>
                </div>
                <ul className="searcch-top-ul">
                    <li className="searcch-top-ul-li">
                        <p className="searcch-top-ul-li-p">111</p>
                        <span className="searcch-top-ul-li-span">约1111件商品</span>
                    </li>
                    <li className="searcch-top-ul-li">
                        <p className="searcch-top-ul-li-p">111</p>
                        <span className="searcch-top-ul-li-span">约1111件商品</span>
                    </li>
                    <li className="searcch-top-ul-li">
                        <p className="searcch-top-ul-li-p">111</p>
                        <span className="searcch-top-ul-li-span">约1111件商品</span>
                    </li>
                    <li className="searcch-top-ul-li">
                        <p className="searcch-top-ul-li-p">111</p>
                        <span className="searcch-top-ul-li-span">约1111件商品</span>
                    </li>
                    <li className="searcch-top-ul-li">
                        <p className="searcch-top-ul-li-p">111</p>
                        <span className="searcch-top-ul-li-span">约1111件商品</span>
                    </li>
                </ul>
            </SearchTopWrapper>
        )
    }
    handleSearchTop=()=>{
        this.setState({
            flag:!this.state.flag
        })
    }
    componentDidMount(){
        this.SearchHandle()
    }
    async SearchHandle(){
        let data=await search_api;
 
        this.setState({
            SearchApi:data
        })
    }
}
