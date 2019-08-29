import React, { Component } from 'react';
import Header from './header/index';
import {Page} from '@common/commonStyled';
import MainProduce from './mainProduce';
import Content from './content';
import Carousel from './Carousel';


class HyperMarket extends Component {
    render() {
        return (
            <Page>
                <Header/>
                <Carousel></Carousel>
                <MainProduce></MainProduce>
                <Content></Content>
            </Page>
        );
    }
}

export default HyperMarket;