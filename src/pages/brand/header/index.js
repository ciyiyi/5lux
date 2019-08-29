import React, { Component } from 'react';
import {HeaderStyle} from './style';
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <HeaderStyle>
                    <a></a>
                    <Link to="/brand/title">品牌</Link>
                    <a>旗舰店</a>
                    <Link to="/brand/brandtype">分类</Link>
            </HeaderStyle>
        );
    }
}

export default Header;