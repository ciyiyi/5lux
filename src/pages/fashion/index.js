import React, { Component } from 'react';
import FashionTop from "@components/fashion/fashion-top"
import FashionBanner from "@components/fashion/fashion-banner"
import FashionContext from "@components/fashion/fashion-context"
class Fashion extends Component {
    render() {
        return (
            <div>
             <FashionTop></FashionTop>
             <FashionBanner/>
             <FashionContext/>
            </div>
        );
    }
}

export default Fashion;
