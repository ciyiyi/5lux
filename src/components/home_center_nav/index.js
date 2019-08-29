import React, { Component } from 'react';
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
                  <li className="list_item" key={index}>
                    <a href={item.ad_link}>
                      <img className="list_img_item" src={item.ad_code} alt="" />
                    </a>
                    {item.ad_name}
                  </li>
                )
              })
            }
          </ul>
            </div>
        );
    }
}

export default CenterNav;
