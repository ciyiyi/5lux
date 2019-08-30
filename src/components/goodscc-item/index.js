import React, { Component } from 'react';
import {ItemWrapper} from "./styled"
import {goods_api} from "@api/goodscc"
import axios from 'axios'
import {cata_goods_list} from "../../api/goodscc"
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./connect";
import {Link} from "react-router-dom"
class GoodsItemcc extends Component {
    constructor(){
        super();
        this.state={
            list:[1,2,3],
            all_cate:[],
            all:[]
        }
    }
    async componentDidMount(){
        let data=await goods_api();
        
        axios.get("https://apim.restful.5lux.com.cn/good/cata_goods_list?id=107&sort=&page=1&order=&is_self=&price=&location_id=&cata_id=&attr=").then(data => {
        console.log(data.data.data.goods_list,"找IDIDIDID");
        this.setState({
            list:data.data.data.goods_list,
            
        })
      });
        
        this.setState({
            all_cate:data.data.all_cate
        })
    }
    async componentWillReceiveProps(){
        let showData=await cata_goods_list(this.props.goodsccId);//等待传递过来的id值
        console.log(showData.data);
        this.setState({
            list:showData.data ? showData.data.goods_list:this.state.list
        })
    }
    render() {
        let {list} =this.state;
        return (
            <ItemWrapper>
                <ul>
                   {
                       list.map((item,index)=>{
                           return (
                            <li key={index} onClick={this.props.handleToDetial.bind(this,item.product_id)}>
                            <Link to={"/fashionDetial/"+item.product_id}>
                            <div>
                            <img src={item.big_thumb} className="big_thumbGoods"/>
                        </div>
                        <div className="goodsTags">
                            <p>{item.brand_enname}</p>
                            <p>{item.name}</p>
                            <p>
                                <span>￥{item.product_price}</span>
                                <del>￥{item.market_price}</del>
                            </p>
                        </div>
                            </Link>
                        </li>
                           )
                       })
                   }
                </ul>
            </ItemWrapper>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GoodsItemcc)
