import React, { Component } from 'react'
import { ServiceCenterWrapper } from "./styled"

import { overseas, overseas_person } from "@api/week"
import { NavLink, Redirect } from "react-router-dom"

export default class ServiceCenter extends Component {
    state = {
        overSeasFirst: [],
        overSeasSecond: [],
        overSeasThird: [],
        overSeasFour: [],

    }
    render() {
        let { overSeasFirst, overSeasSecond, overSeasThird,overSeasFour } = this.state;
        return (

            <ServiceCenterWrapper>
                <div className="overSeasFirst">
                    <ul className="overSeasFirst-ul">
                        {
                            overSeasFirst.map((item, index) => (
                                <li className="overSeasFirst-li" key={index}>
                                    <img src={item.ad_code} className="overSeasFirst-img" />

                                </li>
                            ))
                        }
                    </ul>
                    <div className="overSeasFirst-div"></div>
                </div>
                <div className="overSeasSecond">
                    <div className="overSeasSecond-div">
                        <h2 className="overSeasSecond-div-h2">海外专家</h2>
                        <p className="overSeasSecond-div-p">查看更多></p>
                    </div>
                    <ul className="overSeasSecond-ul">
                        {
                            overSeasSecond.map((item2, index2) => (
                                <li className="overSeasSecond-li" key={index2}>
                                    <img src={item2.expert_home_img} className="overSeasSecond-img" />
                                    <span className="overSeasSecond-span">{item2.expert_summary}</span>
                                </li>
                            ))
                        }
                    </ul>

                </div>
                <div className="overSeasThird">
                    <div className="overSeasThird-div">
                        <h2 className="overSeasThird-div-h2">热门国家</h2>
                        <p className="overSeasThird-div-p">查看更多></p>
                    </div>
                    <ul className="overSeasThird-ul">
                        {
                            overSeasThird.map((item3, index3) => (
                                <li className="overSeasThird-li" key={index3}>
                                    <img src={item3.banner_m} className="overSeasThird-img" />
                                    <div className="overSeasThird-div2">
                                        <img src={item3.national_flag} className="overSeasThird-img2" />
                                        <span className="overSeasThird-span">{item3.name}</span>
                                    </div>

                                </li>
                            ))
                        }
                    </ul>

                </div>

                <div className="overSeasFour">
                    <div className="overSeasFour-div">
                        <h2 className="overSeasFour-div-h2">案例资讯
                           <br /> <span className="overSeasFour-div-span">ADVICE_CASE</span>
                        </h2>
                        <p className="overSeasFour-div-p">查看更多></p>
                    </div>
                    <ul className="overSeasFour-div-ul">
                        {
                            overSeasFour.map((item4, index4) => (
                                <li className="overSeasFour-div-li" key={index4}>
                                    <img src={item4.thumb} className="overSeasFour-div-li-img" />
                                    <h4 className="overSeasFour-div-h4">{item4.title}</h4>
                                    <div className="overSeasFour-div-div">
                                        <span className="overSeasFour-div-div-span">向往:{item4.liked}</span>
                                        <span className="overSeasFour-div-div-span">赞:{item4.views}</span>
                                    </div>
                                </li>
                            ))
                        }

                    </ul>

                </div>


            </ServiceCenterWrapper>

        )
    }
    componentDidMount() {
        this.handleFirst()
        this.handleSecond()
        this.handleThird()
        this.handleFour()

    }
    async handleFirst() {
        let data = await overseas();

        this.setState({
            overSeasFirst: data.data.button_list
        })

    }
    async handleSecond() {
        let data = await overseas_person();
        this.setState({
            overSeasSecond: data.data.oversea_expert
        })
    }

    async handleThird() {
        let data = await overseas_person();
        this.setState({
            overSeasThird: data.data.hot_country
        })

    }
    async handleFour() {
        let data = await overseas_person();
        console.log(data.data.success_case.sucess_case_article)
        this.setState({
            overSeasFour: data.data.success_case.sucess_case_article
        })

    }


}
