import React, { Component } from 'react';
import Left from './left';
import Right from './right';
import {MainStyle} from './styled';

class Classify extends Component {
    render() {
        return (
            <MainStyle>
                <Left></Left>
                <Right></Right>
            </MainStyle>
        );
    }
}

export default Classify;