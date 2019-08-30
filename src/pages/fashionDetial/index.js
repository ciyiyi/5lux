/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-whitespace-before-property */
import React, { Component } from 'react';
import { detialWrapper } from "./styled";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./connect";
import { Carousel, WingBlank } from 'antd-mobile';
import "./index.css"
import { carousel_api,goods_params } from "@api/fashion"
import Bottom from "../../components/bottom"
export class FashionDetial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      data: [],
      imgHeight: 176,
      installment_info: [],
      carousel:[]
    }
   
  }
  async componentDidMount() {

    // console.log(this.props.goods_gallery, "已经进入详情页")
    // console.log(this.props.a, "测试");
    // console.log(this.props.installment_info, "installment_info");
    let carouselData=await carousel_api();
    this.setState({
      id: this.props.productId,
      data: this.props.goods_gallery,
      installment_info:this.props.installment_info,
      carousel:carouselData.data.banner_adv_info,
     
    }); 
  }

  render() {
    let { carousel, data} = this.state;
    return (
      <detialWrapper>
        <WingBlank>
          <Carousel
            autoplay={false}
            infinite
          >
            {this.state.data.map((item, index) => (
              <a
                key={index}
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={item.filepath}
                  alt=""
                  style={{ verticalAlign: 'top', height: "7.5rem", width: "4.44rem", margin: '0 auto' }}
                  onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}

          </Carousel>
        </WingBlank>


        <div className="bigCon">
          <div className="detialCon1">
            <div>
              <div>￥
                      <span className="nowPrice">1140</span>
                <span className="oldPrice"><del>￥1938</del></span>
              </div>
              <div className="redPrice">红卡价></div>
            </div>
            <div>
              <div>税费说明</div>
              <span></span>
            </div>
          </div>
          <div className="detialCon2">
            <div>一件式泳衣</div>
            <div>
              <span className="logo"></span>
              <span>6-15个工作日</span>
              <span>REVOLVE集合店发货纽约直发</span>
            </div>
            <div className="detail_dog"></div>
          </div>
       


        <div className="premote">
          <div className="premote_top">
            <div>分期付款</div>
            <div>分期12期，每期仅需￥102.13</div>
            <div className="dot1"></div>
          </div>
          <div className="premote-bottom">
            <div className="you">
              <div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeBAMAAADJHrORAAAAKlBMVEUAAADMsn/Msn/Msn/Msn/Msn/Msn/Msn/Msn/Msn/Msn/Msn/Msn/Msn+da3HYAAAADXRSTlMAEO8wz3CvQGBQj5+A68yFqAAAANdJREFUGNNjwAYYw3TvXkoVgHP33gWB2zCBSXevhZeX5t7VhHC57t4ByTCevbsAzF97xQBMM/veAlGcdx2h+kTuTgCSQlcEYOb6KgLJvZehXGYD29tAwbsHoHwjZZ67AgysQAyR1r3JeDeAge0aTPpuA0NuAgPTVZj0DQaGWAUG3usIaYbaCyA+VwNEGsaPvQGWhvNF7jaApMF8kHmMvjfA0iDzQPYBFUCkgfaB3ANUAJEGugfiXhGINNC9EP8wTgDzbW+j+xc9PDDDCzM8EeGNHh8Y8YUJAOlbYxw8HVFJAAAAAElFTkSuQmCC" />正品保证</div>
              <div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeBAMAAADJHrORAAAAJ1BMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmahP7BAAAADHRSTlMAEO+vcEDPn4+AUDA/Te/wAAAAo0lEQVQY02PABhiddc4cMhGAc2vOgMBxmMCiM4ddQ0NszmhBuBxnToJkGOecaQDze45tANPcOSdAFNeZRKg+sTMLgKTQMQGYuTmKQLLmNNzePceBgmcmwPmcZwQYWIAYAkByDgzMh5EcamPAwHQEie+jwMBzFIkfcwDE5zkDAQew8NHVo5uHbh+6e9Ddi+YfdP+ihwdmeGGGJyK80eMDI74wAQCveVUB0GebEwAAAABJRU5ErkJggg==" />不包关税</div>
              <div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeBAMAAADJHrORAAAAKlBMVEUAAADMsn/Msn/Msn/Msn/Msn/Msn/Msn/Msn/Msn/Msn/Msn/Msn/Msn+da3HYAAAADXRSTlMAEO8wz3CvQGBQj5+A68yFqAAAANdJREFUGNNjwAYYw3TvXkoVgHP33gWB2zCBSXevhZeX5t7VhHC57t4ByTCevbsAzF97xQBMM/veAlGcdx2h+kTuTgCSQlcEYOb6KgLJvZehXGYD29tAwbsHoHwjZZ67AgysQAyR1r3JeDeAge0aTPpuA0NuAgPTVZj0DQaGWAUG3usIaYbaCyA+VwNEGsaPvQGWhvNF7jaApMF8kHmMvjfA0iDzQPYBFUCkgfaB3ANUAJEGugfiXhGINNC9EP8wTgDzbW+j+xc9PDDDCzM8EeGNHh8Y8YUJAOlbYxw8HVFJAAAAAElFTkSuQmCC" />包邮</div>
            </div>
            <div className="mg">
              <div>有质量问题支持7天退货</div>
              <div>不支持发票</div>
            </div>
            <div className="dot1 dot2"></div>
            <div className="detail_dog"></div>
          </div>
        </div>
                
          <div className="params">
            <div className="params_div"><p>产品参数</p><p>></p></div>
            <div className="params_div"><p>选择：颜色/参数</p><p>></p></div>
            <div className="detail_dog"></div>
          </div>
        <WingBlank>
            <Carousel
              autoplay={true}
              infinite={true}
              style={{ width: "100%", marginLeft: 0, marginRight: 0 ,marginBottom:'0.3rem',marginTop:'0.3rem'}}
            >
              {carousel.map((item, index) => (
                <li
                  key={index}
                  href={item.slide_thumb}
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={item.silde_original}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}

                  />
                </li>
              ))}
            </Carousel>
          </WingBlank>
          <div className="detail_dog"></div>
            //详情
            <ul>
                {
                  data.map((item,index)=>(
                    <li>
                      <img src={item.filepath}/>
                    </li>
                  ))
                }    
            </ul>
          </div>
          <Bottom></Bottom>
      </detialWrapper>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FashionDetial)
