import React, { Component } from 'react';
import {CommondAll} from './style';
import {brandAllBrand,brandRecommondBrand} from '@api/brand.js';
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from './connect';
import BScrollComponent from "@common/bscroll";
import {Link} from "react-router-dom";



class recommondAll extends Component {
    state={
        brandListC:[],
        listAll:[],
        flag:true,
        active:0,
    }
    render() {
        let{flag,active}=this.state;
        let {listAll,brandListC}=this.state;
        return (

            <CommondAll ref="scroll">
            <BScrollComponent ref="alleyscroll" id="d">

            <div id="c">
                <div id="d">
                <p>
                    <span></span>
                    <span>推荐品牌</span>
                    <span></span>
                </p>

                <ul className="commond_brand">{
                    brandListC.map((item,index)=>(
                        <li key={index} onClick={this.props.clickHandleId.bind(this,item.brand_id)}>
                        <img src={item.brand_logo}/>
                        </li>
                    ))
                }

                </ul>






                <div className="Title">{
                    listAll.map((item,index)=>(
                        <p onClick={this.handleClick.bind(this,index)}>{item.first_name }</p>
                    ))
                }
                </div>



                <p>
                    <span></span>
                    <span>全部品牌</span>
                    <span></span>
                </p>
                <div className="brandAll"  ref="title">{
                    listAll.map((item,index)=>(
                        <ul ref="list" key={index}>
                            <p>{item.first_name}</p>
                            {
                                item.child.map((itemS,idx)=>(
                                    <li key={idx}><Link to={"/brand/detail/"+itemS.brand_id}>{itemS.brand_name}
                                    </Link></li>
                                ))
                            }
                        </ul>
                    ))
                }
                </div>

                </div>

            </div>
        </BScrollComponent>

        </CommondAll>


        );
    }
    componentDidMount(){
        this.hnadleGetAll();
        this.handleBrandGetData();
    }
    async handleBrandGetData(){
        let data=await brandRecommondBrand();
        this.setState({
            brandListC:data.data.list,
        })
    }

    async hnadleGetAll(){
        let data=await brandAllBrand();
        this.setState({
            listAll:data.data.list,
        })
        console.log(this.state.listAll);
    }

    handleClick(index){
        let List=this.refs.title.querySelectorAll("p");
        console.log(List);
        this.refs.alleyscroll.scroll.scrollTo(0,-(List[index].offsetTop-80),500);
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(recommondAll);