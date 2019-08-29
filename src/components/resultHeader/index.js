import React, { Component } from 'react'
import  {ResultHeaderWrapper}  from "./styled"
import { NavLink } from 'react-router-dom'

export default class ResultHeader extends Component {

    render() {
      
        return (
            <ResultHeaderWrapper>           
                <div className="result-top">  
                    <NavLink className="result-top-span" to="/search">返回</NavLink>
                    <h2 className="result-top-h2">Rolex劳力士</h2>

              </div>
            </ResultHeaderWrapper>
        )
    }


}



