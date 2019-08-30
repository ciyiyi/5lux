import React, { Component } from 'react';
import {Link} from "react-router-dom"
import { index_button } from "@api/home"
export class CenterNav extends Component {
    constructor() {
        super()
         this.state = {
         dataBtn: [],
       }
     }
     async componentDidMount() {
 
        let data_button = await index_button();
        this.setState({
          dataBtn: data_button.data.list,
        });
    }
    render() {
        let { dataBtn} = this.state;
        return (
            <div>
            <ul className="slider-list">
            {
              dataBtn.map((item, index) => {
                return (
                  <Link className="list_item" key={index} to={(index==4) ? '/brand' : ''}>
                   
                      <img className="list_img_item" src={item.ad_code} alt="" />
                 
                    {item.ad_name}
                  </Link>
                )
              })
            }
          </ul>
            </div>
        );
    }
    handleToBrand(index){
          if(index===4){
            console.log(this.props)
          }
    }
}

export default CenterNav;
