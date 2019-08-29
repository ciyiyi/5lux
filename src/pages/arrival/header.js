import React, { Component } from 'react'
import { HeaderWrapper } from "./commonStyled/styled"

import suosou from "@static/suosou.png"
import shaogouwu from "@static/shaogouwu.png"
import { NavLink, Redirect } from "react-router-dom"
export default class Header extends Component {
  
    render() {
      
        return (
            <HeaderWrapper>

                <div className="header-top">
                    <div className="header-top-span">

                        <NavLink className="header-top-span-l" to="/storelist" >推荐专柜</NavLink>
                        <NavLink to="/arrival-right" className="header-top-span-r">支持预约</NavLink>
                    </div>
                    <div className="header-top-right">
                        <NavLink to="/search" className="header-top-navlink"><img src={suosou} /></NavLink>
                        <img src={shaogouwu} />
                    </div>
                </div>
                <div className="header-nav">
                    <span className="header-nav-city" >所有城市 </span>
                    <NavLink className="header-nav-pinpai" to="/brand">所有品牌</NavLink>
                    <span className="header-nav-near">附近</span>
                </div>
            </HeaderWrapper>
        )
    }
}
