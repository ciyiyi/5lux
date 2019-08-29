import React, { Component } from 'react'
import Header from "./header"
import {Page} from "./commonStyled/center"
import StoreList from "./storelist"
import ArrivalRight from "./arrival-right"
export default class Arrival extends Component {
    state={
        flag:false
    }
    render() {
       let {flag}=this.state
        return (
            <Page flag={flag}>
                <Header/>
              <StoreList style={{display:flag ? 'none' : 'block' }} onClick={this.handleToggle}/>
            <ArrivalRight style={{display:flag ? 'block' : 'none'}} onClick={this.handleToggle}/>
            </Page>
        )
    }
    handleToggle=()=>{
        this.setState({
            flag:!this.state.flag
        })
    }
}
