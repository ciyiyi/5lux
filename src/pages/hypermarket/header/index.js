import React, { Component } from 'react';
import { HeaderWrapper } from './style';
import { hyperMarket } from '@api/hyperMarket';
export default class Header extends Component {
    state = {
        titleList: []
    }
    render() {
        let { titleList } = this.state;
        return (
            <HeaderWrapper>
                <div className="search">
                    <div>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                        <div></div>
                    </div>
                    <div className="bag"></div>
                </div>


                <div className="title">
                    <div>
                        {
                            titleList.map((item, index) => (
                                <div key={index}>{item.cata_name}</div>
                            ))
                        }
                    </div>
                </div>


            </HeaderWrapper>
        )
    }
    componentDidMount() {
        this.handleWeekGetData();
    }
    async handleWeekGetData() {
        let data = await hyperMarket();
        this.setState({
            titleList: data.data,
        })
    }
}