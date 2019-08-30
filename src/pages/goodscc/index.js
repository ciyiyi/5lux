import React, { Component,Fragment } from 'react';
import FashionTop from "@components/fashion/fashion-top"
import GoodsccNav from "../../components/goodscc-nav"
import GoodsItemcc from "../../components/goodscc-item"
import Filter from "@components/goodsccfilter"
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./connect";
class Goodscc extends Component {
    render() {
        return (
            <div ref="div">
            {
                this.props.show1 ? <Fragment><FashionTop/>
                <GoodsccNav/></Fragment> : ''
            }
            <GoodsItemcc/>
            {
                this.props.show1 ? '' : <Filter/>
            }
            </div>
        );
    }
    componentDidMount(){
        if(!this.props.show1){
            this.refs.div.addEventListener('click', this.props.handleClick.bind(this))
        }
        
    }
   
}
export default connect(mapStateToProps, mapDispatchToProps)(Goodscc)
