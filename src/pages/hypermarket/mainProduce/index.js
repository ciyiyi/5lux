import React, { Component } from 'react';
import {MainStyle} from './style';



class MainProduce extends Component {
    state={
        list:[
            {
                titleC:"时尚发布厅",
                titleE:"FASHION&nbsp;TV",
                img:[
                    {
                        src:"http://img550.5lux.com.cn/2018/10/25/gh/154045757116_750x421.jpg",
                        text:"Stella&nbsp;McCartney"
                    },
                    {
                        src:"http://img550.5lux.com.cn/2018/10/25/cd/154045757343_369x456.jpg",
                        text:"Bvigari"
                    },
                    {
                        src:"http://img550.5lux.com.cn/2018/10/25/tu/154045757262_369x456.jpg",
                        text:"Armani"
                    }
                ]
            },
            {
                titleC:"生活方式",
                titleE:"LIFTSTYLE",
                img:[
                    {
                        src:"http://img550.5lux.com.cn/2019/07/04/uv/156222263251_668x380.jpg",
                        text:"Stella&nbsp;McCartney"
                    },
                    {
                        src:"http://img550.5lux.com.cn/2018/10/25/cd/154045757343_369x456.jpg",
                        text:"Bvigari"
                    },
                    {
                        src:"http://img550.5lux.com.cn/2018/10/25/tu/154045757262_369x456.jpg",
                        text:"Armani"
                    }
                ]
            },
            {
                titleC:"海外馆",
                titleE:"FASHION&nbsp;TV",
                img:[
                    {
                        src:"http://img550.5lux.com.cn/2018/12/06/de/154408732676_750x421.jpg",
                        text:"Stella&nbsp;McCartney"
                    },
                    {
                        src:"http://img550.5lux.com.cn/2018/10/25/jk/154045801240_369x456.jpg",
                        text:"Bvigari"
                    },
                    {
                        src:"http://img550.5lux.com.cn/2018/11/29/lm/154347550855_369x456.jpg",
                        text:"Armani"
                    }
                ]
            },
            {
                titleC:"会员专场",
                titleE:"FASHION&nbsp;TV",
                img:[
                    {
                        src:"http://img550.5lux.com.cn/2019/07/04/qr/156220823550_750x422.jpg",
                        text:"Stella&nbsp;McCartney"
                    },
                    {
                        src:"http://img550.5lux.com.cn/2019/07/04/vw/156220898065_350x456.jpg",
                        text:"Bvigari"
                    },
                    {
                        src:"http://img550.5lux.com.cn/2019/07/04/mn/156220898028_350x456.jpg",
                        text:"Armani"
                    }
                ]
            }



        ]
    };
    render() {
        let {list}=this.state;
        return (
            <MainStyle>
                <div className="baogeli_all">
                    <div className="baogeliCon">
                    <div className="baogeli">
                        <div>
                            <img src="http://img.5lux.com.cn/511/avatar/2015/11/18/14478271568197.jpg" alt=""/>
                            <p>宝格丽上海恒隆店</p>
                        </div>
                        <div>
                            <img src="http://img.5lux.com.cn/511/avatar/2015/11/18/14478271602912.jpg" alt=""/>
                            <p>宝格丽北京国贸店</p>
                        </div>
                        <div>
                            <img src="http://img.5lux.com.cn/511/avatar/2015/11/18/14478271599079.jpg" alt=""/>
                            <p>宝格丽天津银河国际店</p>
                        </div>
                        <div>
                            <img src="http://img.5lux.com.cn/511/avatar/2015/11/18/14478271583474.jpg" alt=""/>
                            <p>宝格丽上海尚兴店</p>
                        </div>
                    </div>
                </div>
                    <p className="all_flag_link">查看所有旗舰店</p>
                </div>
                
                {
                    list.map((item,index)=>(
                        <div className="module">   
                        <div className="module_top">
                            <p>{item.titleC}</p>
                            <p><span></span>
                            <span>{item.titleE}</span>
                            <span></span></p>
                        </div>
                        <div className="module_bottom">{
                            item.img.map((itemSub,idx)=>(
                                <div>
                                <img src={itemSub.src}/>
                                <p>{itemSub.text}</p>
                            </div>
                            ))
                        }
                        </div>
                    </div>
    
                    ))
                }
            </MainStyle>
        );
    }
}

export default MainProduce;