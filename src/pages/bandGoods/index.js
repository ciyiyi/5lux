import React, { Component } from 'react';
import {GoodsStyle} from './styled';
import {Link} from 'react-router-dom';
import App from './classify';
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from './connect';
import {brandTitle,sortTitleOne,sortTitleTwo} from '@api/brand';


class BandGoods extends Component {
    constructor(){
        super();
        }
    state={
        sort:[
            {
                title:'综合',
                sort:'add_time',
            },
            {
                title:'销量优先',
                sort:'salesnum',
            },
            {
                title:'价格由低到高',
                sort:'product_price',
                order:'ASC',
            },
            {
                title:'价格由高到低',
                sort:'product_price',
                order:'DESC',
            },
            {
                title:'价格由高到低',
                sort:'product_price',
                order:'DESC',
            },
            {
                title:'新品优先',
                sort:'inputtime',
                order:'DESC',
            },
            {
                title:'人气优先',
                sort:'super_number',
                order:'DESC',
            },
        ],
        id:null,
        brandName:"",
        page:0,
        listClassify:[],
        between:[],
        goods_list:[],
        express_info:[],
        location_list:[],
        flag:false,
        flagF:false,
        pname:"",
    }
    render() {
        let {brandName,listClassify,between,goods_list,express_info,location_list,sort,flag,pname,flagF}=this.state;
        return (
            <GoodsStyle>
                <div>
                    <Link to="/brand"></Link>
                    <p>{brandName}</p>
                </div>


                <div>
                <p>{flagF?'red':'black'}</p>
                    <p onClick={this.handleChange.bind(this)}>综合
                        <img src="http://m.5lux.com/static/img/down@2x.png" alt=""/>
                    {/* 隐藏 综合*/} 
                <div className="hidden" style={{display:flag?'block':'none'}}>
                    {sort.map((item,index)=>(
                        <li key={index} onClick={this.handleClick.bind(this,index)}>{item.title}</li>
                    ))}
                </div>


                    </p>

                    
                    <p onClick={this.handleClickF.bind(this)}>分类{
                        flagF?
                        <App value1={listClassify} value2={pname} flag={flagF} handle={this.handle.bind(this)}>
                        </App>:''

                    }
                        
                    </p>
                    <p>筛选
                        <img src="http://m.5lux.com/static/img/cateNewSelect@2x.png" alt=""/>
                    </p>
                </div>


                <div>{
                    goods_list.map((item,index)=>(
                        <div>
                            <img src={item.big_thumb} alt=""/>
                            <p>{item.brand_en_name}</p>
                            <p>{item.brand_enname}</p>
                            <p>
                                <span>¥{item.product_price}</span>
                                <span>¥{item.market_price}</span>
                            </p>
                        </div>
                    ))
                }</div>





            </GoodsStyle>
        );
    }
 componentDidMount(){
                    let {id}=this.props.match.params;
                    console.log(id,111);
                    this.handleGetData(id);
                }

         async handleGetData(id){
        let data=await brandTitle(id);
        console.log(data);
        this.setState({
            id:data.data.brand_id,
            brandName:data.data.brand_name,    
            listClassify:data.data.all_cate[0].children_name,
            pname:data.data.all_cate[0].pname,
            between:data.data.between,
            goods_list:data.data.goods_list,
            express_info:data.data.express_info,
            location_list:data.data.location_list,
        })

        //   console.log(this.state.brandName);
        // console.log(this.state.listClassify,"listClassify");
/*         console.log(this.state.between);
        console.log(this.state.goods_list);
        console.log(this.state.express_info);
        console.log(this.state.location_list);
  
 */        
// console.log(this.state.pname);
    }

    handle(e){   
        e.stopPropagation(); 
        console.log(111);
        this.setState({
            flagF:false,
        },()=>{
            console.log(this.state.flagF);
        })
        
    }

    handleChange(){
        this.setState({
            flag:true,
        })
    }

    handleClickF(e){
        e.stopPropagation();
        this.setState({
            flagF:true,
        })
    }

    async handleClick(index){
        console.log(222);
        this.setState({
            flag:false,
        })
        let {id}=this.props.match.params;
        if(index<2&&index>0){
            
            let sort=this.state.sort[index].sort;
            console.log(sort);
             let data=await sortTitleOne(id,sort)
             console.log(data);
             this.setState({
                goods_list:data.data.goods_list,
             })
        }else{
            let data=await sortTitleTwo(id,this.state.sort[index].sort,this.state.sort[index].order)
            this.setState({
                goods_list:data.data.goods_list,
            })
        }
       
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BandGoods);
