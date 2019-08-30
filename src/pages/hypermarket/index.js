import React, { Component } from 'react';
import Header from './header/index';
import {Page} from '@common/commonStyled';
import MainProduce from './mainProduce';
import Content from './content';

// import BScrollComponent from "@common/bscroll";
// import {ConAll} from './styled';


class HyperMarket extends Component {
    render() {
        return (
            <Page>
                <Header/>
                {/* <ConAll> */}
                    {/* <BScrollComponent> */}
                        {/* <div> */}
                       
                            <MainProduce></MainProduce>
                            <Content></Content>
                        {/* </div> */}
                    {/* </BScrollComponent> */}
                {/* </ConAll> */}
            </Page>
        );
    }
}

export default HyperMarket;
