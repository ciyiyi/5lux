import React, { Component } from 'react';
import HeaderWrapper from "./styled"
class Header extends Component {
   
    render() {
        return (
            <HeaderWrapper>
               <div className="search-text">
                   <div className="search-logo"></div>
                   <div className="search-logo-s"></div>
               </div>
               <div className="shop_cart">
                   <div className="totalNum">1</div>
               </div>
            </HeaderWrapper>
        );
    }
}

export default Header;
