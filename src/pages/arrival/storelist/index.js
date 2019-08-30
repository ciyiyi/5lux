import React, { Component } from 'react'
import { StoreListWrapper } from "./styled"
import { setState } from 'expect/build/jestMatchersObject'
import Header from "../header"
import { store_list } from "@api/week"
import BScrollComponent from "@common/bscroll"
export default class StoreList extends Component {
    state = {
        storeGoods: []
    }
    render() {
        let { storeGoods } = this.state;

        return (
            <BScrollComponent ref="bscroll">
                <StoreListWrapper>
                    <Header/>
                    <div>
                        {
                            storeGoods.map((item, index) => (
                                <div className="StoreItem" key={index}>
                                    <div className="StoreItem-img">
                                        <img src={item.store_thumb} />
                                    </div>

                                    <div className="Store_title">{item.title}</div>
                                    <div className="Store_tuijian">
                                        <span className="Store_tui">推荐</span>
                                        <span className="Store_no">{item.introduction}</span>
                                    </div>
                                    <div className="Store_bottom">
                                        <span className="Store_tu"></span>
                                        <span className="Store_shang">{item.province_name}</span>
                                        <span className="Store_men">门店详情</span>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </StoreListWrapper>
            </BScrollComponent>
        )
    }
    async componentDidMount() {
        let data = await store_list();
        this.setState({
            storeGoods: data.data.store_list
        })

    }

}






