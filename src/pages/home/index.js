import React, { Component } from 'react';
import Header from "@components/header";
import { Page } from "@common/commonStyled";
import { index_adv1, index_advert,article_list_ads } from "@api/home"
import {special_api} from "@api/special"
import { WeekWrapper } from "./styled";
import HomeNav from "@components/home_nav";
import BScrollComponent from "@common/bscroll";
import BannerCarousel from "@components/carousel"
import CenterNav from "@components/home_center_nav"

export class Home extends Component {
  constructor() {
     super()
      this.state = {
      adv1: [],
      flash: [],
      vip_member: [],
      article_list:[],
      page:0,
      goodsList:[],
      addNewList:[],
      flag:true
    }
    
  }
 

  async componentDidMount() {
    let data_adv1 = await index_adv1();
    let data_advert = await index_advert();
  
    this.handleHomeGetData();

    this.refs.bscroll.handlepullingUp(()=>{
      this.handleHomeGetData();
  })
    
    this.setState({
    
      adv1: data_adv1.data,
      goodsList:data_advert.data,
      flash: data_advert.data.new_register,
      vip_member: data_advert.data.vip_member,
      article_list:data_advert.data.article_list,
    });
    let aa=await special_api();
    console.log(aa,'post的数据')
   
  }
 
  async handleHomeGetData(){
    let {page}=this.state;
    let newList=await article_list_ads(page);
    this.setState({
      page:++this.state.page,
      addNewList:[...this.state.addNewList,...newList.data.ads_info]
    })
  }

  componentWillUpdate(){  
    this.refs.bscroll.handleRestpullingUp();
  }
  
  render() {
   
    let { adv1, flash, vip_member,article_list,addNewList} = this.state;
    return (
      
      <Page>
      <Header ref="homeNav"/>
      <HomeNav/>
      <BannerCarousel/>
      <BScrollComponent ref="bscroll">
      <WeekWrapper>
      <CenterNav></CenterNav>
      <ul className="adv1_warpper">
            {
              adv1.map((item, index) => (
                <li className="adv1_item" key={index}>
                  <a href={item.ad_link}>
                    <img src={item.ad_code} alt="" />
                  </a>
                </li>
              ))

            }
            {
              flash.map((item, index) => (
                <li key={index}>
                  <a href={item.ad_link}>
                    <img src={item.ad_code} alt="" />
                  </a>
                </li>
              ))
            }

          </ul>
          <ul className="vip">
            {
              vip_member.map((item, index) => (
                <li key={index} className="main_img">
                  <a href={item.ad_link}>
                    <img src={item.ad_code} />
                  </a>

                </li>
              ))
            }
             {/* 潮流尖货 */}
            <li onClick={this.toFashion.bind(this)}>
            <img src="http://img550.5lux.com.cn/2019/07/04/hi/156220549519_750x586.jpg" alt=""/>
            </li>

          </ul>
          <div>
            {
              article_list.map((item,index)=>(
                <div>
                  <div>
                  <div>
                    <img src={item.ads_info.ad_code} alt="" />
                  </div>
                  <div className="artical_wrapper">
                    <strong>{item.ads_info.ad_name}</strong>
                    <p>{item.ads_info.ad_title}</p>
                  </div>
              </div>
              <ul className="product_con">
                {/* 放横向轮播的 */}
                {
                  item.ads_info.product_info.map((item1,index1=1)=>(
                    <li className="product_item" key={index1}>
                     <div className="product_item_img">
                     <img src={item1.product_thumb} alt="" className="product_img"/>
                     </div>
                     <div className="product_item_text">
                       <p>{item1.brand_name}</p>
                       <p>{item1.ad_subtitle}</p>
                     </div>
                     <div className="dog"></div>
                    </li>
                  ))
                }
              </ul>
                </div>
              ))
             
            }
          </div>
          
          <div>
          {
           addNewList.map((item,index)=>(
              <div>
                <div>
                <div>
                  <img src={item.ad_code} alt="" />
                </div>
                <div className="artical_wrapper">
                  <strong>{item.ad_name}</strong>
                  <p>{item.ad_title}</p>
                </div>
            </div>
            <ul className="product_con">
              {/* 放横向轮播的 */}
              {
                item.product_info.map((item1,index1=1)=>(
                  <li className="product_item" key={index1}>
                   <div className="product_item_img">
                   <img src={item1.product_thumb} alt="" className="product_img"/>
                   </div>
                   <div className="product_item_text">
                     <p>{item1.brand_name}</p>
                     <p>{item1.ad_subtitle}</p>
                   </div>
                   <div className="dog"></div>
                  </li>
                ))
              }
            </ul>
              </div>
            ))
           
          }
          </div>
        </WeekWrapper>
        </BScrollComponent>
        </Page>
        
    );
  }
  toFashion(){
    this.props.history.push("/fashion")
  }
}

export default Home;
