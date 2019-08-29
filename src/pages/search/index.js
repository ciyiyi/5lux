import React, { Component } from 'react'
import { SearchWrapper } from "./styled"

import { hot_search } from "@api/week"
import BScrollComponent from "@common/bscroll"
import { NavLink, Redirect } from "react-router-dom"
import SearchTop from "./searchTop"
export default class Search extends Component {
    state = {
        hotSearch: [],
        tuijian: [],
        id: []
    }
    render() {
        let { hotSearch, tuijian, id } = this.state;
        return (
            <BScrollComponent>
                <SearchWrapper>
                    <SearchTop />
                    <div className="search-center">
                        <div className="search-hot">
                            <h3>热门搜索</h3>
                            <ul className="search-hot-ul">
                                {
                                    hotSearch.map((item, index) => (
                                        <li className="search-hot-li" key={index}>
                                            <NavLink to={"/result/" + id[index]} >{item.keyword}</NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="search-reslut">
                            <h4>--为您推荐--</h4>
                            <div className="search-result-d">
                                {
                                    tuijian.map((children, inx) => (
                                        <div className="search-result-div" key={inx}>

                                            <img src={children.product_thumb} className="search-result-img" />
                                            <p className="search-result-p">{children.product_name}</p>
                                            <span className="search-result-span">￥{children.product_price}</span>

                                        </div>
                                    ))
                                }

                            </div>

                        </div>
                    </div>



                </SearchWrapper>
            </BScrollComponent>
        )
    }
    componentDidMount() {

        this.handleSearch();
        this.handleTuiJian();
    }

    async handleSearch() {

        let data = await hot_search();

        let id = [];
        for (var i = 0; i < data.data.hot_search.length; i++) {
            id.push(data.data.hot_search[i].uri.split("/").splice(5).join(""))
        }



        this.setState({
            id: id,
            hotSearch: data.data.hot_search
        })

    }
    async handleTuiJian() {
        let data = await hot_search();

        this.setState({
            tuijian: data.data.recommend_products
        })
    }


}

