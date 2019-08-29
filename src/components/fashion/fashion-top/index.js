import React, { Component } from 'react';
import {TopWrapper} from "./styled"
import {Link} from "react-router-dom"
class FashionTop extends Component {
    render() {
        return (
            <TopWrapper>
                <ul className="top">
                <li>
                    <span className="span_img"></span>
                </li>
                <li>商品首页</li>
                <Link to="/goodscc">商品</Link>
                <li>到店</li>
                </ul>
            </TopWrapper>
        );
    }
}

export default FashionTop;
