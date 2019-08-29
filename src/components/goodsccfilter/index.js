/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import "./index.css"
import {goods_api} from "@api/goodscc"
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./connect";
class Filter extends Component {
    constructor(){
        super();
       this.state={
        all_cateList:[],
        show:-1,
        pre:-1,
        allchildid:[]
       }
    }
    render() {
        
        let {all_cateList,show, allchildid}=this.state;
        // console.log(all_cateList)
        return (
           <div className="rgba">
           <div className="titlecc">{this.props.fashionType}</div>
           <div className="allCate">
             {
               all_cateList.map((item,index)=>(
                   <div key={index}>
                     <div className="goodsTypeItem" onClick={this.handleShow.bind(this)}>
                      {item.pname}
                      <div  onClick={this.handleToShow.bind(this,index)}>
                       <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAHlBMVEUAAADMzMyZmZlmZmbMzMyZmZlmZmbMzMyZmZlmZmZdlsG4AAAAB3RSTlMA39/fUFBQfvIn9QAAAFlJREFUKM9jGAWDGrCIFzqAaFaNpgAQzWY5OQFIuZeXl4C4ER0drSA6c+bMaUBKvLy8EMTV6OhoAtGWM2dOBlLlQADidgABiJ4JBDiEcRiCw0pcDhwFgxkAADR8KKV/2b1WAAAAAElFTkSuQmCC" />
                      </div>
                     </div>
                     <ul style={{display:show==index ? '' :'none'}} className="showItemUl">
                     {
                       item.children_name.map((ite,ind)=>(
                           <li className="showItem" key={ind} onClick={this.props.handleShowDetial.bind(this,{Listindex:ind,listItem: allchildid[ind]})}>{ite}</li>
                       ))
                     }
                    </ul>
                   </div>
               ))
             }
           </div>
           </div>
            )
            ;
    }
    async componentDidMount(){
        console.log(this.props.productId,"id值")
        let data=await goods_api();//传递id--》对应的all_cate会变化
        console.log(data.data.cat_info.allchildid.split(","))
        this.setState({
            all_cateList:data.data.all_cate,
            allchildid:data.data.cat_info.allchildid.split(",")
        });
       
    }
    handleToShow(index){
        let {pre}=this.state;
        if(pre==index){
            this.setState({
                show:-1,
                pre:-1
             })
        }else{
            this.setState({
                show:index,
                pre:index
             })
            
        }
        

    }
    handleShow(){

    }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(Filter)
