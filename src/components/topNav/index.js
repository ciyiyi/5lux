import React, { Component } from 'react'
import { TopNavWrapper } from "./styled"
import {topApi} from "@api/week"
export default class TopNav extends Component {
    state = {
        type: "智能排序",
        flag: false
    }
    render() {
        let { type, flag } = this.state
        return (
            <TopNavWrapper flag={flag}>
                <ul className="topNav-ul">
                    <li className="topNav-ul-li1">全部</li>
                    <li className="topNav-ul-li2" onClick={this.handleToggle}>{type}</li>

                </ul>
                <div className="toggleType" >
                    <div className="toggleType-div">智能排序</div>
                    <div className="toggleType-div">销量最优</div>
                    <div className="toggleType-div">价格最低</div>
                    <div className="toggleType-div">价格最高</div>
                </div>
            </TopNavWrapper>
        )
    }
    handleToggle = () => {
        this.setState({
            flag: !this.state.flag
        })

    }

    async componentDidMount(){
        let data=await topApi();
        console.log(data)
    }
}
