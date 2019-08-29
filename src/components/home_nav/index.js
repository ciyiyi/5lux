import React, {
    Component
} from 'react'
import { HomeNavWrapper } from "./styled"

export default class HomeNav extends Component {
    constructor() {
        super();
        this.state = {
            navList: [{
                text: "上新"
            },
            {
                text: "海外馆"
            },
            {
                text: "闪购"
            },
            {
                text: "品牌"
            },
            {
                text: "专柜自提"
            },

            ],
            flag: false
        };
       
    }

    render() {
        let { navList, flag } = this.state;
        return (
            <HomeNavWrapper>
                {
                    flag ? <ul className="home_nav" ref="homeNav" onScroll={this.handleScroll.bind(this)}>
                        {
                            navList.map((item, index) => (
                                <li>
                                    {item.text}
                                </li>
                            ))
                        }
                    </ul> : ""
                }
            </HomeNavWrapper>

        )
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this), true)
        
    }
    handleScroll(){
            var t = document.documentElement.scrollTop || document.body.scrollTop;
            if (t >= 902) {

                this.setState({
                    flag:true
                })
               
            } else {
                this.setState({
                    flag:false
                })
            }
       
    }

}