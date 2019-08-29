/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import {BannerCom} from "./styled"
import {fashion_banner} from "@api/fashion"
export class fashionBanner extends Component {
    constructor(){
        super()
        this.state={
            data:[],
            img:''
        }
    }

    async componentDidMount(){
        let data=await fashion_banner();

    }

    render() {
      
            return (
            <BannerCom>
                <div className="con">
                    <div>
                        <img className="banner" src="http://img550.5lux.com.cn/2017/05/08/pq/149417657344_640x480.jpg" />
                    </div>

                    <div className="banner_bottom">
                        <div>
                            <img className="logo" src="http://img550.5lux.com.cn/2017/05/08/mn/149417775878_360x70.png" />
                        </div>
                        <p>REVOLVE Clothing 是美国著名的时尚潮流购物网站。REVOLVE 完美地汇集了全世界最令人艳羡的男女高档品牌服装、鞋和饰品。REVOLVE Clothing提供最优质的网上购物体验和完美的客户服务。 REVOLVE致力于引领时尚和商务潮流，不断进取，着眼未来，以赢得业界和消费者的尊重。REVOLVE顺应和体现了客户的需求和品位 。</p>
                        <div>
                            <span>关注</span>
                        </div>
                    </div>
                </div>
                <div className="con">
                    <img className="banner" src="http://img550.5lux.com.cn/2017/05/08/vw/149417661572_640x480.jpg" alt=""/>
                </div>
                
            </BannerCom>
        );
    }
}

export default fashionBanner;
