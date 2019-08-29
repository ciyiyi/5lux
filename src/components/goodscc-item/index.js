import React, { Component } from 'react';
import {ItemWrapper} from "./styled"
import {goods_api} from "@api/goodscc"
import axios from 'axios'
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
        console.log(data.data.data.goods_list);
        this.setState({
            list:data.data.data.goods_list,
            
        })
      });
        
        this.setState({
            all_cate:data.data.all_cate
        })
///////cata_goods_list



    }
    render() {
        let {list} =this.state;
        return (
            <ItemWrapper>
                <ul>
                   {
                       list.map((item,index)=>{
                           return (
                            <li>
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
                        </li>
                           )
                       })
                   }
                </ul>
            </ItemWrapper>
        );
    }
}

export default GoodsItemcc;
